import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from '#assets/styles/theme';

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

const Provider = ({ children }: ProviderProps): React.ReactElement => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SafeAreaProvider>
  );
};

export default Provider;
