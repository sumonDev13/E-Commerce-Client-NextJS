import axios from "axios";
import { getToken } from "..";

const createHeaders = (token?: string | null | boolean) => {
  const accessToken = getToken();

  return {
    accepts: "application/json",
    Authorization: token === true ? `Bearer ${accessToken}` : undefined,
  };
};

export const POST = async (
  uri: string,
  payload: any,
  token: string | null | boolean = true
) => axios.post(uri, payload, {
  headers: createHeaders(token),
});

export const GET = async (uri: string) => {
  const response = await axios.get(uri, {});

  return response;
};

export const PUT = async (uri: string, payload: any) => {
  return axios.put(uri, payload, {});
};

export const PATCH = async (uri: string, payload?: any) => {
  return axios.patch(uri, payload, {});
};

export const DELETE = async (uri: string) => axios.delete(uri, {});
