import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import User from '../screens/User';

const MainStack = createStackNavigator();

export default function Routes() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="User" component={User} />
    </MainStack.Navigator>
  );
}
