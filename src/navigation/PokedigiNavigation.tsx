import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PokedigiScreen from "../screens/Pokedigi";
import PokemonScreen from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

const PokedigiNAvigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedigi"
        component={PokedigiScreen}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="Pokemon" component={PokemonScreen} />
    </Stack.Navigator>
  );
};

export default PokedigiNAvigation;
