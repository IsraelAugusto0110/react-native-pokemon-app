import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function Card({ name, url }) {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonUrl, setPokemonUrl] = useState("");

  useEffect(() => {
    setPokemonName(name);
    setPokemonUrl(url);
  });

  function handlePress() {
    console.log(pokemonName);
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.textName}>{pokemonName}</Text>
      </View>
    </TouchableOpacity>
  );
}
