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
    const notification = new Notification(notificationText);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        const notification = new Notification(notificationText);
      }
    });
  }
}

function App() {
  const [userResponded, setUserResponded] = useState(false);

  return <ChakraProvider theme={theme}></ChakraProvider>;
}

export default App;
