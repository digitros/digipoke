import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";

interface Props {
  name: string;
  order: number;
  image: string;
  type: string;
}

export default function Header(props: Props) {
  const { name, order, image, type } = props;

  const bgStyle = {
    ...styles.bg,
    backgroundColor: getColorByPokemonType(type),
  };

  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(2, "0")}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    position: "absolute",
    height: 400,
    width: "100%",
    borderBottomEndRadius: 300,
    borderBottomStartRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    top: 30,
    flex: 1,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
});
