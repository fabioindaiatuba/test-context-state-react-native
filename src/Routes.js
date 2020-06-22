import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default Routes;