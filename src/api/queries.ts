import axios from 'axios';
import {useQuery} from 'react-query';
import {apiBaseUrl} from '../config';
import {FileResponseType, IUser} from './interface';

const fetchAllFiles = async (): Promise<FileResponseType[]> => {
  return axios.get(`${apiBaseUrl}/files`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const fetchUser = async (userId: string): Promise<{data: IUser}> => {
  return axios.get(`${apiBaseUrl}/users/${userId}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const useFetchAllFiles = () => useQuery('files', fetchAllFiles);
