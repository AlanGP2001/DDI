import React from "react";
import { SafeAreaView, FlatList, ImageBackground } from "react-native";
import Card from "../components/Card/Card";
import { globalStyles } from "../../styles";

export default function HomeScreen(props) {
  const { characters } = props;
  return (
    <ImageBackground
      source={require("../assets/fondo.png")}
      style={globalStyles.containers.container}
    >
      <SafeAreaView>
        <FlatList
          data={characters}
          showsVerticalScrollIndicator={false}
          keyExtractor={(characters) => String(characters.id)}
          renderItem={({ item }) => <Card characters={item} />}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}
