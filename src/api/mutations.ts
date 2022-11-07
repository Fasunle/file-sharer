import axios from 'axios';
import {useMutation} from 'react-query';
import {apiBaseUrl} from '../config';

const uploadFiles = async (data: any) => {
  return axios.post(`${apiBaseUrl}/files/upload`, data, {
    headers: {'Content-Type': 'multipart/form-data'},
  });
};

export const useUploadFiles = () => useMutation(uploadFiles);
