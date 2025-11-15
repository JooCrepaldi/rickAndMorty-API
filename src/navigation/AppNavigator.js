import React from "react";
import { colors } from "../theme/colors";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CharacterDetailScreen from "../screens/CharacterDetailScreen";

import TabNavigator from "./TabNavigator";

const stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="MainTabs" component={TabNavigator} options={{headerShown: false}}/>
        <stack.Screen name="CharacterDetail" component={CharacterDetailScreen} options={({ navigation }) => ({
          title: 'Details',
          headerStyle: { backgroundColor: colors.bgLight },
          headerTintColor: colors.title,
          headerTitleStyle: { fontWeight: '800' },
          headerBackTitleVisible: false, // remove o texto "Voltar"
        })} />
      </stack.Navigator>
    </NavigationContainer>
  );
}