import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import MoviesDetails from '../screens/MoviesDetails';

const Stack = createNativeStackNavigator();

const MainRoute = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                            headerShown: false,
                            }} >
                <Stack.Screen name="Home" component={BottomTabNavigation} />
                <Stack.Screen name="Details" component={MoviesDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoute;