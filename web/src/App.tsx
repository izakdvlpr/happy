import React from 'react';
import { ThemeProvider } from 'styled-components';

import colors from './styles/colors';
import GlobalStyles from './styles/global';

export default function App() {
  return (
    <ThemeProvider theme={colors}>      
      <GlobalStyles />
      
      <h1>Hello World!</h1>
    </ThemeProvider>
  );
};