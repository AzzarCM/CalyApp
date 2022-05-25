import {userLogin} from '../../api/auth';
import {showToast} from '../../utils/utils';
import {types} from '../types/types';
import {error, finishLoading, startLoading, success} from './ui';
import jwt_decode from 'jwt-decode';
import {updateStudent} from '../../api/student';
import { fileUpload } from '../../utils/file-upload';

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

export const updateStudentProfile = (id, token, dataBody, newUrl) => {
  return async (dispatch, getState) => {
    const {loading} = getState().ui;
    if (!loading) {
      dispatch(error());
      dispatch(startLoading());
      let fileUrl = null;
      if(newUrl) {
        fileUrl = await fileUpload(newUrl);
      }
      const response = await updateStudent(id, token, {
        ...dataBody,
        photo: fileUrl || dataBody.photo,
      });
      if (response.ok) {
        dispatch(
          updateUser({
            ...dataBody,
            name: dataBody.full_name,
            photo: fileUrl || dataBody.photo,
          }),
        );
        dispatch(success());
        showToast(
          'success',
          'Perfil actualizado',
          'Perfil actualizado exitosamente',
        );
      } else {
        showToast('error', '¡Oh no!', 'Credenciales incorrectas');
      }
      dispatch(finishLoading());
      dispatch(error());
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
