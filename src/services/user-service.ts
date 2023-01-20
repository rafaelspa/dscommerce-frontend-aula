import { requestBackend } from "../utils/requests";
import { AxiosRequestConfig } from "axios";

export async function findMe() {
  const config: AxiosRequestConfig = {
    url: "/users/me",
    withCredentials: true,
  };

  return await requestBackend(config);
}
