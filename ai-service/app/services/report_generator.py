class ReportGenerator:

    @staticmethod
    def generate(df, duplicates_removed):

        stations = []
        station_alarm_count = {}

        if "Station" in df.columns:

            station_alarm_count = (

                df.groupby("Station")

                .size()

                .sort_values(ascending=False)

                .to_dict()

            )

            stations = list(station_alarm_count.keys())

        priority_distribution = (

            df["Priority"]

            .value_counts()

            .to_dict()

        )

        category_distribution = (

            df["Category"]

            .value_counts()

            .to_dict()

        )

        return {

            "total_alarms": len(df),

            "duplicates_removed": duplicates_removed,

            "priority_distribution": priority_distribution,

            "category_distribution": category_distribution,

            "stations": stations,

            "station_alarm_count": station_alarm_count

        }