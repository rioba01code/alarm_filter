from fastapi import APIRouter, UploadFile, File
import pandas as pd
from io import StringIO

from app.services.alarm_processor import AlarmProcessor

router = APIRouter()

processor = AlarmProcessor()


@router.post("/alarms/upload")
async def upload_alarm(file: UploadFile = File(...)):
    contents = await file.read()

    df = pd.read_csv(StringIO(contents.decode()))

    processed_df, summary = processor.process(df)

    return {
        "summary": summary,
        "alarms": processed_df.to_dict(orient="records")
    }