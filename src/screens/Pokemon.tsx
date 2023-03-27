import { Text, ScrollView } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PokedexStackParamList } from "../navigation/PokedigiNavigation";
import Header from "../components/Pokemon/Header";

type Props = NativeStackScreenProps<
  PokedexStackParamList,
  "Pokemon",
  "PokedigiNavigator"
>;

const Pokemon = (props: Props) => {
  const { pokemon } = props.route.params;
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
    </ScrollView>
  );
};

export default Pokemon;
