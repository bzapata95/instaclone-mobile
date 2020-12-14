import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './pages/Feed';

import logo from './assets/instagram.png';

const Stack = createStackNavigator();


const Routes = () => {
    return (
        <Stack.Navigator 
            headerMode="screen"
            screenOptions={{
                headerTitle: <Image source={logo} />,
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#f5f5f5' },
            }}
        >
            <Stack.Screen name="Home" component={Feed} />
        </Stack.Navigator>
    )
}

export default Routes;