import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Constants } from "./constants"


export const baseQuery = ({ auth }: { auth: string }) => fetchBaseQuery({
  baseUrl: Constants.MAIN_URL_API_ENDPOINT,
  prepareHeaders: (headers) => {
    if (auth === Constants.AUTH_TYPE.bearer) {
      const { token } = accessToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
    }
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    return headers;
  },
});


export const accessToken = (): { token: string | null } => {
  const localAccessToken: string | null = localStorage.getItem(Constants.ACCESS_TOKEN);
  return {token: localAccessToken ? localAccessToken : null}
}
