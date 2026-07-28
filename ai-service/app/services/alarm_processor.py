import pandas as pd


class AlarmProcessor:

    def process(self, df: pd.DataFrame):

        # Clean column names
        df.columns = df.columns.str.strip()

        # Fill missing values
        df = df.fillna("Unknown")

        # Remove duplicate alarms
        before = len(df)

        df = df.drop_duplicates()

        duplicates_removed = before - len(df)

        # -----------------------
        # AI Rule Engine
        # -----------------------

        def classify_priority(alarm):

            alarm = str(alarm).lower()

            critical_keywords = [
                "battery",
                "trip",
                "dc fail",
                "dc failure",
                "breaker fail",
                "transformer"
            ]

            major_keywords = [
                "communication",
                "protection",
                "relay",
                "voltage",
                "current"
            ]

            for word in critical_keywords:
                if word in alarm:
                    return "Critical"

            for word in major_keywords:
                if word in alarm:
                    return "Major"

            return "Minor"

        df["Priority"] = df["Alarm"].apply(classify_priority)

        # -----------------------
        # Station statistics
        # -----------------------

        stations = []

        if "Station" in df.columns:
            stations = sorted(df["Station"].unique().tolist())

        summary = {

            "total_alarms": len(df),

            "critical": len(df[df["Priority"] == "Critical"]),

            "major": len(df[df["Priority"] == "Major"]),

            "minor": len(df[df["Priority"] == "Minor"]),

            "duplicates_removed": duplicates_removed,

            "stations": stations
        }

        return df, summary