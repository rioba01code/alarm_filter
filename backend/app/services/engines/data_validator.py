import pandas as pd

from app.services.engines.column_mapper import ColumnMapper


class DataValidator:

    REQUIRED_COLUMNS = [

        "Timestamp",
        "Station",
        "Feeder",
        "Device",
        "Alarm",
        "Severity"

    ]

    @classmethod
    def validate(cls, df):

        # ----------------------------------------
        # Normalize column names
        # ----------------------------------------

        df = ColumnMapper.normalize(df)

        # ----------------------------------------
        # Remove duplicate column names
        # ----------------------------------------

        df = df.loc[:, ~df.columns.duplicated()]

        # ----------------------------------------
        # Check required columns
        # ----------------------------------------

        missing = [

            column

            for column in cls.REQUIRED_COLUMNS

            if column not in df.columns

        ]

        if missing:

            raise Exception(

                f"Missing required columns: {', '.join(missing)}"

            )

        # ----------------------------------------
        # Remove completely empty rows
        # ----------------------------------------

        df = df.dropna(how="all")

        # ----------------------------------------
        # Remove rows without timestamps
        # ----------------------------------------

        df = df[df["Timestamp"].notna()]

        # ----------------------------------------
        # Remove rows without alarm text
        # ----------------------------------------

        df = df[df["Alarm"].notna()]

        # ----------------------------------------
        # Convert Timestamp
        # ----------------------------------------

        df["Timestamp"] = pd.to_datetime(

            df["Timestamp"],

            errors="coerce"

        )

        # Remove invalid timestamps

        df = df[df["Timestamp"].notna()]

        # ----------------------------------------
        # Fill optional values
        # ----------------------------------------

        df["Station"] = df["Station"].fillna("Unknown")

        df["Feeder"] = df["Feeder"].fillna("Unknown")

        df["Device"] = df["Device"].fillna("Unknown")

        df["Severity"] = df["Severity"].fillna("Information")

        # ----------------------------------------
        # Remove duplicate alarms
        # ----------------------------------------

        df = df.drop_duplicates()

        # ----------------------------------------
        # Sort chronologically
        # ----------------------------------------

        df = df.sort_values(

            by="Timestamp"

        ).reset_index(drop=True)

        return df