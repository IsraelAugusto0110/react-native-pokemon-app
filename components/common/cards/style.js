import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: (typeName) => ({
    backgroundColor: colors[typeName],
    margin: 5,
    padding: 15,
    flexDirection: "row",
    width: "auto",
  }),
  containerRound: { borderRadius: 25 },
  textName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffff",
  },
  containerType: {
    padding: 5,
    backgroundColor: "lightblue",
    borderRadius: 50,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  typeText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  containerImage: {
    height: 120,
    width: 120,
    padding: 15,
    marginLeft: 10,
  },
});

export default styles;
