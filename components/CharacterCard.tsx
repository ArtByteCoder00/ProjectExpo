import { View, Text, Image, StyleSheet } from 'react-native';

interface Character {
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  image: string;
  location: {
    name: string;
  };
}

export default function CharacterCard({ character }: { character: Character }) {
  const statusColor =
    character.status === 'Alive'
      ? 'limegreen'
      : character.status === 'Dead'
      ? 'red'
      : 'gray';

  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{character.name}</Text>
        <View style={styles.statusRow}>
          <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
          <Text style={styles.status}>{character.status} - {character.species}</Text>
        </View>
        <Text style={styles.locationTitle}>Last known location:</Text>
        <Text style={styles.location}>{character.location.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#25255b',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 110,
    height: 110,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  status: {
    color: '#ccc',
    fontSize: 14,
  },
  locationTitle: {
    color: '#aaa',
    fontSize: 12,
  },
  location: {
    color: '#fff',
    fontSize: 14,
  },
});
