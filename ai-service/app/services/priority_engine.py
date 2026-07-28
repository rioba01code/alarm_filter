class PriorityEngine:

    @staticmethod
    def classify(alarm):

        alarm = str(alarm).lower()

        critical_keywords = [

            "battery",
            "charger",
            "dc fail",
            "dc failure",
            "trip",
            "breaker fail",
            "transformer"

        ]

        major_keywords = [

            "relay",
            "communication",
            "voltage",
            "current",
            "protection"

        ]

        for keyword in critical_keywords:

            if keyword in alarm:

                return "Critical"

        for keyword in major_keywords:

            if keyword in alarm:

                return "Major"

        return "Minor"