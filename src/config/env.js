export const URL_API = "http://localhost:8080";

export const axiosCong = () => ({
  baseURL: URL_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
