import { SafeAreaView, FlatList, ImageBackground, ActivityIndicator } from "react-native";
import React from "react";
import { styles } from "./HomeScreen.styles";
import Card from "../../components/Card/Card";
import { globalStyles } from "../../../styles";

export default function HomeScreen(props) {
  const { characters, loadMoreData, nextUrl } = props;

  const loadMore = () => {
    if (nextUrl) {
      loadMoreData();
    }
  }
  return (
    <ImageBackground
      source={require("../../assets/fondo.png")}
      style={globalStyles.containers.container}
    >
      <SafeAreaView>
        <FlatList
          data={characters}
          showsVerticalScrollIndicator={false}
          keyExtractor={(characters) => String(characters.id)}
          renderItem={({ item }) => <Card characters={item} />}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            nextUrl && <ActivityIndicator style={styles.spiner} size='large' color='#79B543' />
          }
        />
      </SafeAreaView>
    </ImageBackground>
  );
}
