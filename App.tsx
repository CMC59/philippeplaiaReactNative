import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { TermsScreen } from './src/screens/TermsScreen';
import { SafeAreaView } from 'react-native';
import { CharactersFeedScreen } from './src/screens/CharactersFeedScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharacterDetail } from './src/screens/CharacterDetail';
import { Navigator } from './src/navigation/Navigator';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>

  );
};

// always export default App otherwise Expo is not happy
export default App;
