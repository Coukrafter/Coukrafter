import axios from "axios";

const baseURL = "https://63c19dae99c0a15d28ee7c1d.mockapi.io/todo";

export const api = axios.create({
  baseURL,
  timeout: 1000,
});
