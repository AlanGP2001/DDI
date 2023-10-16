import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../../../screen/AccountScreen";

import { View, Image } from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import { styles } from "./TabNavigation.styles";

import reck from "../../../assets/perrito.png";
import StackNavigation from "../StackNavigation/StackNavigation";
import StackFavoritos from "../StackNavigation/StackFavoritos";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
        tabBarStyle: {
          backgroundColor: "black",
        },
      })}
    >
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "" }}
      />

      <Tab.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{ title: "" }}
      />

      <Tab.Screen
        name="StackFavoritos"
        component={StackFavoritos}
        options={{ title: "" }}
      />
    </Tab.Navigator>
  );
}

const setIcon = (route, routeStatus) => {
  let iconName = "";
  let color = "#79B547";

  if (routeStatus.focused) {
    color = "white";
  }
  if (route.name === "StackNavigation") {
    return (
      <Image
        source={reck}
        style={{ width: 100, height: 100, marginBottom: 50 }}
      />
    );
  } 
  if (route.name === "StackFavoritos") {
    iconName = "heart";
  }
  if (route.name === "Account") {
    iconName = "user";
  }

  return <AwesomeIcon name={iconName} color={color} style={styles.icon} />;
};
