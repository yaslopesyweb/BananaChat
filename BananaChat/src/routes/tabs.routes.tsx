import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from '../screens/Feed'
import Profile from '../screens/Profile'
import { Feather } from '@expo/vector-icons'
import React from 'react'
import NewPost from '../components/NewPost'


const TabNavigator = createBottomTabNavigator()

export default function TabNavigation() {
    return (
        <TabNavigator.Navigator>
            <TabNavigator.Screen 
                name='Feed' 
                component={Feed} 
                options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => <Feather name='home' size={size} color={color} />
            }} />
            <TabNavigator.Screen name='New' component={NewPost} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => <Feather name='plus-circle' size={size} color={color} />
            }} />
        </TabNavigator.Navigator>
    )
}