import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Avatar, Card } from "react-native-paper";

export default function Cards(props) {
  const { characters } = props;
  const goToPersonaje = () => {
    console.log(`Conoce más del personaje: ${characters.name}`);
  };

  return (
    // <TouchableOpacity onPress={goToPersonaje}>
    //   <View style={styles.card}>
    //     <View style={styles.content}>
    //       <View style={styles.infoContainer}>
    //         <Text style={styles.name}>Nombre: {characters.name}</Text>
    //         <Text style={styles.info}>Género: {characters.gender}</Text>
    //         <Text style={styles.info}>Especie: {characters.species}</Text>
    //         <Text style={styles.info}>Estado: {characters.status}</Text>
    //       </View>
    //       <Text style={styles.number}>
    //         {characters.id < 10 ? `#00${characters.id}` : `#0${characters.id}`}
    //       </Text>
    //       <Image style={styles.imagen} source={{ uri: characters.image }} />
    //     </View>
    //   </View>
    // </TouchableOpacity>
    <TouchableOpacity onPress={goToPersonaje}>
      <Card.Title
        style={styles.card}
        title={characters.name}
        subtitle={characters.species}
        left={(props) => (
          <Avatar.Image size={45} source={{ uri: characters.image }} />
        )}
        right={(props) => (
          <Text style={styles.text}>
            {characters.id < 10 ? `#00${characters.id}` : `#0${characters.id}`}
          </Text>
        )}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginEnd: 15,
    marginStart: 10,
  },
  text: {
    color: '#79B547'
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
