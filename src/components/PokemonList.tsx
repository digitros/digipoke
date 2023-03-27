import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";
import { PokemonDetail } from "../screens/Pokedigi";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: PokemonDetail[];
  loadPokemons: () => void;
  isNext: boolean;
}

const PokemonList = (props: Props) => {
  const { pokemons, loadPokemons, isNext } = props;

  const loadMorePokemons = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item: pokemon }) => <PokemonCard pokemon={pokemon} />}
      contentContainerStyle={styles.flatListContentContainer}
      columnWrapperStyle={{ justifyContent: "space-around" }}
      onEndReached={isNext && loadMorePokemons}
      onEndReachedThreshold={0.2}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="AEAEAE"
          />
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});

export default PokemonList;
