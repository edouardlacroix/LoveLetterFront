import { AppModel } from '../models';
import ActionTypes from '../actionTypes';
import { createReducer } from 'base/shared/CreateReducer';
// import { toastify, toastType } from 'services/ToastingService';

const setNewGameData = (state, action) => {
  const data = action.payload;
  return state.set('gameData', data);
}

const actionHandlers = {
  [ActionTypes.SET_NEW_GAME_DATA]: setNewGameData
};

export default createReducer(actionHandlers, new AppModel());
