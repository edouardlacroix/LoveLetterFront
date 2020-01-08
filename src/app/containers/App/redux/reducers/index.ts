import { AppModel } from '../models';
import ActionTypes from '../actionTypes';
import { createReducer } from 'base/shared/CreateReducer';
import SocketConnection from 'shared/SocketConnection';
// import { toastify, toastType } from 'services/ToastingService';

const setNewGameData = (state, action) => {
  const data = action.payload;
  return state.set('gameData', data);
};

const setLocalPlayerData = (state, action) => {
  const data = action.payload;
  return state.set('localPlayerData', data);
};

const actionHandlers = {
  [ActionTypes.SET_NEW_GAME_DATA]: setNewGameData,
  [ActionTypes.SET_LOCAL_PLAYER_DATA]: setLocalPlayerData
};

export default createReducer(actionHandlers, new AppModel());
