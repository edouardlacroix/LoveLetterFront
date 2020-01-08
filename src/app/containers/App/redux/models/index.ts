import { Record } from 'immutable';

const AppModel = Record({
  gameData: null,
  localPlayerData: null
});

function setInitialState(initialState) {
  return (initialState.AppReducer = new AppModel(initialState.AppReducer));
}

export { AppModel, setInitialState };
