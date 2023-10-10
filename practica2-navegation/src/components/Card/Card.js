import { Text, TouchableOpacity } from "react-native";

export default function Card(props) {
    const { characters } = props;
    const goToPersonaje = () => {
        console.log(`Conoce mas del personaje: ${characters.name}`);
    }

    return(
        <TouchableOpacity onPress={goToPersonaje}>
            <Text> Hola </Text>
        </TouchableOpacity>
    )
}