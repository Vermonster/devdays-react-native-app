import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { PatientContextProvider } from './PatientContext.js';

const AppProviders = ({ children }) => (
  <ThemeProvider>
    <PatientContextProvider>
      {children}
    </PatientContextProvider>
  </ThemeProvider>
);

export default AppProviders;