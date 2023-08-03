import { useState, useLayoutEffect } from "react";
import PropsTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  addFavoritePokemon,
  getFavoritePokemons,
  removeFavoritePokemon,
} from "../../api/favorite";

const FavButton = ({ id }) => {
  const [fav, setFav] = useState(undefined);

  useLayoutEffect(() => {
    (async () => {
      const favorites = await getFavoritePokemons();
      const isFav = favorites.includes(id);
      setFav(isFav);
    })();
  }, []);

  const handleFavorite = () => {
    fav ? removeFavoritePokemon(id) : addFavoritePokemon(id);
    setFav(!fav);
  };

  return (
    <Icon
      name="heart"
      solid={fav && true}
      color="#fff"
      size={24}
      style={{ marginRight: 20 }}
      onPress={handleFavorite}
    />
  );
};

FavButton.propTypes = {
  id: PropsTypes.number.isRequired,
};

export default FavButton;
