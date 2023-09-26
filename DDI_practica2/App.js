import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/components/navigation/RootNavigation';
import { useFonts, Montserrat_300Light, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat'; 
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};


export default function App() {
  
  const [fontsLoaded, fontError] = useFonts({
    Montserrat_300Light,
    Montserrat_700Bold,
    Montserrat_400Regular
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
       <RootNavigation />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
