import {types} from '../types/types';

const initialState = {
  loading: false,
  success: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.startLoading:
      return {
        ...state,
        loading: true,
      };
    case types.finishLoading:
      return {
        ...state,
        loading: false,
      };
    case types.success:
      return {
        ...state,
        success: true,
      };
    case types.error:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};
