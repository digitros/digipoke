import AsyncStorage from "@react-native-async-storage/async-storage";

export const addFavoritePokemon = async (id) => {
  try {
    const favorites = await getFavoritePokemons();
    favorites.push(id);
    await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (error) {
    console.log(error);
  }
};

export const removeFavoritePokemon = async (id) => {
  try {
    const favorites = await getFavoritePokemons();
    const filterFavorites = favorites.filter((fav) => fav !== id);
    await AsyncStorage.setItem("favorites", JSON.stringify(filterFavorites));
  } catch (error) {
    console.log(error);
  }
};

export const getFavoritePokemons = async () => {
  try {
    const response = await AsyncStorage.getItem("favorites");
    return response != null ? JSON.parse(response) : [];
  } catch (error) {
    console.log(error);
  }
};
