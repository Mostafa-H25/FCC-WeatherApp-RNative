import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = ({ name, color, text, bodyStyle }) => {
  return (
    <View style={styles.container}>
      <Feather name={name} size={50} color={color} />
      <Text style={bodyStyle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default IconText;
