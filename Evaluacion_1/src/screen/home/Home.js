import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/news.png")} style={styles.logo} />
      </View>
      <Text style={styles.subtitle}>La app donde podrás encontrar</Text>
      <Text style={styles.subtitle}>información de diferentes categories</Text>
      <Button
        mode="text"
        style={styles.buttonSubmit}
        onPress= {navigation.navigate('Curiosidades')}
      >
        Comenzar
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#663399",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 400,
  },
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    color: "#ffffff",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 40,
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
    backgroundColor: "#000000",
  },
  buttonSubmit: {
    padding: 5,
  },
});
