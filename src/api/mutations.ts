import axios from 'axios';
import {useMutation} from 'react-query';
import {apiBaseUrl} from '../config';

const uploadFiles = async (data: any) => {
  return axios.post(`${apiBaseUrl}/files/upload`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const createUser = async (data: {
  userId: string;
  username: string;
  email: string;
}) => {
  return axios.post(`${apiBaseUrl}/users`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const useUploadFiles = () => useMutation(uploadFiles);
