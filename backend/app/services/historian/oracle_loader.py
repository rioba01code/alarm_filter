import pandas as pd
import oracledb


class OracleLoader:

    @staticmethod
    def read(host, port, service, user, password, table):

        dsn = oracledb.makedsn(

            host,

            port,

            service_name=service

        )

        connection = oracledb.connect(

            user=user,

            password=password,

            dsn=dsn

        )

        query = f"SELECT * FROM {table}"

        return pd.read_sql(query, connection)