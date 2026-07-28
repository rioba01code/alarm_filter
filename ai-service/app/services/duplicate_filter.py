class DuplicateFilter:

    @staticmethod
    def remove(df):

        before = len(df)

        df = df.drop_duplicates()

        duplicates_removed = before - len(df)

        return df, duplicates_removed