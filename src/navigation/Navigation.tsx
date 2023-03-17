import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIcon from "@expo/vector-icons/FontAwesome5";
import { Image } from "react-native";

import AccountScreen from "../screens/Account";
import FavoriteScreen from "../screens/Favorite";
import PokedigiScreen from "../screens/Pokedigi";

const Tab = createBottomTabNavigator();

const Navigation = (): JSX.Element => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color, size }) => (
            <IonIcon name="heart" size={size} color={color} />
          ),
          title: "Favorite",
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Pokedigi"
        component={PokedigiScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/pokeball.png")}
              style={{ width: 75, height: 75, top: -15 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <IonIcon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
