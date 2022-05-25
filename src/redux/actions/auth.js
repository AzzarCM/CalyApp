import {userLogin} from '../../api/auth';
import {showToast} from '../../utils/utils';
import {types} from '../types/types';
import {finishLoading, startLoading} from './ui';
import jwt_decode from 'jwt-decode';

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch, getState) => {
    const {loading} = getState().ui;
    if (!loading) {
      dispatch(startLoading());
      const response = await userLogin(email, password);
      if (response.ok) {
        const {token} = response;
        const {id, name, role, photo, active} = jwt_decode(token);
        dispatch(login(id, name, role, photo, token, active));
        showToast('success', '¡Bienvenido!', 'Iniciaste sesión correctamente');
      } else {
        showToast('error', '¡Oh no!', 'Credenciales incorrectas');
      }
      dispatch(finishLoading());
    }
  };
};

export const updateUser = newData => ({
  type: types.updateUser,
  payload: newData,
});

export const login = (uid, name, role, photo, token, active) => ({
  type: types.login,
  payload: {
    uid,
    role,
    name,
    photo,
    token,
    active,
  },
});

export const logout = () => ({
  type: types.logout,
});
