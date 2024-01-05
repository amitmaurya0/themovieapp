import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NowPlaying from '../screens/NowPlaying';
import Upcoming from '../screens/Upcoming';
import Popular from '../screens/Popular';
import TopRated from '../screens/TopRated';
import CustomTabDesign from './CustomTabDesign';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
    return (
      
        <Tab.Navigator screenOptions={{
                        headerShown: false,
                        }} 
                        tabBar={(props) =><CustomTabDesign {...props} />}>
            <Tab.Screen 
                options={{ tabBarLabel: 'Now Playing',}} 
                name="now-playing" title="Now Playing" component={NowPlaying} />
            <Tab.Screen 
                options={{ tabBarLabel: 'Popular',}} 
                    name="popular" title="Popular" component={Popular} />
            <Tab.Screen 
                options={{ tabBarLabel: 'Top Rated',}} 
                name="top-rated" title="Top Rated" component={TopRated} />
            <Tab.Screen 
                options={{ tabBarLabel: 'Upcoming',}} 
                name="upcoming" Name="Upcoming" component={Upcoming} />
            
        </Tab.Navigator>
        
    )
}

export default BottomTabNavigation