import React, { startTransition } from "react";
import { SafeAreaView, StyleSheet, StatusBar, View, FlatList, Text } from "react-native";
import { Button, Card } from 'react-native-paper';
import { useCharacter } from "../hook/useCharacter";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../navigation/Routes";

const Item = ({ firstName, lastName, imageUrl }: any) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      style={styles.touchable} onPress={() => {
        /* 1. Navigate to the Details route with params */
        navigation.navigate(Routes.CHARACTER_SCREEN_DETAIL, {
          firstName,
          imageUrl,
          lastName,
        });
      }}
    >
      <Card style={styles.card}>
        <Card.Cover style={styles.image} source={{ uri: imageUrl }} />
        <Card.Content>
          <Text style={styles.name}> {firstName} {lastName}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export function CharactersFeedScreen() {
  const renderItem = (
    { item }: any) =>
    <Item
      firstName={item.firstName}
      lastName={item.lastName}
      imageUrl={item.imageUrl}
    />;

  const { data, status } = useCharacter();

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'error') {
    return <Text>Error!</Text>;
  }

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
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

