// import { View, Text } from "react-native";
// import { Button } from "react-native-paper";
// import { globalStyles } from "../../../styles";
// import { getFavoriteApi } from "../../api/favorito";

// export default function FavoritesScreen() {
//   const checkFavorite = async () => {
//     const response = await getFavoriteApi();
//     console.log(response);
//   }

//   return (
//     <View style={globalStyles.form.contenido}>
//       <Button
//         mode='contained'
//         onPress={checkFavorite}
//       >
//         Agregar a Favoritos
//       </Button>
//       <Text style={globalStyles.form.text}>Favoritos</Text>
//     </View>
//   );
// }

import React, { useCallback, useState } from "react";
import { getFavoriteApi } from "../../api/favorito";
import HomeScreen from "../HomeScreen";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { ENV } from "../../utils/constants";

export default function FavoritesScreen() {
  const [characters, setCharacters] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  useFocusEffect(
    useCallback(() => {
      (async () => {
        const favoriteResponse = await getFavoriteApi();
        console.log("Lista de Favoritos", favoriteResponse);
        setFavoritos(favoriteResponse);

        try {
          const response = await axios.get(ENV.API_URL_RM);
          setCharacters(response.data.results);
        } catch (error) {
          console.log(error);
        }
      })();
    }, [])
  );

  return (
    <HomeScreen
      characters={characters.filter((char) => favoritos.includes(char.id))}
    />
  );
}