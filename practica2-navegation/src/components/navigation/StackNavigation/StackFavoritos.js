import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen from "../../../screen/Favoritos/FavoritesScreen";
import CharacterDetail from "../../../screen/CharacterDetail/CharacterDetail";

export default function StackFavoritos() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Favoritos">
      <Stack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="CharacterDetail"
        component={CharacterDetail}
        options={{
          title: "",
          headerTransparent: true,
          headerBackImage: () => (
            <Image source={require('../../../assets/arrowleft.png')} />
          ),
          headerLeftContainerStyle: {
            marginTop: 90
          }
        }}
      />
    </Stack.Navigator>
  );
}
