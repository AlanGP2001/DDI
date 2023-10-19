import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import RickandMortyApi from "../../../api/rm";
import CharacterDetail from "../../../screen/CharacterDetail/CharacterDetail";

export default function StackNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RickandMortyApi"
        component={RickandMortyApi}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={CharacterDetail}
        options={{
          title: "",
          headerTransparent: true,
          headerBackImage: () => (
            <Image source={require('../../../assets/arrowleft.png')} style={{ width: 50, height: 50}} />
            ),
        }}
      />
    </Stack.Navigator>
  );
}

const Styles = StyleSheet.create({
  img: {
    height: 50,
    width: 50,
    backgroundColor: '#79B547',
    borderRadius: 30,
    marginStart: 20,
  }
})