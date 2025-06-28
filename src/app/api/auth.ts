// services/authService.ts

import { apiClient } from "./apiClient";


interface LoginPayload {
  email: string;
  password: string;
}

export const login = async (payload: LoginPayload) => {
  const response = await apiClient.post('/auth', payload);
  return response.data;
};
