export const AXIOS_HEADERS = {
    headers: {
      "app-token": import.meta.env.VITE_APP_KEY
    }
  };
export const SUPERSET_CONSTANTS = {
  baseUrl: import.meta.env.VITE_APP_SUPERSET_URL,
  user: import.meta.env.VITE_APP_SUPERSET_USER,
  credentials: import.meta.env.VITE_SUPERSET_CREDENTIALS,
  dashboardId: import.meta.env.VITE_SUPERSET_DASHBOARD_ID
}  