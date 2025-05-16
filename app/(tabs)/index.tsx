import { View, Text, Image, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
   <Image
  source={require('@/assets/images/rick_and_morty_wallpaper_photo.jpg')}
  style={styles.image}
  resizeMode="contain"
/>

      <Text style={styles.title}>Welcome to the Rick and Morty API</Text>
      <Text style={styles.subtitle}>Work done by ArtByteCoder00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141438',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
  },
});
