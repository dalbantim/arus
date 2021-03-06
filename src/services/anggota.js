import { axiosInstance } from "../config";

export const getListAnggota = async id => {
  const response = axiosInstance.get(`users/${id}/family`);

  return response;
};
export const getDetailAnggota = async (id, user_id) => {
  const response = axiosInstance.get(`users/${user_id}/family/${id}`);
  return response;
};
export const updateAnggota = async (id, data) => {
  const response = axiosInstance.put(`users/${id}/family/${id}`, data);
  return response;
};
export const deleteAnggota = async (user_id, id) => {
  const response = axiosInstance.delete(`users/${user_id}/family/${id}`);
  return response;
};
export const createAnggota = async (id, data) => {
  const response = axiosInstance.post(`users/${id}/family`, data);
  return response;
};
