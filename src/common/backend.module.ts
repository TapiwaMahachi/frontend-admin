import axios from 'axios';
import { env } from './env.module';

export const BackendModule = {
  post,
  put,
  get,
  delete: Delete,

  accessTokenkey: 'accessToken',
};

async function post(path: string, params?: any) {
  return axios.post(prepareUrl() + path, params);
}
async function put(path: string, params?: any) {
  return axios.put(prepareUrl() + path, params);
}
async function get(path: string, params?: any) {
  return axios.get(prepareUrl() + path, { params })
    .then((response) => response.data);
}
//  delete is keyword in js, hence the use of Capital letter
async function Delete(path: string, params ?: any) {
  return axios.delete(prepareUrl() + path, params);
}

function prepareUrl(): string {
  // check if the url is valid
  if (!env.BACKEND_HOST) throw new Error('Invalid URL');

  return env.BACKEND_HOST.endsWith('/') ? env.BACKEND_HOST : `${env.BACKEND_HOST}/`;
}
