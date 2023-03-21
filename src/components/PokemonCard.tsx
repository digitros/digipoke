import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { PokemonDetail } from "../screens/Pokedigi";
import { getColorByPokemonType } from "../utils/getColorByPokemonType";

interface Props {
  pokemon: PokemonDetail;
}

const PokemonCard = (props: Props) => {
  const { pokemon } = props;

  const bgStyle = {
    ...styles.card,
    backgroundColor: getColorByPokemonType(pokemon.types[0].type.name),
  };

  const goToPokemon = () => {
    console.log("go to pokemon", pokemon.name);
  };

  return (
    <Pressable onPress={goToPokemon}>
      <View style={bgStyle}>
        <View style={styles.textContainer}>
          <Text style={styles.order}>
            #{String(pokemon.order).padStart(2, "0")}
          </Text>
          <Text style={styles.name}>{pokemon.name}</Text>
        </View>
        <Image
          source={{
            uri: pokemon.sprites.other["official-artwork"].front_default,
          }}
          style={styles.image}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    width: 150,
    position: "relative",
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 15,
  },
  image: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 90,
    height: 90,
  },
  textContainer: {
    position: "absolute",
    width: 150,
    padding: 10,
  },
  name: {
    fontSize: 15,
    color: "#fff",
    textTransform: "capitalize",
  },
  order: {
    fontSize: 12,
    color: "#fff",
    position: "absolute",
    right: 10,
    top: 10,
  },
});

export default PokemonCard;
