import api from "./apiConfig";
import jwtDecode from "jwt-decode";

export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/sign-up", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post("/sign-in", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (passwords, user) => {
  try {
    const resp = await api.post("/");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const res = await api.get("/verify");
    return res.data;
  }
  return false;
};

export const getUserMenuItem = async (userId, menuItemId) => {
  try {
    const response = await api.get(`/users/${userId}/menu/${menuItemId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserCart = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/cart/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addUserCartItem = async (userId, menuItemId) => {
  try {
    const response = await api.post(`/users/${userId}/cart/${menuItemId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUserCartItem = async (userId, menuItemId) => {
  try {
    const response = await api.delete(`/users/${userId}/cart/${menuItemId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
