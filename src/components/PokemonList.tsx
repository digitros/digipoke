import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import React from "react";
import { PokemonDetail } from "../screens/Pokedigi";
import PokemonCard from "./PokemonCard";

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
      renderItem={({ item: pokemon }) => <PokemonCard pokemon={pokemon} />}
      contentContainerStyle={styles.flatListContentContainer}
      columnWrapperStyle={{ justifyContent: "space-around" }}
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
