import ActionTypes from '../actionTypes';

export const setNewGameData = data => ({
  type: ActionTypes.SET_NEW_GAME_DATA,
  payload: data
});

export const setLocalPlayerData = data => ({
  type: ActionTypes.SET_LOCAL_PLAYER_DATA,
  payload: data
});
