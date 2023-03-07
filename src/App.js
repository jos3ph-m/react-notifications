import React from 'react';
import { ChakraProvider, theme, Alert, AlertIcon } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return <ChakraProvider theme={theme}></ChakraProvider>;
}

export default App;
