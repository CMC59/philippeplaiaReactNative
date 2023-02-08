import * as React from 'react';
import { useState } from "react";
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import Constants from 'expo-constants';


export default function App() {
  const [email, setText] = React.useState("");
  const [pass, setPassword] = React.useState("");
  const [isVisble, setIsVisible] = useState(true);
  function toggleSecureIcon() {
    setIsVisible(!isVisble);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title} >SPACECRAFT</Text>
      <TextInput
        style={styles.button}
        label="Email"
        value={email}
        onChangeText={value => setText(value)}
        mode='outlined'
      />
      <TextInput
        style={styles.button}
        label="Password"
        value={pass}
        secureTextEntry={isVisble}
        onChangeText={value => setPassword(value)}
        mode='outlined'
        right={
          <TextInput.Icon
            onPress={toggleSecureIcon}
            icon={isVisble ? "eye-off" : "eye"}
          />
        }
      />
      <Button icon="arrow-right" mode="contained" onPress={() => console.log('Pressed')}>
        Login
      </Button>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    fontSize: 55,
    textAlign: 'center',
  },
  button: {
    margin: 12,
  }
});

