import { axios } from '@/lib/axios';

// import { LoaderData } from '../types';

const executeDownTime = (params: any): Promise<any> => axios.get('/get-main-down-time', { params });

const loadDownTime = executeDownTime;

export { loadDownTime };
