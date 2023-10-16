import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen from "../../../screen/Favoritos/FavoritesScreen";
import CharacterDetail from "../../../screen/CharacterDetail/CharacterDetail";

export default function StackFavoritos() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
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
          
        }}
      />
    </Stack.Navigator>
  );
}
