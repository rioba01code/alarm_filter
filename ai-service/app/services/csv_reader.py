import pandas as pd
from io import StringIO


class CSVReader:

    @staticmethod
    def read(contents: bytes):

        df = pd.read_csv(
            StringIO(contents.decode("utf-8"))
        )

        # Clean column names
        df.columns = df.columns.str.strip()

        # Replace empty values
        df = df.fillna("Unknown")

        return df