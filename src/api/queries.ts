import axios from 'axios';
import {useQuery} from 'react-query';
import {apiBaseUrl} from '../config';
import {FileResponseType} from './interface';

const fetchAllFiles = async (): Promise<FileResponseType[]> => {
  return axios.get(`${apiBaseUrl}/files`, {});
};

export const useFetchAllFiles = () => useQuery('files', fetchAllFiles);
