import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default function Card({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textName}>{name}</Text>
    </View>
  );
}
