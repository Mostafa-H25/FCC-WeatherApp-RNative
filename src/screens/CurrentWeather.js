import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";

import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;
  const weatherCondition = weather[0]?.main;
  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <View style={styles.container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          stylesContainer={styles.highLowWrapper}
          stylesMessageOne={styles.highLow}
          stylesMessageTwo={styles.highLow}
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
        />
      </View>
      <RowText
        stylesContainer={styles.bodyWrapper}
        stylesMessageOne={styles.description}
        stylesMessageTwo={styles.message}
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
});

export default CurrentWeather;
