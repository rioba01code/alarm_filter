import uuid
import pandas as pd


class IncidentEngine:

    @staticmethod
    def generate(df):

        if df.empty:
            return []

        incidents = []

        df = df.copy()

        df["Timestamp"] = pd.to_datetime(df["Timestamp"])

        # Group by Station + Feeder
        grouped = df.groupby(
            ["Station", "Feeder"],
            sort=False
        )

        for (station, feeder), alarms in grouped:

            # Only serious alarms become incidents
            serious = alarms[
                alarms["Priority"].isin(
                    ["Critical", "Major"]
                )
            ]

            if serious.empty:
                continue

            incident_id = (
                "INC-" +
                str(uuid.uuid4())[:8].upper()
            )

            incidents.append({

                "Incident ID": incident_id,

                "Station": station,

                "Feeder": feeder,

                "Start Time": str(
                    serious["Timestamp"].min()
                ),

                "Last Alarm": str(
                    serious["Timestamp"].max()
                ),

                "Alarm Count": len(serious),

                "Highest Priority": (
                    "Critical"
                    if "Critical" in serious["Priority"].values
                    else "Major"
                ),

                "Assigned Team": (
                    serious["Assigned Team"]
                    .mode()
                    .iloc[0]
                    if not serious["Assigned Team"].mode().empty
                    else "Control Centre"
                ),

                "Affected Devices": list(
                    serious["Device"]
                    .dropna()
                    .unique()
                ),

                "Status": "Open"

            })

        incidents.sort(

            key=lambda x: (

                x["Highest Priority"] != "Critical",

                -x["Alarm Count"]

            )

        )

        return incidents