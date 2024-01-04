import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import CustomTabDesign from './CustomTabDesign';
import { NOW_PLAYING, POPULAR_ICON, TOP_RATED, UPCOMING } from '../configs/images';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();


const MainRoute = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                            headerShown: false,
                            }} 
                           tabBar={(props) =><CustomTabDesign {...props} />}>
                <Tab.Screen 
                    options={{ tabBarLabel: 'Now Playing',}} 
                    name="now-playing" title="Now Playing" component={Movies} />
                <Tab.Screen 
                    options={{ tabBarLabel: 'Popular',}} 
                     name="popular" title="Popular" component={Movies} />
                <Tab.Screen 
                    options={{ tabBarLabel: 'Top Rated',}} 
                    name="top-rated" title="Top Rated" component={Movies} />
                <Tab.Screen 
                    options={{ tabBarLabel: 'Upcoming',}} 
                    name="upcoming" Name="Upcoming" component={Movies} />
              
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainRoute;