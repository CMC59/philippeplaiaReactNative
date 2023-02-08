import React, { startTransition } from "react";
import { SafeAreaView, StyleSheet, StatusBar, View, FlatList, Text } from "react-native";
import { Card } from 'react-native-paper';
import { useCharacter } from "../hook/useCharacter";

const Item = ({ firstName, lastName, title, family, imageUrl }: any) => {

  return (
    <Card style={styles.card}>
      <Card.Cover style={styles.image} source={{ uri: imageUrl }} />
      <Card.Content>
        <Text style={styles.name}> {firstName} {lastName}</Text>
        <Text style={styles.model}> {title}</Text>
        <Text style={styles.cost}> {family}</Text>
      </Card.Content>
    </Card>
  );
};


export function CharactersFeedScreen() {
  const renderItem = (
    { item }: any) =>
    <Item
      firstName={item.firstName}
      lastName={item.lastName}
      title={item.title}
      family={item.family}
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
  }
});
