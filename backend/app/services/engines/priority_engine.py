class PriorityEngine:

    PRIORITY_RULES = {

        "Critical": [

            "trip",
            "tripped",
            "lockout",
            "lock out",
            "earth fault",
            "busbar fault",
            "differential",
            "protection operated",
            "overcurrent",
            "distance protection",
            "buchholz",
            "fire",
            "arc flash",
            "gas alarm"

        ],

        "Major": [

            "battery charger failure",
            "battery low",
            "dc fail",
            "dc failure",
            "communication failure",
            "communication lost",
            "loss of communication",
            "breaker fail",
            "relay failure",
            "voltage high",
            "voltage low",
            "transformer alarm"

        ],

        "Minor": [

            "temperature high",
            "fan failure",
            "cooling",
            "door open",
            "door alarm",
            "heater",
            "oil level low",
            "service required"

        ],

        "Information": [

            "breaker open",
            "breaker closed",
            "switch open",
            "switch closed",
            "acknowledged",
            "communication restored",
            "login",
            "logout",
            "operator action",
            "healthy"

        ]

    }

    @classmethod
    def classify(cls, alarm):

        alarm = str(alarm).lower()

        for priority, rules in cls.PRIORITY_RULES.items():

            for keyword in rules:

                if keyword in alarm:

                    return priority

        return "Warning"