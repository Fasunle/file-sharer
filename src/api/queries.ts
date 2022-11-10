import axios from 'axios';
import {useQuery} from 'react-query';
import {apiBaseUrl} from '../config';
import {FileResponseType, IUser} from './interface';

export const fetchAllFiles = async (): Promise<{
  data: {files: FileResponseType[]};
}> => {
  return axios.get(`${apiBaseUrl}/files`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
};

export const fetchUser = async (userId: string): Promise<{data: IUser}> => {
  return axios.get(`${apiBaseUrl}/users/${userId}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
};

export const useFetchAllFiles = () => useQuery('files', fetchAllFiles);
