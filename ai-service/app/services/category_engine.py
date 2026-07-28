class CategoryEngine:

    @staticmethod
    def classify(alarm):

        alarm = str(alarm).lower()

        if "battery" in alarm:
            return "Battery Charger"

        elif "dc" in alarm:
            return "DC System"

        elif "relay" in alarm:
            return "Protection"

        elif "breaker" in alarm:
            return "Circuit Breaker"

        elif "communication" in alarm:
            return "Communication"

        elif "transformer" in alarm:
            return "Transformer"

        else:
            return "General"