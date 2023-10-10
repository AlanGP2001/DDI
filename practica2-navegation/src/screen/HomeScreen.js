import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import Card from "../components/Card/Card";

export default function HomeScreen(props) {
  const { characters } = props;
  console.log("Characters", characters);
  return (
    <SafeAreaView style={StyleSheet.container}>
      <FlatList
        data={characters}
        showsVerticalScrollIndicator={false}
        keyExtractor={(characters) => String(characters.id)}
        renderItem={({ item }) => <Card characters={item} />}
      />
    </SafeAreaView>
  );
}
