import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PokedigiScreen, { PokemonDetail } from "../screens/Pokedigi";
import PokemonScreen from "../screens/Pokemon";
import { NavigatorScreenParams } from "@react-navigation/native";

export type PokedexStackParamList = {
  Home: NavigatorScreenParams<{}>;
  Pokemon: { pokemon: PokemonDetail };
};

const Stack = createNativeStackNavigator<PokedexStackParamList>();

const PokedigiNavigation = () => {
  return (
    <Stack.Navigator id="PokedigiNavigator">
      <Stack.Screen
        name="Home"
        component={PokedigiScreen}
        options={{
          title: "",
          headerTransparent: true,
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default PokedigiNavigation;
