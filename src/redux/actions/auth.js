import { userLogin } from '../../api/auth';
import {types} from '../types/types';
import {finishLoading, startLoading} from './ui';

export const startLoginEmailPassword = (email, password) => {
  return async dispatch => {
    dispatch(startLoading());
    try {
      const response = await userLogin(email, password)
      console.log(response)
      dispatch(finishLoading());
    } catch (error) {
      console.log(error);
      dispatch(finishLoading());
    }
  };
};

export const login = (uid, name, role) => ({
  type: types.login,
  payload: {
    uid,
    role,
    name,
  },
});

export const logout = () => ({
  type: types.logout,
});
