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
        name="Detail"
        component={CharacterDetail}
        options={{
          title: "",
          headerTransparent: true,
          headerLeftContainerStyle: {
            marginTop: 10,
            marginStart: 20,
            backgroundColor: '#79B547',
            borderRadius: 200,
            height: 50,
            width: 50,
            tintColor: 'white'
          }
        }}
      />
    </Stack.Navigator>
  );
}
