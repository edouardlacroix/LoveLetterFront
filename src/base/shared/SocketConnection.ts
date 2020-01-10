import socketIOClient from 'socket.io-client';
const socket = socketIOClient(
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://loveletterback.herokuapp.com/'
);
export default socket;
