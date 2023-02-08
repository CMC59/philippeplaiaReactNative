import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { TermsScreen } from './src/screens/TermsScreen';
import { SafeAreaView } from 'react-native';
import { CharactersFeedScreen } from './src/screens/CharactersFeedScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CharactersFeedScreen />
    </QueryClientProvider>

  );
};

// always export default App otherwise Expo is not happy
export default App;