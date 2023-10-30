import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Image } from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import { styles } from "./TabNavigation.styles";

import reck from "../../../assets/perrito.png";
import StackNavigation from "../StackNavigation/StackNavigation";
import StackFavoritos from "../StackNavigation/StackFavoritos";
import StackAcount from "../StackNavigation/StackAcount";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName='StackNavigation'
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
        tabBarStyle: {
          backgroundColor: "black",
        },
        tabBarShowLabel: false
      })}
    >
      <Tab.Screen
        name="StackAcount"
        component={StackAcount}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "black",
          },
        }}
      />

      <Tab.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{
          title: "",
          tabBarLabel: '',
          // headerTransparent: true,
          headerStyle: {
            backgroundColor: "black",
          },
        }}
      />

      <Tab.Screen
        name="StackFavoritos"
        component={StackFavoritos}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "black",
          },
        }}
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
  if (route.name === "StackAcount") {
    iconName = "user";
  }

  return <AwesomeIcon name={iconName} color={color} style={styles.icon} />;
};
