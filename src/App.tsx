import React from 'react';
import { StatusBar } from 'react-native';
import Provider from '#components/templates/Provider';
import MainNavigator from './MainNavigator';

const App = (): React.ReactElement => {
  React.useEffect(() => StatusBar.setBarStyle('light-content', true), []);
  return (
    <Provider>
      <MainNavigator />
    </Provider>
  );
};

export default App;
