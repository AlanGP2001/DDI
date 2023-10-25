import React, { useCallback, useState } from "react";
import HomeScreen from "../HomeScreen";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { ENV } from "../../utils/constants";
import { getFavoriteApi } from "../../api/favorito";

export default function FavoritesScreen() {
  const [characters, setCharacters] = useState([]);
  
  // Función para obtener todos los personajes de la API paginada
  async function getAllCharacters() {
    let allCharacters = [];
    let nextPage = ENV.API_URL_RM;

    while (nextPage) {
      const response = await axios.get(nextPage);
      const newCharacters = response.data.results;
      allCharacters = [...allCharacters, ...newCharacters];
      nextPage = response.data.info.next;
    }

    return allCharacters;
  }

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const favoriteResponse = await getFavoriteApi();
          console.log("Lista de Favoritos", favoriteResponse);

          // Obtén los personajes de la API de Rick and Morty
          const allCharacters = await getAllCharacters();

          // Combina los personajes favoritos con los personajes de la API
          const favoriteCharacters = allCharacters.filter((char) => favoriteResponse.includes(char.id));

          setCharacters(favoriteCharacters);
        } catch (error) {
          console.log(error);
        }
      })();
    }, [])
  );

  return (
    <HomeScreen characters={characters} />
  );
}
