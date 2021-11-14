import React from "react";
import { Text, View, Image, StyleSheet, Modal } from "react-native";
import { gStyle } from "../styles/style";

export default function FullInfo({ route }) {
  //   const loadScene = () => {
  //     navigation.goBack();
  //   };
  return (
    <View style={gStyle.main}>
      <Image style={styles.image} source={{ uri: route.params.img }} />
      <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
      <Text style={styles.full}>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    marginTop: 25
  },
  full: {
    fontFamily: "mt-light",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#f55151"
  },
  image: {
    width: "100%",
    height: 200
  }
});
