import React from 'react';

import Home from '../pages/Home';
import Details from '../pages/Details';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const routes = {
  Home: {
    title: 'Tela inicial',
    component: Home,
  },
  Details: {
    title: 'Detalhes',
    component: Details,
  },
};

const Router = () => {
  const {Home, Details} = routes;

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name={Home.title}
        component={Home.component}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={Details.title} component={Details.component} />
    </Stack.Navigator>
  );
};

export default Router;
