from fastapi import APIRouter, UploadFile, File

from app.services.csv_reader import CSVReader
from app.services.alarm_processor import AlarmProcessor

router = APIRouter()

processor = AlarmProcessor()


@router.post("/alarms/upload")
async def upload_alarm(file: UploadFile = File(...)):
    """
    Upload a SCADA alarm CSV file, process it,
    and return the filtered results.
    """

    contents = await file.read()

    df = CSVReader.read(contents)

    processed_df, summary, correlations = processor.process(df)

    return {
        "summary": summary,
        "correlations": correlations,
        "alarms": processed_df.to_dict(orient="records")
    }