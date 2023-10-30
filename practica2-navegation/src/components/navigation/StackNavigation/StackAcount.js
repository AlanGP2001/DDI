import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../../../screen/Account/AccountScreen";
import ChangeEmail from "../../../screen/Account/ChangeEmail/ChangeEmail";
import ChangeName from "../../../screen/Account/ChangeName/ChangeName";
import ChangePassword from "../../../screen/Account/ChangePassword/ChangePassword";
import ChangeUsername from "../../../screen/Account/ChangeUsername/ChangeUsername";


export default function StackAcount() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ChangeName"
        component={ChangeName}
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
      <Stack.Screen
        name="ChangeEmail"
        component={ChangeEmail}
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
      <Stack.Screen
        name="ChangeUsername"
        component={ChangeUsername}
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
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
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
