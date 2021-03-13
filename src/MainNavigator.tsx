import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Landing from '#pages/landing';

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const MainNavigator = (): React.ReactElement => {
  const Stack = React.useMemo(() => createStackNavigator(), []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name='Landing' component={Landing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
