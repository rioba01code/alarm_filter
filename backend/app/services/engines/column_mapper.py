class ColumnMapper:

    COLUMN_MAP = {

        "Alarm": [
            "Alarm",
            "Message",
            "Description",
            "Alarm Text",
            "Event",
            "Text",
            "text"
        ],

        "Timestamp": [
            "Timestamp",
            "Time",
            "DateTime",
            "Occurrence Time",
            "Date",
            "Date/Time"
        ],

        "Station": [
            "Station",
            "Substation",
            "Site",
            "Location"
        ],

        "Feeder": [
            "Feeder",
            "Bay",
            "Circuit"
        ],

        "Device": [
            "Device",
            "Equipment",
            "IED",
            "Asset"
        ],

        "Severity": [
            "Severity",
            "Level",
            "Priority"
        ]

    }

    @classmethod
    def normalize(cls, df):

        # Remove leading/trailing spaces
        df.columns = [str(c).strip() for c in df.columns]

        renamed = {}

        for standard, aliases in cls.COLUMN_MAP.items():

            for alias in aliases:

                for column in df.columns:

                    if column.lower() == alias.lower():

                        renamed[column] = standard

                        break

        return df.rename(columns=renamed)