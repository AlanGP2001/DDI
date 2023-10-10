import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomScreen from "../../../screen/HomScreen";
import SettingScreen from "../../../screen/SettingScreen";
import FavoritesScreen from "../../../screen/FavoritesScreen";
import AccountScreen from "../../../screen/AccountScreen";

import { View, Image } from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import { styles } from "./TabNavigation.styles";
import AuthScreen from "../../../screen/Auth/AuthScreen";

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
        options={{ title: "Cuenta" }}
      />

      <Tab.Screen
        name="Home"
        component={HomScreen}
        options={{
          title: "",
          tabBarIcon: () => (
            <Image
              source={reck}
              style={{ height: 100, width: 100}}
            />
          ),
        }}
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
    color = "#9CCC4E";
  }
  if (route.name === "Home") {
    iconName = "home";
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
