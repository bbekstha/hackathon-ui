
import React from 'react';
import SignIn from './signin/SignIn';
import { ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={darkTheme}>
    <SignIn />
  </ThemeProvider>
);

export default App;