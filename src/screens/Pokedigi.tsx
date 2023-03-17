import { SafeAreaView, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonByUrlApi, getPokemonsApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  type: {
    name: string;
  };
  order: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

const Pokedigi = (): JSX.Element => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);

  const loadPokemons = async () => {
    try {
      const response: Pokemon[] = await getPokemonsApi();
      const pokemonsArray: PokemonDetail[] = [];
      for await (const pokemon of response) {
        const pokemonData: PokemonDetail = await getPokemonByUrlApi(
          pokemon.url
        );
        pokemonsArray.push(pokemonData);
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
};

export default Pokedigi;