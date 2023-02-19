import React, { startTransition } from "react";
import { SafeAreaView, StyleSheet, StatusBar, View, FlatList, Text, Image } from "react-native";
import { Card } from 'react-native-paper';
import { useCharacter } from "../hook/useCharacter";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../navigation/Routes";


export const CharacterDetail = ({ route }) => {
    const characterfirstname = route.params.firstName;
    const characterlastname = route.params.lastName;
    const charactertitle = route.params.title;
    const characterfamily = route.params.family;
    const image = route.params.imageUrl;
    console.log(route.params)
    const navigation = useNavigation<any>();

    return (

        <Card style={styles.container}>
            <Card.Cover style={styles.image} source={{ uri: image }} />
            <Card.Content>
                <Text style={styles.name}>{characterfirstname} {characterlastname}</Text>
                <Text style={styles.model}>{charactertitle}</Text>
                <Text style={styles.cost}>{characterfamily}</Text>
            </Card.Content>
            <View style={styles.container}>
                <Text style={styles.cost} onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate(Routes.CHARACTERS_SCREEN, {
                    });
                }}>Click Back button!</Text>
            </View>
        </Card>

    );
};




const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 150,
        paddingLeft: 50,
        backgroundColor: 'Colors.white',
        borderRadius: 15,
        shadowColor: 'Colors.shadow',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
    },
    name: {
        fontSize: 32,
        color: 'white'
    },
    model: {
        fontWeight: 'bold',
        color: 'white'
    },
    cost: {
        fontStyle: 'italic',
        color: 'white'
    },
    image: {
        marginTop: 10,
        padding: 10,
        height: 300,
        width: 300,
    },
});


