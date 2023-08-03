import { SafeAreaView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonsFavoriteApi } from "../api/favorite";

const Favorite = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Text>Favorite</Text>
    </SafeAreaView>
  );
};

export default Favorite;
