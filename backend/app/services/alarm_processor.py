import time

from app.services.engines.data_validator import DataValidator
from app.services.engines.duplicate_filter import DuplicateFilter
from app.services.engines.priority_engine import PriorityEngine
from app.services.engines.category_engine import CategoryEngine
from app.services.engines.assignment_engine import AssignmentEngine
from app.services.engines.correlation_engine import CorrelationEngine
from app.services.engines.flood_detector import FloodDetector
from app.services.engines.incident_engine import IncidentEngine
from app.services.engines.suppression_engine import SuppressionEngine
from app.services.engines.nuisance_detector import NuisanceDetector
from app.services.engines.recommendation_engine import RecommendationEngine

from app.services.report_generator import ReportGenerator


class AlarmProcessor:

    @staticmethod
    def log(step, message):
        print(f"[{step}/10] {message}")

    @staticmethod
    def timer(name, start):
        print(f"{name:<30} {time.perf_counter() - start:.3f} sec")

    @classmethod
    def process(cls, df):

        overall_start = time.perf_counter()

        try:

            # ======================================================
            # STEP 1
            # ======================================================

            cls.log(1, "Validating alarm data...")

            t = time.perf_counter()

            df = DataValidator.validate(df)

            cls.timer("Validation", t)

            # ======================================================
            # STEP 2
            # ======================================================

            cls.log(2, "Removing duplicate alarms...")

            t = time.perf_counter()

            df, duplicates_removed = DuplicateFilter.remove(df)

            cls.timer("Duplicate Filter", t)

            # ======================================================
            # STEP 3
            # ======================================================

            cls.log(3, "Suppressing secondary alarms...")

            t = time.perf_counter()

            df = SuppressionEngine.suppress(df)

            cls.timer("Suppression Engine", t)

            # ======================================================
            # STEP 4
            # ======================================================

            cls.log(4, "Classifying alarm priorities...")

            t = time.perf_counter()

            df["Priority"] = df["Alarm"].apply(
                PriorityEngine.classify
            )

            cls.timer("Priority Engine", t)

            # ======================================================
            # STEP 5
            # ======================================================

            cls.log(5, "Categorising alarms...")

            t = time.perf_counter()

            df["Category"] = df["Alarm"].apply(
                CategoryEngine.classify
            )

            cls.timer("Category Engine", t)

            # ======================================================
            # STEP 6
            # ======================================================

            cls.log(6, "Assigning response teams...")

            t = time.perf_counter()

            df["Assigned Team"] = df["Category"].apply(
                AssignmentEngine.assign
            )

            df["Status"] = "Open"

            cls.timer("Assignment Engine", t)

            # ======================================================
            # STEP 7
            # ======================================================

            cls.log(7, "Detecting correlated alarms...")

            t = time.perf_counter()

            correlations = CorrelationEngine.detect(df)

            cls.timer("Correlation Engine", t)

            # ======================================================
            # STEP 8
            # ======================================================

            cls.log(8, "Detecting alarm floods...")

            t = time.perf_counter()

            flood_report = FloodDetector.detect(df)

            cls.timer("Flood Detector", t)

            # ======================================================
            # STEP 9
            # ======================================================

            cls.log(9, "Generating incidents...")

            t = time.perf_counter()

            incidents = IncidentEngine.generate(df)

            cls.timer("Incident Engine", t)

            # ======================================================
            # STEP 10
            # ======================================================

            cls.log(10, "Detecting nuisance alarms...")

            t = time.perf_counter()

            nuisance = NuisanceDetector.detect(df)

            cls.timer("Nuisance Detector", t)

            # ======================================================
            # AI
            # ======================================================

            print("Generating AI recommendations...")

            t = time.perf_counter()

            recommendations = RecommendationEngine.generate(
                df,
                incidents,
                flood_report
            )

            cls.timer("Recommendation Engine", t)

            # ======================================================
            # REPORT
            # ======================================================

            print("Generating dashboard report...")

            t = time.perf_counter()

            dashboard = ReportGenerator.generate(
                df=df,
                duplicates_removed=duplicates_removed,
                correlations=correlations,
                flood_report=flood_report,
                incidents=incidents,
                nuisance=nuisance,
                processing_time=0
            )

            cls.timer("Report Generator", t)

            dashboard["recommendations"] = recommendations

            dashboard["processing_time"] = round(
                time.perf_counter() - overall_start,
                2
            )

            print(
                f"\nTOTAL PROCESSING TIME : {dashboard['processing_time']} sec"
            )

            return dashboard

        except Exception as e:

            raise Exception(
                f"Alarm processing failed: {str(e)}"
            )