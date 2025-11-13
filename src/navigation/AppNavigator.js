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
        <stack.Screen name="CharactersList" component={CharactersListScreen} options={{ headerShown: false }} />
        <stack.Screen name="CharacterDetail" component={CharacterDetailScreen} options={({ navigation }) => ({
          title: 'Detalhes',
          headerStyle: { backgroundColor: '#0B1E2D' },
          headerTintColor: '#97CE4C',
          headerTitleStyle: { fontWeight: '700' },
          headerBackTitleVisible: false, // remove o texto "Voltar"
        })} />
      </stack.Navigator>
    </NavigationContainer>
  );
}