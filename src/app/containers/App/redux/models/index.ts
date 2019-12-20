import { Record } from 'immutable';

const AppModel = Record({
  login: '',
  token: null,
  loginLabel: '',
  accountType: '',
  manufacturers: null
});

function setInitialState(initialState) {
  return (initialState.AppReducer = new AppModel(initialState.AppReducer));
}

export { AppModel, setInitialState };
