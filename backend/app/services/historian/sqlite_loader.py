import pandas as pd
from sqlalchemy import create_engine


class SQLiteLoader:

    @staticmethod
    def read(database):

        engine = create_engine(

            f"sqlite:///{database}"

        )

        return pd.read_sql(

            "SELECT * FROM alarms",

            engine

        )