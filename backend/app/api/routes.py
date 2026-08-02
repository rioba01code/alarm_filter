from fastapi import APIRouter, UploadFile, File

from app.services.historian.historian_loader import HistorianLoader
from app.services.alarm_processor import AlarmProcessor

router = APIRouter()

processor = AlarmProcessor()


@router.post("/alarms/upload")
async def upload_alarm(file: UploadFile = File(...)):

    # ============================================
    # Read uploaded file
    # ============================================

    contents = await file.read()

    df = HistorianLoader.load(

        file.filename,

        contents

    )

    # ============================================
    # Process alarms
    # ============================================

    dashboard = processor.process(df)

    # ============================================
    # Return dashboard data
    # ============================================

    return {

        "success": True,

        "filename": file.filename,

        "dashboard": dashboard

    }