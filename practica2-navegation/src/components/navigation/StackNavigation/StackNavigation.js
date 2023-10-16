import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import RickandMortyApi from "../../../api/rm";
import CharacterDetail from "../../../screen/CharacterDetail/CharacterDetail";
import { useNavigation } from "@react-navigation/native";

export default function StackNavigation() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
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
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("RickandMortyApi")}
              >
                <Image
                  source={require("../../../assets/arrowleft.png")}
                  style={Styles.img}
                />
              </TouchableOpacity>
            );
          },
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