
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {


  // if (!loaded) {
  //   // Async font loading only occurs in development.
  //   return null;
  // }

  return (
<>
<Stack>
        <Stack.Screen name="index" options={{ headerShown: false}}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
</>
      
  );
}
