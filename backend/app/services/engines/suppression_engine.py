import pandas as pd


class SuppressionEngine:

    PARENT_EVENTS = [

        "station supply failed",
        "station blackout",
        "dc failure",
        "battery charger failure",
        "communication failure",
        "communication lost",
        "loss of communication",
        "busbar fault",
        "transformer trip",
        "transformer differential",
        "protection operated"

    ]

    CHILD_EVENTS = [

        "breaker open",
        "breaker closed",
        "rtu offline",
        "ied offline",
        "bay communication lost",
        "communication lost",
        "device offline",
        "relay alarm",
        "relay unavailable"

    ]

    TIME_WINDOW = 30

    @staticmethod
    def suppress(df):

        if df.empty:
            return df

        df = df.copy()

        df["Timestamp"] = pd.to_datetime(df["Timestamp"])

        df["Suppressed"] = False

        df = df.sort_values("Timestamp")

        # ---------------------------------------
        # Process station by station
        # ---------------------------------------

        for station, station_df in df.groupby("Station"):

            parent_rows = station_df[
                station_df["Alarm"].str.lower().apply(
                    lambda x: any(
                        event in x
                        for event in SuppressionEngine.PARENT_EVENTS
                    )
                )
            ]

            child_rows = station_df[
                station_df["Alarm"].str.lower().apply(
                    lambda x: any(
                        event in x
                        for event in SuppressionEngine.CHILD_EVENTS
                    )
                )
            ]

            if parent_rows.empty or child_rows.empty:
                continue

            for _, parent in parent_rows.iterrows():

                parent_time = parent["Timestamp"]

                affected = child_rows[

                    (child_rows["Timestamp"] >= parent_time)

                    &

                    (
                        child_rows["Timestamp"]
                        <= parent_time + pd.Timedelta(seconds=30)
                    )

                ]

                df.loc[affected.index, "Suppressed"] = True

        return df