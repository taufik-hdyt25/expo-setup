import { configEnv } from "@/services/config";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: configEnv.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
