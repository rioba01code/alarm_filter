class RecommendationEngine:

    @staticmethod
    def generate(df, incidents, flood_report):

        recommendations = []

        # ============================================
        # Critical alarms
        # ============================================

        critical = len(df[df["Priority"] == "Critical"])

        if critical > 0:

            recommendations.append({

                "severity": "Critical",

                "title": "Immediate Operator Action",

                "recommendation":
                    f"{critical} critical alarms require immediate investigation."

            })

        # ============================================
        # Alarm Floods
        # ============================================

        if len(flood_report) > 0:

            recommendations.append({

                "severity": "Major",

                "title": "Alarm Flood Detected",

                "recommendation":
                    "Alarm flooding detected. Apply suppression and investigate root cause."

            })

        # ============================================
        # Communication failures
        # ============================================

        communication = df["Alarm"].str.contains(

            "communication",

            case=False,

            na=False

        ).sum()

        if communication > 0:

            recommendations.append({

                "severity": "Major",

                "title": "Communication Health",

                "recommendation":
                    f"{communication} communication alarms detected. Check RTUs, switches and fibre links."

            })

        # ============================================
        # Battery / DC
        # ============================================

        battery = df["Alarm"].str.contains(

            "battery|dc",

            case=False,

            na=False

        ).sum()

        if battery > 0:

            recommendations.append({

                "severity": "Major",

                "title": "Battery System",

                "recommendation":
                    "Inspect battery chargers and DC auxiliary supply."

            })

        # ============================================
        # Protection
        # ============================================

        protection = df["Alarm"].str.contains(

            "trip|protection|breaker",

            case=False,

            na=False

        ).sum()

        if protection > 0:

            recommendations.append({

                "severity": "Critical",

                "title": "Protection Operation",

                "recommendation":
                    "Verify protection relay operation before restoring equipment."

            })

        # ============================================
        # No recommendations
        # ============================================

        if len(recommendations) == 0:

            recommendations.append({

                "severity": "Normal",

                "title": "System Healthy",

                "recommendation":
                    "No significant operational recommendations."

            })

        return recommendations