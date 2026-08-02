import pandas as pd
from io import StringIO
from pathlib import Path


class CSVLoader:

    ENCODINGS = [

        "utf-8",

        "utf-8-sig",

        "latin1",

        "cp1252",

        "iso-8859-1"

    ]

    @staticmethod
    def read(source):

        # -----------------------------------------
        # Read from file path
        # -----------------------------------------

        if isinstance(source, (str, Path)):

            with open(source, "rb") as f:

                contents = f.read()

        else:

            contents = source

        # -----------------------------------------
        # Try supported encodings
        # -----------------------------------------

        for encoding in CSVLoader.ENCODINGS:

            try:

                df = pd.read_csv(

                    StringIO(

                        contents.decode(encoding)

                    )

                )

                # Clean column names

                df.columns = [

                    str(col).strip()

                    for col in df.columns

                ]

                # Remove empty rows

                df = df.dropna(how="all")

                if df.empty:

                    raise Exception(

                        "CSV file contains no data."

                    )

                return df

            except UnicodeDecodeError:

                continue

        raise Exception(

            "Unable to decode CSV file using supported encodings."

        )