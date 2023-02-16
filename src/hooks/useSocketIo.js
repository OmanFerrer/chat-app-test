import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000', {
  autoConnect: false
});

const useSocketIo = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const connect = () => {
    socket.connect();
  };

  return { isConnected, lastPong, connect };
}

export default useSocketIo;