class NuisanceDetector:

    REPEAT_LIMIT = 3

    @staticmethod
    def detect(df):

        nuisance = []

        grouped = df.groupby(
            ["Device", "Alarm"]
        )

        for (device, alarm), rows in grouped:

            if len(rows) >= NuisanceDetector.REPEAT_LIMIT:

                nuisance.append({

                    "Device": device,

                    "Alarm": alarm,

                    "Occurrences": len(rows),

                    "Classification": "Nuisance Alarm"

                })

        return nuisance