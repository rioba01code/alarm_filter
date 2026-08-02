from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import router

app = FastAPI(
    title="SCADA Alarm Intelligence API",
    version="1.0.0"
)

# =====================================================
# CORS Configuration
# =====================================================

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",


  # Production frontend
    "https://alarm-filter-2gzd.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =====================================================
# API Routes
# =====================================================

app.include_router(router)

# =====================================================
# Root Endpoint
# =====================================================

@app.get("/")
async def home():
    return {
        "status": "Running",
        "system": "SCADA Alarm Intelligence Platform",
        "version": "1.0.0",
        "message": "Backend is online."
    }

# =====================================================
# Health Check
# =====================================================

@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }