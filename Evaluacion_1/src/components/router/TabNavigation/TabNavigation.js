import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Curiosidades from "../../../screen/curiosidades/Curiosidades";

import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import { styles } from "./TabNavigation.styles";

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
        name="Curiosidades"
        component={Curiosidades}
        options={{
          title: "Curiosidades",
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
  if (route.name === "Curiosidades") {
    iconName = "heart";
  }

  return <AwesomeIcon name={iconName} color={color} style={styles.icon} />;
};
