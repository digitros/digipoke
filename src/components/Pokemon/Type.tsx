import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";

interface Props {
  types: {
    type: {
      name: string;
    };
  }[];
}

export default function Type(props: Props) {
  const { types } = props;

  const chipWithBgStyle = (type) => ({
    ...styles.chip,
    backgroundColor: getColorByPokemonType(type),
  });

  return (
    <View style={styles.content}>
      {types.map((type, index) => {
        return (
          <View
            key={`${type.type.name}${index}`}
            style={chipWithBgStyle(type.type.name)}
          >
            <Text style={styles.typeName}>{type.type.name}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  chip: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  typeName: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
