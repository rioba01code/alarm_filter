class CorrelationEngine:

    ROOT_CAUSES = {

        "battery": [
            "dc",
            "battery",
            "charger",
            "relay",
            "trip"
        ],

        "transformer": [
            "transformer",
            "breaker",
            "relay"
        ],

        "communication": [
            "communication",
            "scada",
            "network"
        ]
    }

    @staticmethod
    def correlate(df):

        correlations = []

        alarms = df.to_dict(orient="records")

        for row in alarms:

            alarm_text = str(row["Alarm"]).lower()

            root_cause = "Unknown"

            confidence = 0

            for cause, keywords in CorrelationEngine.ROOT_CAUSES.items():

                for keyword in keywords:

                    if keyword in alarm_text:

                        root_cause = cause.title()

                        confidence = 90

                        break

                if confidence > 0:
                    break

            correlations.append({

                "Station": row.get("Station"),

                "Alarm": row.get("Alarm"),

                "Root Cause": root_cause,

                "Confidence": confidence

            })

        return correlations