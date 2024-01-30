import { axios } from '@/lib/axios';

const executeBroken = (params: any): Promise<any> => axios.get('/get-broken', { params });

const loadBroken = executeBroken;

const executeWiseLostTime = (params: any): Promise<any> =>
  axios.get('/get-wise-lost-time', { params });

const loadWiseLostTime = executeWiseLostTime;

const executeIssue = (params: any): Promise<any> => axios.get('/get-issue-keycode', { params });

const loadIssue = executeIssue;

const executeIssueWeek = (params: any): Promise<any> =>
  axios.get('/get-issue-mechanic', { params });

const loadIssueWeek = executeIssueWeek;

export { loadBroken, loadWiseLostTime, loadIssue, loadIssueWeek };
