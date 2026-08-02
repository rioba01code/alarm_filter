import pandas as pd
from sqlalchemy import create_engine


class PostgreSQLLoader:

    @staticmethod
    def read(host, database, user, password, table):

        engine = create_engine(

            f"postgresql://{user}:{password}@{host}/{database}"

        )

        query = f"SELECT * FROM {table}"

        return pd.read_sql(query, engine)