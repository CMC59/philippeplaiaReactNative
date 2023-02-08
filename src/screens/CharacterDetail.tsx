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
                <Text style={styles.text}>{characterfirstname}</Text>
                <Text style={styles.text}>{characterlastname}</Text>
                <Text style={styles.text}>{charactertitle}</Text>
                <Text style={styles.text}>{characterfamily}</Text>
            </Card.Content>
        </Card>

    );
};




const styles = StyleSheet.create({

    container: {
        flex: 1,


        backgroundColor: 'red'
    },
    image: {
        marginTop: 10,
        padding: 10,
        height: 300,
        width: 300,
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
    },
});


