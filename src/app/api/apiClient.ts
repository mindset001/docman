// utils/apiClient.ts
import axios from 'axios';

export const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

export const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
