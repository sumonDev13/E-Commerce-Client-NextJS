import axios from "axios";

export const POST = async (
  uri: string,
  payload: any,
) => axios.post(uri, payload, {});

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
