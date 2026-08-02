import pandas as pd
from io import BytesIO
from pathlib import Path


class ExcelLoader:

    @staticmethod
    def read(source, sheet_name=0):

        # -----------------------------------------
        # Read from uploaded bytes or local file
        # -----------------------------------------

        if isinstance(source, (str, Path)):

            df = pd.read_excel(
                source,
                sheet_name=sheet_name
            )

        else:

            df = pd.read_excel(
                BytesIO(source),
                sheet_name=sheet_name
            )

        # -----------------------------------------
        # Remove completely empty rows
        # -----------------------------------------

        df = df.dropna(how="all")

        # -----------------------------------------
        # Remove duplicate rows
        # -----------------------------------------

        df = df.drop_duplicates()

        # -----------------------------------------
        # Clean column names
        # -----------------------------------------

        df.columns = [

            str(col).strip()

            for col in df.columns

        ]

        if df.empty:

            raise Exception(
                "Excel file contains no data."
            )

        return df