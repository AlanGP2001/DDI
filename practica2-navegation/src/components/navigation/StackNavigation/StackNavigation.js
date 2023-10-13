import { createStackNavigator } from "@react-navigation/stack";
import RickandMortyApi from "../../../api/rm";
import CharacterDetail from "../../../screen/CharacterDetail/CharacterDetail";
import { NavigationContainer } from "@react-navigation/native";

export default function StackNavigation() {
  const Stack = createStackNavigator();
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="RickandMortyApi"
          component={RickandMortyApi}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="CharacterDetail"
          component={CharacterDetail}
          options={{
            headerShown: false,
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
