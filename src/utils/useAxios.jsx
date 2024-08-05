import axios from "axios";
import { jwtDecode as jwt_decode } from "jwt-decode";
import dayjs from "dayjs";

export const BASEURL = "https://scbqnlsv-8000.uks1.devtunnels.ms/";
// export const BASEURL = "";

const logoutAction = () => {
  localStorage.removeItem("e-timetable-admin");
  localStorage.removeItem("active-admin");
  window.location.pathname = "/login";
};

const getToken = () =>
  localStorage.getItem("e-timetable-admin")
    ? JSON.parse(localStorage.getItem("e-timetable-admin"))
    : null;

// const token = getToken()
const axiosInstance = axios.create({
  baseURL: BASEURL,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const axiosFormInstance = axios.create({
  baseURL: BASEURL,

  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = getToken();

  if (!token?.access) return config;

  const user = jwt_decode(token?.access);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  if (!isExpired) {
    config.headers.Authorization = `Bearer ${token?.access}`;
    return config;
  }

  const response = await axios.post(`${BASEURL}/api/v1/token/refresh/`, {
    refresh: token?.refresh,
  });
  const newToken = response.data;
  localStorage.setItem(
    "e-timetable-admin",
    JSON.stringify({ refresh: token?.refresh, access: newToken?.access })
  );

  config.headers.Authorization = `Bearer ${newToken?.access}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message.includes("Invalid token specified")) {
      logoutAction();
      return Promise.reject(error);
    }

    if (error?.response?.status === 401) {
      logoutAction();
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

axiosFormInstance.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (!token?.access) return config;

    config.headers.Authorization = `Bearer ${token?.access}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
