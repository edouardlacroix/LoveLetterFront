import { Record } from 'immutable';

const AppModel = Record({
  gameData: null
});

function setInitialState(initialState) {
  return (initialState.AppReducer = new AppModel(initialState.AppReducer));
}

export { AppModel, setInitialState };
