import { View } from "react-native";

export default function CharacterDetail(props) {
    console.log(props);
    // const { navigation, route: { params } } = props;
    // console.log(params.id, params.name);

    return (
        <View>
            <Text>
                Bienvenido 
                {/* {params.name} */}
            </Text>
        </View>
        
    )
}