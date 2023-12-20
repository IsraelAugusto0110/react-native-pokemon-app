import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import styles from "./style";

import { Feather } from "@expo/vector-icons";

function SearchInput() {
  const [name, setName] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <Feather name="search" size={30} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search pokemons database"
          onChangeText={setName}
          value={name}
          placeholderTextColor={"#fff"}
        />
      </View>

      <Text> {name} </Text>
    </SafeAreaView>
  );
}

export default SearchInput;
