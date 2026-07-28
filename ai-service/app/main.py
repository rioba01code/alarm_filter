from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(
    title="Alarm Filter API",
    version="1.0.0",
    description="AI-powered SCADA Alarm Filtering Platform"
)

app.include_router(router)


@app.get("/")
def root():
    return {
        "message": "Alarm Filter API is running successfully"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }