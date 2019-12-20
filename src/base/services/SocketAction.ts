import SocketConnection from 'shared/SocketConnection';

const changeName = name => {
  SocketConnection.emit('SET_PLAYER_NAME', name);
};

export default { changeName };
