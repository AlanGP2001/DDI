import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

import { map } from 'lodash';
import { List } from "react-native-paper";
import { styles } from "./Menu.styles";
import accountMenu from './menu.data';

export default function Menu() {
    const navigation = useNavigation();
    return (
        <List.Section>
            <List.Subheader style={styles.title}> Mi Cuenta </List.Subheader>
            {map(accountMenu, (menu) => (
                <List.Item
                    key={menu.title}
                    title={<Text style={{ color: "white" }}>{menu.title}</Text>}
                    description={<Text style={{ color: "white" }}>{menu.descripcion}</Text>}
                    left={(props) => <List.Icon {...props} icon={menu.leftIcon} color="#79B547" />}
                    onPress={() => navigation.navigate(menu.screen)}
                />
            )
            )}
        </List.Section>
    );
}
