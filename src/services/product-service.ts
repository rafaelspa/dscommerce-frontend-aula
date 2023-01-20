import axios, { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function findPageRequest(
  page: number,
  name: string,
  size = 12,
  sort = "name"
) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/products",
    params: {
      page,
      name,
      size,
      sort,
    },
  };
  return requestBackend(config);
}

export async function findById(id: number) {
  return await requestBackend({url: `/products/${id}`});
}

export async function deleteById(id: number) {
 
  const config: AxiosRequestConfig = {
    method: "DELETE",
    url: `/products/${id}`,
    withCredentials: true
  }

  return requestBackend(config);
}