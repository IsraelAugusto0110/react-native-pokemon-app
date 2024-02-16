import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ApiPokemon from "../../../api/api-pokemons";

export default function Card({ name, url }) {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonUrl, setPokemonUrl] = useState("");
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    setPokemonName(name);
    setPokemonUrl(url);
    //
  }, []);

  async function handlePress() {
    //console.log(pokemonName, pokemonUrl);
    await ApiPokemon.getAllByNumber(pokemonUrl)
      .then((res) => {
        //console.log(res.data.types[1]);
        setPokemonData(res.data);
        console.log(pokemonData.types[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.textName}>{pokemonName}</Text>
        <Text style={styles.textName}>{pokemonUrl}</Text>
      </View>
    </TouchableOpacity>
  );
}
