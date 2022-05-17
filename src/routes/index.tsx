import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const MainStack = createStackNavigator();

export default function Routes() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
}
