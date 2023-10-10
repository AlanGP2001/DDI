import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../../styles";

export default function FavoritesScreen() {
  return (
    <View style={globalStyles.form.contenido}>
      <Text style={globalStyles.form.text}>Favoritos</Text>
    </View>
  );
}
