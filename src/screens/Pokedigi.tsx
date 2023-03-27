import { SafeAreaView, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonByUrlApi, getPokemonsApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export interface PokemonType {
  type: { name: string; url: string };
}

export interface PokemonSprites {
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
}

export interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonDetail {
  id: number;
  name: string;
  types: PokemonType[];
  order: number;
  sprites: PokemonSprites;
  stats: PokemonStats[];
}

const Pokedigi = (): JSX.Element => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  const loadPokemons = async () => {
    try {
      const { results, next } = await getPokemonsApi(nextUrl);
      setNextUrl(next);
      const pokemonsArray: PokemonDetail[] = [];
      for await (const pokemon of results) {
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
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={Boolean(nextUrl)}
      />
    </SafeAreaView>
  );
};

export default Pokedigi;
