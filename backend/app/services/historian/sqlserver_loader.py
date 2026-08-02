import pandas as pd
from sqlalchemy import create_engine


class SQLServerLoader:

    @staticmethod
    def read(server, database, table):

        connection = (
            f"mssql+pyodbc://@{server}/{database}"
            "?driver=ODBC+Driver+17+for+SQL+Server"
            "&trusted_connection=yes"
        )

        engine = create_engine(connection)

        query = f"SELECT * FROM {table}"

        return pd.read_sql(query, engine)