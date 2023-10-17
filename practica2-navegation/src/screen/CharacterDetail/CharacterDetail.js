import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { Avatar } from "react-native-paper";
import IconoFavorito from "../Favoritos/IconoFavorito";
import { globalStyles } from "../../../styles";
import TableDetail from "../../components/TablaDetail/TablaDetail";

export default function CharacterDetail(props) {
  const {
    navigation,
    route: { params },
  } = props;

  return (
    <ImageBackground
      source={require("../../assets/fondo.png")}
      style={globalStyles.containers.container}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar.Image size={200} source={{ uri: params.image }} />
        </View>
        <ScrollView>
          <View style={styles.MainContainer}>
            <Text style={styles.username}> {params.name} </Text>
            <IconoFavorito id={params.id} />
            <TableDetail params={params} />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue'
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    color: '#79B547'
  },
  email: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  img: {
    height: 240,
    width: 240,
    marginBottom: 20,
  },
});
