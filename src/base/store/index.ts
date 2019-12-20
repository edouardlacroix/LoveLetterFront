import ConfigureStore from './ConfigureStore';
import InitialState from './InitialState';

const store = ConfigureStore(history, InitialState);
export default store;
