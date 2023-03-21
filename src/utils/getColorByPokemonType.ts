import { POKEMON_TYPE_COLORS } from "./contants";

export const getColorByPokemonType = (type: string) =>
  POKEMON_TYPE_COLORS[type.toLowerCase()];
