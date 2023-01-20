import { requestBackend } from "../utils/requests";
import * as authService from "../services/auth-service";

export async function findMe() {
  const headers = {
    Authorization: "Bearer " + authService.getAccessToken(),
  };

  return await requestBackend({ url: "/users/me", headers });
}
