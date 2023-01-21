import axios, { AxiosRequestConfig } from "axios";
import { ProductDTO } from "../models/product";
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

export function updateRequest(obj: ProductDTO) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: `/products/${obj.id}`,
    withCredentials: true,
    data: obj
  }

  return requestBackend(config);
}

export function insertRequest(obj: ProductDTO) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/products",
    withCredentials: true,
    data: obj
  }

  return requestBackend(config);
}