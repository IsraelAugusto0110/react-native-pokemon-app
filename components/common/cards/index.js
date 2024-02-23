import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ApiPokemon from "../../../api/api-pokemons";

export default function Card({ name, url }) {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonUrl, setPokemonUrl] = useState("");
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonSprite, setPokemonSprite] = useState();
  const [pokemonId, setPokemonId] = useState();

  useEffect(() => {
    setPokemonName(name);
    setPokemonUrl(url);

    //
    ApiPokemon.getAllByNumber(url)
      .then((res) => {
        setPokemonType(res.data.types);
        setPokemonSprite(res.data.sprites.front_default);
        setPokemonId(res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function handlePress() {
    console.log(pokemonName);
    console.log(pokemonSprite);
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View>
          <Text style={styles.textName}>Id: {pokemonId}</Text>
          <Text style={styles.textName}>{pokemonName}</Text>
          <FlatList
            horizontal
            data={pokemonType}
            renderItem={({ item }) => (
              <View style={styles.containerType}>
                <Text style={styles.typeText}>{item.type.name} </Text>
              </View>
            )}
          />
        </View>
        <View style={styles.containerImage}>
          <Image source={{ uri: pokemonSprite }} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
