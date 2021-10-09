import axios from './index';
import { URL_ENUM } from './proxy';
export const register = userInfo => {
  return axios.request({
    url: URL_ENUM.USER + '/signin',
    data: userInfo,
    method: 'post'
  });
};
export const login = userInfo => {
  return axios.request({
    url: URL_ENUM.USER + '/login',
    data: userInfo,
    method: 'post'
  });
};

export const getUserInfo = ()=>{
  return axios.request({
    url: URL_ENUM.USER +'/userInfo',
    method: 'get'
  }) 
}
