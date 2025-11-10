import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CharactersListScreen from "../screens/CharactersListScreen";
import CharacterDetailScreen from "../screens/CharacterDetailScreen";

const stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
        <stack.Navigator initialRouteName="CharactersList">
            <stack.Screen name="CharactersList" component={CharactersListScreen} options={{ title: 'Rick and Morty Characters' }} />
            <stack.Screen name="CharacterDetail" component={CharacterDetailScreen} options={{ title: 'Character Details' }} />
        </stack.Navigator>
    </NavigationContainer>
  );
}