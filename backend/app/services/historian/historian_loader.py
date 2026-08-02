from pathlib import Path

from app.services.historian.csv_loader import CSVLoader
from app.services.historian.excel_loader import ExcelLoader


class HistorianLoader:

    SUPPORTED_FORMATS = {

        ".csv": CSVLoader,

        ".xlsx": ExcelLoader,

        ".xls": ExcelLoader

    }

    @classmethod
    def load(cls, filename, contents):

        extension = Path(filename).suffix.lower()

        loader = cls.SUPPORTED_FORMATS.get(extension)

        if loader is None:

            raise Exception(

                f"Unsupported file format: {extension}"

            )

        return loader.read(contents)