import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
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
    marginTop: Platform.OS === "android" ? 30 : 20,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});

export default PokemonList;
