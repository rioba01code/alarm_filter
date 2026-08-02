from app.database.connection import SessionLocal
from app.models.alarm import Alarm


class AlarmRepository:

    @staticmethod
    def save(df):

        db = SessionLocal()

        try:

            for _, row in df.iterrows():

                alarm = Alarm(

                    timestamp=row.get("Timestamp", ""),

                    station=row.get("Station", ""),

                    feeder=row.get("Feeder", ""),

                    device=row.get("Device", ""),

                    alarm=row.get("Alarm", ""),

                    severity=row.get("Severity", ""),

                    priority=row.get("Priority", ""),

                    category=row.get("Category", ""),

                    assigned_team=row.get("Assigned Team", ""),

                    status=row.get("Status", "Open")

                )

                db.add(alarm)

            db.commit()

        except Exception as e:

            db.rollback()

            raise e

        finally:

            db.close()