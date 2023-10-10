import { SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';

export default function HomeScreen(props) {
  const { characters } = props;
  console.log('PROPS', props);
  console.log('Characters', characters);
  return (
    <SafeAreaView>
      <FlatList 
        data={characters}
        showsVerticalScrollIndicator={false}
        keyExtractor={(characters) => String(characters.id)}
        renderItem={({ item }) => <Card characters={item} />}
      />
    </SafeAreaView>
  )
}