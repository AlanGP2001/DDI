import React, { useEffect, useState } from "react";
import { IconButton } from "react-native-paper";
import { addFavoriteApi, isFavoriteApi, removeFavoriteApi } from "../../api/favorito";

export default function IconoFavorito(props) {
  const { id } = props;

  const [ isFavorite, setIsFavorite ] = useState(undefined);
  const [ reloadFavorite, setReloadFavorite ] = useState(false)

  useEffect(() => {
    (async () => {
      const response = await isFavoriteApi(id);
      if (response) setIsFavorite(true);
      else setIsFavorite(false);
    })();
  }, [id, reloadFavorite]);

  const onReloadFavorite = () => {
    setReloadFavorite((prev) => !prev)
  }

  const removeFavoritos = async () => {
    try {
        await removeFavoriteApi(id);
        onReloadFavorite();
    } catch (error) {
        console.log(error);
    }
  }

  const addFavoritos = async () => {
    try {
        await addFavoriteApi(id);
        onReloadFavorite();
    } catch (error) {
        console.log(error);
    }
  };

  const iconColor = isFavorite ? 'red' : 'white';
  return (
    <IconButton icon="heart" iconColor={iconColor} size={50} onPress={isFavorite ? removeFavoritos : addFavoritos} />
  );
}
