import { axios } from '@/lib/axios';

const executeDashBoard = (params: any): Promise<any> => axios.get('', { params });

const loadDashBoard = executeDashBoard;

export { loadDashBoard };
