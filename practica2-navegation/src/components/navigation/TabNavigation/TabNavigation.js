import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../../screen/HomeScreen";
import SettingScreen from "../../../screen/SettingScreen";
import FavoritesScreen from "../../../screen/Favoritos/FavoritesScreen";
import AccountScreen from "../../../screen/AccountScreen";

import { View, Image } from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import { styles } from "./TabNavigation.styles";
import AuthScreen from "../../../screen/Auth/AuthScreen";
import RickandMortyApi from "../../../api/rm";

import reck from "../../../assets/perrito.png";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
      })}
    >
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "Mi Cuenta" }}
      />

      <Tab.Screen
        name="Home"
        component={RickandMortyApi}
        options={{ title: "" }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: "Favoritos" }}
      />

      {/* <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{ title: "Ajustes" }}
      /> */}
    </Tab.Navigator>
  );
}

const setIcon = (route, routeStatus) => {
  let iconName = "";
  let color = "#6E6E6E";

  if (routeStatus.focused) {
    color = "#79B547";
  }
  if (route.name === "Home") {
    return (
      <Image
        source={reck}
        style={{ width: 100, height: 100, marginBottom: 50 }}
      />
    );
  }
  if (route.name === "Settings") {
    iconName = "cog";
  }
  if (route.name === "Favorites") {
    iconName = "heart";
  }
  if (route.name === "Account") {
    iconName = "user";
  }

  return <AwesomeIcon name={iconName} color={color} style={styles.icon} />;
};
