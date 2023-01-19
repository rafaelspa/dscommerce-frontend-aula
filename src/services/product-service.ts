import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../utils/system";

export async function findAll() {
  return await axios.get(`${BASE_URL}/products?size=12`);
}

export async function findById(id: number) {
  return await axios.get(`${BASE_URL}/products/${id}`);
}
