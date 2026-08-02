class CategoryEngine:

    @staticmethod
    def classify(alarm):

        alarm = str(alarm).lower()

        if "breaker" in alarm:
            return "Protection"

        if "battery" in alarm:
            return "Battery"

        if "communication" in alarm:
            return "Communication"

        if "temperature" in alarm:
            return "Temperature"

        if "dc" in alarm:
            return "Power"

        return "General"