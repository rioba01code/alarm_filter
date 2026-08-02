import pandas as pd


class FloodDetector:

    # IEC 62682
    FLOOD_COUNT = 10
    FLOOD_WINDOW = 10  # seconds

    @staticmethod
    def detect(df):

        if df.empty:
            return []

        df = df.copy()

        if not pd.api.types.is_datetime64_any_dtype(df["Timestamp"]):
            df["Timestamp"] = pd.to_datetime(df["Timestamp"])

        report = []

        grouped = df.groupby(
            ["Station", "Feeder"],
            sort=False
        )

        for (station, feeder), alarms in grouped:

            alarms = alarms.sort_values("Timestamp")

            timestamps = alarms["Timestamp"].to_numpy()

            start = 0

            for end in range(len(timestamps)):

                window = (
                    timestamps[end] - timestamps[start]
                ) / pd.Timedelta(seconds=1)

                while window > FloodDetector.FLOOD_WINDOW:

                    start += 1

                    window = (
                        timestamps[end] - timestamps[start]
                    ) / pd.Timedelta(seconds=1)

                count = end - start + 1

                if count >= FloodDetector.FLOOD_COUNT:

                    report.append({

                        "Station": station,

                        "Feeder": feeder,

                        "Alarm Count": count,

                        "First Alarm": str(timestamps[start]),

                        "Last Alarm": str(timestamps[end]),

                        "Duration (Seconds)": round(float(window), 2),

                        "Flood": True

                    })

                    break

        report.sort(

            key=lambda x: x["Alarm Count"],

            reverse=True

        )

        return report