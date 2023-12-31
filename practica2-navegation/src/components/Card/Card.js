import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Avatar, Card } from "react-native-paper";

export default function Cards(props) {
  const { characters } = props;
  const navigation = useNavigation();

  const goToPersonaje = () => {
    navigation.navigate("Detail", {
      id: characters.id,
      name: characters.name,
      status: characters.status,
      species: characters.species,
      type: characters.type,
      image: characters.image,
      gender: characters.gender,
      origin: characters.origin.name,
    });
  };

  return (
    <TouchableOpacity onPress={goToPersonaje}>
      <Card.Title
        style={styles.card}
        title={<Text style={styles.title}>{characters.name}</Text>}
        subtitle={<Text style={styles.subtitle}>{characters.species}</Text>}
        left={(props) => (
          <Avatar.Image size={50} source={{ uri: characters.image }} />
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
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
  },
  text: {
    color: "#79B547",
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
