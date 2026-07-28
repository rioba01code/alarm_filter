import pandas as pd
from fastapi import UploadFile


def parse_alarm_file(file: UploadFile):

    df = pd.read_csv(file.file)

    return {
        "filename": file.filename,
        "rows": len(df),
        "columns": list(df.columns),
        "preview": df.head(10).to_dict(orient="records")
    }