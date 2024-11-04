import {IncidentType, Provider, BaseComponentType} from "@/api/types";
import {Auth} from "aws-amplify";

const organizationOutage: BaseComponentType[] = [
    {
        name: "organization",
        status: "majorOutage"
    }
]

/**
 * You may use this as inspriation for a custom provider.
 */
export const staticProvider: Provider = {
    getComponents: async () => {
        try {
            const userCreds = await Auth.currentAuthenticatedUser()
            let response = await fetch(
                process.env.NEXT_PUBLIC_API_GATEWAY_HOST,
                {
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + userCreds.signInUserSession?.idToken.jwtToken.toString(),
                    },
                }
            );
            let currentStatuses = []

            if (response.ok) {
                currentStatuses = await response.json();
            } else {
                throw new Error(`"Error HTTP: " + response.status + "\\n" + response.statusText`);
            }

            if (currentStatuses === undefined || currentStatuses.length == 0) {
                throw new Error(`Services status not found`);
            }
            return currentStatuses.statuses;
        } catch (error) {
            console.error("Error fetching data: " + error);
            return organizationOutage
        }


    },
    getIncidents: () => [
        // {
        //     id: "1",
        //     title: "Major service outage",
        //     description: "_This is a major service outage_",
        //     createdAt: "2024-05-13T08:55:04.355Z",
        //     active: true,
        //     scheduled: false,
        // },
    ],
    getHistoricalIncidents: function ():
        | IncidentType[]
        | Promise<IncidentType[]> {
        return [
            // {
            //     id: "2",
            //     title: "Partial payments outage",
            //     description: "This is a partial payments outage",
            //     createdAt: "2024-05-13T08:55:04.355Z",
            //     active: false,
            //     scheduled: false,
            // },
        ];
    },
};
