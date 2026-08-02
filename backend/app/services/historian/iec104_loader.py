import pandas as pd


class IEC104Loader:

    """
    IEC-60870-5-104 Loader

    Future purpose:
    Connect to a live IEC-104 server and retrieve
    SOE (Sequence of Events) alarms.

    Current version:
    Placeholder for future SCADA integration.
    """

    @staticmethod
    def read(host=None, port=2404):

        raise NotImplementedError(

            f"""
IEC-104 Loader is not implemented.

Future implementation will connect to:

Host : {host}
Port : {port}

and return a pandas DataFrame containing
live SCADA alarm events.

Example columns:

Timestamp
Station
Feeder
Device
Alarm
Severity

"""
        )

    @staticmethod
    def test_connection(host, port=2404):

        """
        Future connection test.
        """

        return False