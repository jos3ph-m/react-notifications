import React from 'react';
import {
  ChakraProvider,
  theme,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Container,
  Box,
} from '@chakra-ui/react';

function notifyUser(
  notificationText = 'Thank you for enabling notifications!'
) {
  if (!('Notification' in window)) {
    alert('Browser does not support notification');
  } else if (Notification.permission === 'granted') {
  }
}

function App() {
  return <ChakraProvider theme={theme}></ChakraProvider>;
}

export default App;
