import React from 'react';
import {
  ChakraProvider,
  theme,
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return <ChakraProvider theme={theme}></ChakraProvider>;
}

export default App;
