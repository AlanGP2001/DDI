import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Alert } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { useAuth } from "../../hooks/useAuth";
import { globalStyles } from "../../../styles";
import Menu from "../../components/Menu/Menu";
import { getFavoriteApi } from "../../api/favorito";
import { userController } from "../../api/users";

export default function AccountScreen() {
  const { user, logout, upDateUser } = useAuth();

  const logoutAlert = () => {
    Alert.alert(
      'Cerrar sesión',
      '¿Estás seguro que desea cerrar sesión?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        { 
          text: 'Cerrar sesión',
          onPress: async () => {
            const jsonFavoritos = await getFavoriteApi();
            const data = {
              favoritos: jsonFavoritos
            }
            // console.log("Favoritos",pjFavoritos)
            await userController.putMe(user.id, data)
            upDateUser('favoritos', jsonFavoritos)
            logout()
          },
        }
      ],
      {
        cancelable: false,
      }
    )
  }

  return (
    <ImageBackground
      source={require("../../assets/fondo.png")}
      style={globalStyles.containers.container}
    >
      <View style={styles.container}>
        <Text style={styles.username}>Bienvenido</Text>
        <Text style={styles.username}>
          {
            user.firstname && user.lastname
              ? `${user.firstname} ${user.lastname}`
              : user.email  
          }
        </Text>
        <Menu />
        <Button
          mode="contained"
          onPress={logoutAlert}>
          Cerrar sesión
        </Button>
        {/* <View style={styles.header}>
          <Avatar.Image size={270} source={require("../../assets/baboso.png")} />
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
        <View style={styles.footer}></View> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    fontWeight: "bold",
    marginBottom: 20,
    color: '#79B547'
  },
  email: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: 'white'
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
