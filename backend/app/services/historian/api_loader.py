import pandas as pd
import requests


class APILoader:

    DEFAULT_TIMEOUT = 30

    @staticmethod
    def read(

        url,

        headers=None,

        params=None,

        timeout=DEFAULT_TIMEOUT

    ):

        try:

            response = requests.get(

                url,

                headers=headers,

                params=params,

                timeout=timeout

            )

            response.raise_for_status()

        except requests.exceptions.Timeout:

            raise Exception(

                "API request timed out."

            )

        except requests.exceptions.ConnectionError:

            raise Exception(

                "Unable to connect to the API."

            )

        except requests.exceptions.HTTPError as e:

            raise Exception(

                f"HTTP Error: {e}"

            )

        except requests.exceptions.RequestException as e:

            raise Exception(

                f"API Error: {e}"

            )

        try:

            data = response.json()

        except Exception:

            raise Exception(

                "API response is not valid JSON."

            )

        if isinstance(data, dict):

            # Common API pattern:
            # { "data": [...] }

            if "data" in data:

                data = data["data"]

            else:

                data = [data]

        return pd.DataFrame(data)