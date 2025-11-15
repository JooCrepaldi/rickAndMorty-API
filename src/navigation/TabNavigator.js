import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons as Icon } from '@expo/vector-icons'; // <-- usar @expo/vector-icons em Expo

import CharactersListScreen from "../screens/CharactersListScreen";
import SavedScreen from "../screens/SavedScreen.js";
import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colors.bgLight,
                borderTopWidth: 0,
                height: '11%',
            },
            tabBarActiveTintColor: colors.green,    
            tabBarInactiveTintColor: colors.secondaryTitle, 
            tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: "600",
                marginTop: 4,
            }
        }}>
            <Tab.Screen
                name="Home"
                component={CharactersListScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home-filled" size={30} color={color} />
                    )
                }} />
            <Tab.Screen
                name="Saved"
                component={SavedScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="bookmark" size={30} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
