import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CharacterCard from '../../components/CharacterCard';


interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  image: string;
  location: {
    name: string;
  };
}

export default function Explore() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <ScrollView style={styles.container}>
      {characters.map(char => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141438',
    padding: 10,
  },
});
