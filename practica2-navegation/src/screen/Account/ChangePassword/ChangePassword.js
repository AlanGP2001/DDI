import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { globalStyles } from "../../../../styles";

export default function ChangePassword() {

  return (
    <ImageBackground
      source={require("../../../assets/fondo.png")}
      style={globalStyles.containers.container}
    >
      <View style={styles.container}>
        <Text style={styles.text}> ChangePassword </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    color: 'white'
  },
});
