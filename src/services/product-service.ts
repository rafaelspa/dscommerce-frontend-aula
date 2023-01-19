import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL } from "../utils/system";

export async function findPageRequest(
  page: number,
  name: string,
  size = 12,
  sort = "name"
) {
  const config: AxiosRequestConfig = {
    method: "GET",
    baseURL: BASE_URL,
    url: "/products",
    params: {
      page,
      name,
      size,
      sort,
    },
  };
  return await axios(config);
}

export async function findById(id: number) {
  return await axios.get(`${BASE_URL}/products/${id}`);
}
