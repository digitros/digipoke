import { POKEMON_TYPE_COLORS } from "./contants";

export const getColorByPokemonType = (type: string) =>
  POKEMON_TYPE_COLORS[type.toLowerCase()];

export const getColorByStatPercent = (percent: number) => {
  if (percent < 25) {
    return "#ff3e3e";
  } else if (percent < 50) {
    return "#F08700";
  } else if (percent < 75) {
    return "#EFCA08";
  } else {
    return "#6EEB83";
  }
};
