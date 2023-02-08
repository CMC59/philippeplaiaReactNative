import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { TermsScreen } from './src/screens/TermsScreen';
import { SafeAreaView } from 'react-native';
import { CharactersFeedScreen } from './src/screens/CharactersFeedScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharacterDetail } from './src/screens/CharacterDetail';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();
const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Routes.LOGIN_SCREEN" component={App} />
          <Stack.Screen name="Routes.CHARACTERS_SCREEN" component={CharactersFeedScreen} />
          <Stack.Screen name="Routes.CHARACTER_SCREEN_DETAIL" component={CharacterDetail} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

// always export default App otherwise Expo is not happy
export default App;