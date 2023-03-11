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
) {}

function App() {
  return <ChakraProvider theme={theme}></ChakraProvider>;
}

export default App;
