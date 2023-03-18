import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { PokemonDetail } from "../screens/Pokedigi";

interface Props {
  pokemon: PokemonDetail;
}

const PokemonCard = (props: Props) => {
  const { pokemon } = props;

  const goToPokemon = () => {
    console.log("go to pokemon", pokemon.name);
  };

  return (
    <Pressable onPress={goToPokemon}>
      <View style={styles.card}>
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
    padding: 5,
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
    width: "100%",
    bottom: 0,
    left: 0,
    backgroundColor: "#000000a0",
    padding: 5,
  },
  name: {
    fontSize: 15,
    color: "#fff",
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
