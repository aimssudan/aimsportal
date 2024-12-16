<template>
    <div id="dashboard-container" ref="dashboardContainer">
        
    </div>
  </template>
  
  <script>
  import { embedDashboard } from '@superset-ui/embedded-sdk';
  import { SUPERSET_CONSTANTS } from '../globals/constants';
  export default {
    name: 'SupersetDashboard',
    data() {
      return {
        dashboardContainer: null,
      };
    },
    mounted() {
      this.embedSupersetDashboard();
      console.log('superset mounted')
    },
    methods: {
      async fetchAccessToken() {
        try {
            const body = {
            username: SUPERSET_CONSTANTS.user,
            password: SUPERSET_CONSTANTS.credentials,
            provider: "db",
            refresh: true,
            }

            const response = await fetch(
            `${SUPERSET_CONSTANTS.baseUrl}/api/v1/security/login`,
            {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                "Content-Type": "application/json",
                },
            }
            )

            const jsonResponse = await response.json()
            return jsonResponse?.access_token
        } catch (e) {
            console.error(error)
        }
      },
       async fetchGuestToken() {
      //  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoicHVibGljIiwiZmlyc3RfbmFtZSI6Ikd1ZXN0IiwibGFzdF9uYW1lIjoiVXNlciJ9LCJyZXNvdXJjZXMiOlt7InR5cGUiOiJkYXNoYm9hcmQiLCJpZCI6IjJhODJmNmY2LTg3ZWQtNDczNS04MTcwLTM2Nzg5NjYzOWMyNSJ9XSwicmxzX3J1bGVzIjpbXSwiaWF0IjoxNzM0MzYwNzY0LjU2NzcyNywiZXhwIjoxNzM0MzYxMDY0LjU2NzcyNywiYXVkIjoiaHR0cDovLzAuMC4wLjA6ODA4MC8iLCJ0eXBlIjoiZ3Vlc3QifQ.K17lj9DoJpUH0LraX1S2ZHtvfnm6sz091m21DRnzT3s"
        const accessToken = await this.fetchAccessToken()
        try {
            const body = {
            resources: [
                {
                type: "dashboard",
                id: `${SUPERSET_CONSTANTS.dashboardId}`,
                },
            ],
            rls: [],
            user: {
                username: "public",
                first_name: "Guest",
                last_name: "User",
            },
            }
            const response = await fetch(
            `${SUPERSET_CONSTANTS.baseUrl}/api/v1/security/guest_token`,
            {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
                },
            }
            )
            const jsonResponse = await response.json()
            return jsonResponse?.token
        } catch (error) {
          console.error('Error fetching guest token:', error);
          throw error;
        }
      },
      async embedSupersetDashboard() {
        try {
          const iframe = await embedDashboard({
            id: `${SUPERSET_CONSTANTS.dashboardId}`, // Replace with your dashboard ID
            supersetDomain: `${SUPERSET_CONSTANTS.baseUrl}`, // Your Superset instance URL
            mountPoint: this.$refs.dashboardContainer, // DOM element
            fetchGuestToken: this.fetchGuestToken,
            dashboardUiConfig: {
                hideTitle: true,
                hideChartControls: true,
            },
            
          });
          // Wait for the iframe to be added, then adjust its size
        setTimeout(() => {
          const iframeElement = this.$refs.dashboardContainer.querySelector(
            "iframe"
          );
          if (iframeElement) {
            iframeElement.style.width = "100%";
            iframeElement.style.height = "100vh";
          }
        }, 100);
        } catch (error) {
          console.error('Error embedding the dashboard:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  #dashboard-container {
  width: 100%; /* Full width of the parent element */
   /* Full height of the viewport */
  
}
  </style>
  