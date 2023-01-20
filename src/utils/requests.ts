import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";

export async function requestBackend(config: AxiosRequestConfig) {
  return await axios({ ...config, baseURL: BASE_URL });
}
