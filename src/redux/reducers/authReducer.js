import {types} from '../types/types';

const initialState = {
  uid: null,
  role: null,
  name: null,
  photo: null,
  token: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        uid: action.payload.uid,
        role: action.payload.role,
        name: action.payload.name,
        photo: action.payload.photo,
        token: action.payload.token,
      };
    case types.updateUser:
      return {
        ...state,
        ...action.payload
      }
    case types.logout:
      return initialState;
    default:
      return state;
  }
};
