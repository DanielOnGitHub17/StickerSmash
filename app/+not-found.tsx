import { Link, Stack } from 'expo-router';
import { View } from 'react-native';
import { STYLES } from './(tabs)/index';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={STYLES.container}>
        <Link href="/" style={STYLES.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}
