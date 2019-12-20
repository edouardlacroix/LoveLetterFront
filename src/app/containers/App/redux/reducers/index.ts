import { AppModel } from '../models';
import ActionTypes from '../actionTypes';
import { createReducer } from 'base/shared/CreateReducer';
// import { toastify, toastType } from 'services/ToastingService';

const manufacturersRequest = state => state;

const manufacturersSuccess = (state, action) => {
  const data = action.payload;
  return state.set('manufacturers', data);
};

const actionHandlers = {
  [ActionTypes.GET_MANUFACTURERS_SUCCESS]: manufacturersSuccess
};

export default createReducer(actionHandlers, new AppModel());
