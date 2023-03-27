import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { PokemonStats } from "../../screens/Pokedigi";
import { getColorByStatPercent } from "../../utils/getColorByPokemonType";

interface Props {
  stats: PokemonStats[];
}

export default function Stats(props: Props) {
  const { stats } = props;

  const maxStats = [255, 190, 230, 194, 230, 180];

  const statBarWidth = (index, stat) => {
    const percent = (100 * stat) / maxStats[index];
    const barBackground = getColorByStatPercent(percent);
    return { width: `${percent}%`, backgroundColor: barBackground };
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Stats</Text>
      {stats.map((stat, index) => {
        return (
          <View key={`${stat.stat.name}${index}`} style={styles.stat}>
            <View style={styles.statTitle}>
              <Text style={styles.statTitleText}>{stat.stat.name}</Text>
            </View>
            <View style={styles.statInfo}>
              <Text style={styles.statNumber}>{stat.base_stat}</Text>
              <View style={styles.statBg}>
                <View
                  style={[styles.statBar, statBarWidth(index, stat.base_stat)]}
                />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  stat: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  statTitle: {
    width: "30%",
  },
  statTitleText: {
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 12,
    color: "#999",
  },
  statInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  statNumber: {
    width: "12%",
    fontSize: 12,
  },
  statBg: {
    width: "88%",
    height: 5,
    backgroundColor: "#eee",
    borderRadius: 20,
    overflow: "hidden",
  },
  statBar: {
    height: 5,
    borderRadius: 20,
  },
});
