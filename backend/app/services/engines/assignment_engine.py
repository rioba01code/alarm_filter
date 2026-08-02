class AssignmentEngine:

    TEAM_MAP = {

        "Protection": "Protection Team",

        "Battery": "Substation Maintenance",

        "Communication": "SCADA Team",

        "Power": "Electrical Team",

        "Temperature": "Field Maintenance",

        "General": "Operations"
    }

    @classmethod
    def assign(cls, category):

        return cls.TEAM_MAP.get(
            category,
            "Operations"
        )