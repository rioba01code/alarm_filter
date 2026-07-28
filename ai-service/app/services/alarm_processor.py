from app.services.duplicate_filter import DuplicateFilter
from app.services.priority_engine import PriorityEngine
from app.services.category_engine import CategoryEngine
from app.services.report_generator import ReportGenerator
from app.services.correlation_engine import CorrelationEngine


class AlarmProcessor:

    def process(self, df):

        # -----------------------------
        # Step 1: Remove duplicate alarms
        # -----------------------------
        df, duplicates_removed = DuplicateFilter.remove(df)

        # -----------------------------
        # Step 2: Assign priority
        # -----------------------------
        df["Priority"] = df["Alarm"].apply(
            PriorityEngine.classify
        )

        # -----------------------------
        # Step 3: Assign category
        # -----------------------------
        df["Category"] = df["Alarm"].apply(
            CategoryEngine.classify
        )

        # -----------------------------
        # Step 4: Correlate alarms
        # -----------------------------
        correlations = CorrelationEngine.correlate(df)

        # -----------------------------
        # Step 5: Generate summary report
        # -----------------------------
        summary = ReportGenerator.generate(
            df,
            duplicates_removed
        )

        # -----------------------------
        # Step 6: Return processed data
        # -----------------------------
        return df, summary, correlations