import { View, Text, Image, StyleSheet } from 'react-native';

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/iconMorty.png')} style={styles.image} />
      <Text style={styles.text}>Page not found, sorry</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#141438', alignItems: 'center', justifyContent: 'center' },
  image: { width: 100, height: 100, marginBottom: 20 },
  text: { color: '#fff', fontSize: 18 },
});
