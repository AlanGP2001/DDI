import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { useAuth } from "../hooks/useAuth";

export default function AccountScreen() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image size={270} source={require("../assets/baboso.png")} />
      </View>
      <ScrollView>
        <View style={styles.MainContainer}>
          <Text style={styles.username}> Nombre: {user.username} </Text>
          <Text style={styles.email}> Correo: {user.email} </Text>
          <Button mode="contained" onPress={logout}>
            Cerrar sesión
          </Button>
        </View>
      </ScrollView>
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column"
  },
  header: {
    // flexDirection: "row",
    justifyContent: "space-between", // espacio entre los elementos,
    alignItems: "center", // alinea los elementos al centro
    padding: 10,
  },
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
},
email: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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
    marginBottom: 20,
  },
});
