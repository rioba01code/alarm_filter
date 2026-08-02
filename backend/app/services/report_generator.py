import pandas as pd


class ReportGenerator:

    @staticmethod
    def generate(
        df,
        duplicates_removed,
        correlations,
        flood_report,
        incidents,
        nuisance,
        processing_time
    ):

        # ============================================
        # SUMMARY
        # ============================================

        summary = {

            "totalAlarms": len(df),

            "duplicatesRemoved": duplicates_removed,

            "critical": len(
                df[df["Priority"] == "Critical"]
            ),

            "major": len(
                df[df["Priority"] == "Major"]
            ),

            "minor": len(
                df[df["Priority"] == "Minor"]
            ),

            "warning": len(
                df[df["Priority"] == "Warning"]
            ),

            "suppressed": int(
                df["Suppressed"].sum()
            ) if "Suppressed" in df.columns else 0,

            "incidents": len(incidents),

            "alarmFloods": len(flood_report),

            "nuisanceAlarms": len(nuisance),

            "correlatedGroups": len(correlations),

            "processingTime": processing_time

        }

        # ============================================
        # PRIORITY CHART
        # ============================================

        priority_distribution = [

            {

                "name": priority,

                "value": int(count)

            }

            for priority, count in
            df["Priority"].value_counts().items()

        ]

        # ============================================
        # CATEGORY CHART
        # ============================================

        category_distribution = [

            {

                "name": category,

                "value": int(count)

            }

            for category, count in
            df["Category"].value_counts().items()

        ]

        # ============================================
        # ASSIGNED TEAMS
        # ============================================

        assigned_teams = [

            {

                "team": team,

                "alarms": int(count)

            }

            for team, count in
            df["Assigned Team"].value_counts().items()

        ]

        # ============================================
        # TREND DATA
        # ============================================

        trend_data = []

        if "Timestamp" in df.columns:

            temp = df.copy()

            temp["Timestamp"] = pd.to_datetime(
                temp["Timestamp"]
            )

            grouped = (

                temp

                .groupby(

                    temp["Timestamp"].dt.floor("h")

                )

                .size()

            )

            for timestamp, count in grouped.items():

                trend_data.append({

                    "time": str(timestamp),

                    "alarms": int(count)

                })

        # ============================================
        # ALARM TABLE
        # ============================================

        alarm_table = df.to_dict(
            orient="records"
        )

        # ============================================
        # AI RECOMMENDATIONS
        # ============================================

        recommendations = []

        if len(flood_report) > 0:

            recommendations.append({

                "severity": "High",

                "message":

                "Alarm floods detected. Investigate common root causes."

            })

        if len(nuisance) > 0:

            recommendations.append({

                "severity": "Medium",

                "message":

                "Repeated nuisance alarms detected. Consider suppression tuning."

            })

        if len(correlations) > 0:

            recommendations.append({

                "severity": "Medium",

                "message":

                "Correlated alarms indicate possible common equipment failures."

            })

        if len(incidents) == 0:

            recommendations.append({

                "severity": "Low",

                "message":

                "No critical incidents detected."

            })

        # ============================================
        # FINAL DASHBOARD OBJECT
        # ============================================

        return {

            "summary": summary,

            "priorityDistribution": priority_distribution,

            "categoryDistribution": category_distribution,

            "assignedTeams": assigned_teams,

            "trendData": trend_data,

            "alarmTable": alarm_table,

            "incidents": incidents,

            "alarmFloods": flood_report,

            "nuisanceAlarms": nuisance,

            "correlations": correlations,

            "recommendations": recommendations

        }