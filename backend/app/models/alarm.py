from sqlalchemy.orm import declarative_base
from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

Base = declarative_base()


class Alarm(Base):

    __tablename__ = "alarms"

    id = Column(Integer, primary_key=True, index=True)

    timestamp = Column(String)

    station = Column(String)

    feeder = Column(String)

    device = Column(String)

    alarm = Column(String)

    severity = Column(String)

    priority = Column(String)

    category = Column(String)

    assigned_team = Column(String)

    status = Column(String)