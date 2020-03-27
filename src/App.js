import React from 'react';
import { ThemeProvider } from "emotion-theming"
import { Flex } from "rebass"

import { theme } from './Theme/theme'
import { TableHandler } from "../src/Container/TableHandler"

import './App.css';

function App() {
  return (
    <Flex>
       <ThemeProvider theme={theme}>
          <TableHandler />
       </ThemeProvider>
    </Flex>
  );
}

export default App;
