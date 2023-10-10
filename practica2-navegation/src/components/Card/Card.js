import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Card(props) {
  const { characters } = props;
  const goToPersonaje = () => {
    console.log(`Conoce más del personaje: ${characters.name}`);
  };

  return (
    <TouchableOpacity onPress={goToPersonaje}>
      <View style={styles.card}>
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>Nombre: {characters.name}</Text>
            <Text style={styles.info}>Género: {characters.gender}</Text>
            <Text style={styles.info}>Especie: {characters.species}</Text>
            <Text style={styles.info}>Estado: {characters.status}</Text>
          </View>
          <Text style={styles.number}>
            {characters.id < 10 ? `#00${characters.id}` : `#0${characters.id}`}
          </Text>
          <Image style={styles.imagen} source={{ uri: characters.image }} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#82A652",
    borderWidth: 1,
    borderColor: "#282828",
    borderRadius: 30,
    marginBottom: 16,
    marginEnd: 10,
    marginStart: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
  },
  imagen: {
    top: 10,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  number: {
    position: "absolute",
    top: -15,
    right: 8,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
