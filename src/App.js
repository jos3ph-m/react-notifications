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
} from '@chakra-ui/react';

function notifyUser() {}

function App() {
  return <ChakraProvider theme={theme}></ChakraProvider>;
}

export default App;
