import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import {ROUTES} from '../constants';
import {UserProfileScreen} from '../screens';
import BottomNavigation from './BottomNavigation';

const Stack = createStackNavigator();

const StackNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.BottomTabNavigation}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={ROUTES.BottomTabNavigation}
          component={BottomNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
