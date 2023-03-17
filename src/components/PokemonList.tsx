import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import React from "react";
import { PokemonDetail } from "../screens/Pokedigi";

interface Props {
  pokemons: PokemonDetail[];
}

const PokemonList = (props: Props) => {
  const { pokemons } = props;

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item: pokemon }) => (
        <View>
          <Image
            source={{
              uri: pokemon.sprites.other["official-artwork"].front_default,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text>{pokemon.name}</Text>
        </View>
      )}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});

export default PokemonList;
