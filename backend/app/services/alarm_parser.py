from fastapi import UploadFile

from app.services.historian.historian_loader import HistorianLoader

from app.services.engines.column_mapper import ColumnMapper
from app.services.engines.data_validator import DataValidator
from app.services.engines.duplicate_filter import DuplicateFilter
from app.services.engines.flood_detector import FloodDetector
from app.services.engines.nuisance_detector import NuisanceDetector
from app.services.engines.suppression_engine import SuppressionEngine
from app.services.engines.priority_engine import PriorityEngine
from app.services.engines.correlation_engine import CorrelationEngine
from app.services.engines.incident_engine import IncidentEngine


def parse_alarm_file(file: UploadFile):

    # ----------------------------------
    # Load uploaded file
    # ----------------------------------

    contents = file.file.read()

    df = HistorianLoader.load(

        file.filename,

        contents

    )

    # ----------------------------------
    # Normalize columns
    # ----------------------------------

    df = ColumnMapper.normalize(df)

    # ----------------------------------
    # Validate
    # ----------------------------------

    df = DataValidator.validate(df)

    # ----------------------------------
    # Duplicate filtering
    # ----------------------------------

    df, duplicates_removed = DuplicateFilter.remove(df)

    # ----------------------------------
    # Priority classification
    # ----------------------------------

    df["Priority"] = df["Alarm"].apply(

        PriorityEngine.classify

    )

    # ----------------------------------
    # Alarm Suppression
    # ----------------------------------

    df = SuppressionEngine.suppress(df)

    # ----------------------------------
    # Analytics
    # ----------------------------------

    flood_report = FloodDetector.detect(df)

    nuisance_report = NuisanceDetector.detect(df)

    correlation_report = CorrelationEngine.detect(df)

    incidents = IncidentEngine.generate(df)

    # ----------------------------------
    # Return response
    # ----------------------------------

    return {

        "filename": file.filename,

        "rows_processed": len(df),

        "duplicates_removed": duplicates_removed,

        "floods_detected": len(flood_report),

        "nuisance_alarms": len(nuisance_report),

        "correlated_events": len(correlation_report),

        "incidents": len(incidents),

        "preview": df.head(20).to_dict(

            orient="records"

        ),

        "reports": {

            "floods": flood_report,

            "nuisance": nuisance_report,

            "correlations": correlation_report,

            "incidents": incidents

        }

    }