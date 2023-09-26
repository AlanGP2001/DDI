import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Avatar.Icon size={24} icon="folder" /> */}
        <Text> Alan Gallardo Peñaloza </Text>
        <Avatar.Image size={60} source={require("../assets/alan.jpg")} />
      </View>
      <ScrollView>
        <View style={styles.MainContainer}></View>
      </ScrollView>
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between", // espacio entre los elementos,
    alignItems: "center", // alinea los elementos al centro
    padding: 10,
  },
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between", // espacio entre los elementos,
    alignItems: "center", // alinea los elementos al centro
    padding: 10,
  },
});
