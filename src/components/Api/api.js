import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "418a3dee-f1ef-4c0b-b822-d1a85cff188e" },
});

//profile
export const getUserProfile = (userId) => {
  return instance.get(`profile/` + userId).then((response) => response.data);
};
export const getUserStatus = (userId) => {
  return instance
    .get(`profile/status/` + userId)
    .then((response) => response.data);
};
export const updateUserStatus = (status) => {
  return instance
    .put(`profile/status/`, { status: status })
    .then((response) => response.data);
};

//login
export const authMeAPI = () => {
  return instance.get(`auth/me`).then((response) => response.data);
};
export const authMeLogin = (email, password, rememberMe = false) => {
  return instance.post("auth/login", { email, password, rememberMe }).then((response) => response.data);
};
export const authMeLogout = () => {
  return instance.delete("auth/login").then((response) => response.data);
};

//users
export const getUsersAPI = (currentPage, pageSize) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);
};
export const followAPI = (userId) => {
  return instance.delete(`follow/${userId}`).then((response) => response.data);
};

export const unFollowAPI = (userId) => {
  return instance.post(`follow/${userId}`).then((response) => response.data);
};
