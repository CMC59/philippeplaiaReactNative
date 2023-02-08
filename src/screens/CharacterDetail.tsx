import React, { startTransition } from "react";
import { SafeAreaView, StyleSheet, StatusBar, View, FlatList, Text, Image } from "react-native";
import { Card } from 'react-native-paper';
import { useCharacter } from "../hook/useCharacter";
import { TouchableOpacity } from "react-native";


export const CharacterDetail = ({ route }) => {
    const characterfirstname = route.params.firstName;
    const characterlastname = route.params.lastName;
    const charactertitle = route.params.title;
    const characterfamily = route.params.family;
    const image = route.params.imageUrl;
    console.log(route.params)
    return (

        <Card style={styles.container}>
            <Card.Cover source={{ uri: image }} />
            <Card.Content>
                <Text style={styles.name}>{characterfirstname} {characterlastname}</Text>
                <Text style={styles.model}>{charactertitle}</Text>
                <Text style={styles.cost}>{characterfamily}</Text>
            </Card.Content>
        </Card>

    );
};




const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    card: {
        backgroundColor: '#c3cfe2',
        display: 'flex',
        alignItems: 'center',
        margin: 20,

    },
    name: {
        fontSize: 32,
    },
    model: {
        fontWeight: 'bold',
    },
    cost: {
        fontStyle: 'italic',
    },
    image: {
        marginTop: 10,
        padding: 10,
        height: 300,
        width: 300,
    },
    touchable: {
        padding: 10,
    },
    navContainer: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ddd',
    },
    navItem: {
        fontSize: 16,
    },
    textContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        fontWeight: "bold",
        fontSize: 20,
    },
});


