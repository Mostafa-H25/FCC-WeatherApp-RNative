import React from "react";
import { View, Text } from "react-native";

const RowText = ({
  stylesContainer,
  stylesMessageOne,
  stylesMessageTwo,
  messageOne,
  messageTwo,
}) => {
  return (
    <View style={stylesContainer}>
      <Text style={stylesMessageOne}>{messageOne}</Text>
      <Text style={stylesMessageTwo}>{messageTwo}</Text>
    </View>
  );
};

export default RowText;
