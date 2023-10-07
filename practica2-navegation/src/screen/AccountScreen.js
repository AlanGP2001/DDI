import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";
import { useAuth } from "../hooks/useAuth";

export default function AccountScreen() {

  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image size={240} source={require("../assets/alan.jpg")} style={styles.img} />
        <Text> Nombre: {user.username} </Text>
        <Text> Nombre: {user.email} </Text>
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
    flexDirection: "column"
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
  img: {
    height: 240,
    width: 240,
    marginBottom: 20
  }
});
