import { Text, ScrollView } from "react-native";
import React from "react";
import IonIcon from "@expo/vector-icons/FontAwesome5";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PokedexStackParamList } from "../navigation/PokedigiNavigation";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Favorite from "../components/Pokemon/Favorite";
import useAuth from "../hooks/useAuth";

type Props = NativeStackScreenProps<
  PokedexStackParamList,
  "Pokemon",
  "PokedigiNavigator"
>;

const Pokemon = (props: Props) => {
  const {
    navigation,
    route: { params },
  } = props;
  const { pokemon } = params;
  const { auth } = useAuth();

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemon?.id} />,
      headerLeft: () => (
        <IonIcon
          name="arrow-left"
          size={20}
          color="#fff"
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, pokemon, auth]);

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
};

export default Pokemon;
