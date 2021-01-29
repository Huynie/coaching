import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../components/Profile';
import Calendar from '../components/Calendar';

const Stack = createStackNavigator();

export const Routes = ({}) => {
  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Profile'
          screenOptions={{
            headerTitleAlign: 'center',
          }}
          >
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerTitle: 'Meet Your Coach',
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="Calendar"
              component={Calendar}
              options={{
                headerTitle: 'Calendar',
                headerTitleAlign: 'center',
              }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}