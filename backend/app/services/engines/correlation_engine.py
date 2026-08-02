import pandas as pd


class CorrelationEngine:

    MIN_CORRELATED_ALARMS = 2

    @staticmethod
    def detect(df):

        if df.empty:
            return []

        df = df.copy()

        if not pd.api.types.is_datetime64_any_dtype(df["Timestamp"]):
            df["Timestamp"] = pd.to_datetime(df["Timestamp"])

        grouped = (
            df.groupby(
                ["Station", "Feeder"],
                sort=False
            )
        )

        correlations = []

        for (station, feeder), alarms in grouped:

            alarm_count = len(alarms)

            if alarm_count < CorrelationEngine.MIN_CORRELATED_ALARMS:
                continue

            first_alarm = alarms["Timestamp"].min()
            last_alarm = alarms["Timestamp"].max()

            duration = (
                last_alarm - first_alarm
            ).total_seconds()

            severity = alarms["Severity"].mode()

            dominant = (
                severity.iloc[0]
                if not severity.empty
                else "Unknown"
            )

            devices = (
                alarms["Device"]
                .dropna()
                .unique()
                .tolist()
            )

            alarm_types = (
                alarms["Alarm"]
                .dropna()
                .unique()
                .tolist()
            )

            correlations.append({

                "Station": station,

                "Feeder": feeder,

                "Alarm Count": alarm_count,

                "Devices": devices,

                "Alarm Types": alarm_types,

                "Dominant Severity": dominant,

                "First Alarm": first_alarm,

                "Last Alarm": last_alarm,

                "Duration (Seconds)": round(duration, 2),

                "Status": (
                    "Highly Correlated"
                    if alarm_count >= 10
                    else "Possible Common Cause"
                )

            })

        correlations.sort(
            key=lambda x: x["Alarm Count"],
            reverse=True
        )

        return correlations