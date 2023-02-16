import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000', {
  autoConnect: false
});

const useSocketIo = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  const connect = () => {
    socket.connect();
  };

  return { isConnected, connect, socket };
}

export default useSocketIo;