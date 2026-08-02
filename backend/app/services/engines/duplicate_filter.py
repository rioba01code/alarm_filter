import pandas as pd


class DuplicateFilter:

    DUPLICATE_WINDOW = 5  # seconds

    @staticmethod
    def remove(df):

        if df.empty:
            return df, 0

        df = df.sort_values("Timestamp").reset_index(drop=True)

        filtered = []

        removed = 0

        previous = {}

        for _, row in df.iterrows():

            key = (

                row["Station"],

                row["Feeder"],

                row["Device"],

                row["Alarm"]

            )

            current_time = row["Timestamp"]

            if key not in previous:

                previous[key] = current_time

                filtered.append(row)

                continue

            seconds = (

                current_time

                - previous[key]

            ).total_seconds()

            if seconds <= DuplicateFilter.DUPLICATE_WINDOW:

                removed += 1

                continue

            previous[key] = current_time

            filtered.append(row)

        filtered_df = pd.DataFrame(filtered)

        return filtered_df.reset_index(drop=True), removed