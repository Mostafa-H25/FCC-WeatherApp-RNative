import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";
import moment from "moment";

import IconText from "../components/IconText";

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/city.webp")}
        style={styles.imageLayout}
      >
        <Text style={[styles.cityText, styles.cityName]}>{name}</Text>
        <Text style={[styles.cityText, styles.countryName]}>{country}</Text>
        <View style={styles.populationWrapper}>
          <IconText
            name={"user"}
            color={"red"}
            text={`Population: ${population}`}
            bodyStyle={styles.populationText}
          />
        </View>
        <View style={styles.riseSetWrapper}>
          <IconText
            name={"sunrise"}
            color={"red"}
            text={moment(sunrise).format("h:mm:ss a")}
            bodyStyle={styles.riseSetText}
          />
          <IconText
            name={"sunset"}
            color={"red"}
            text={moment(sunset).format("h:mm:ss a")}
            bodyStyle={styles.riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "red",
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  populationWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
    fontWeight: "bold",
  },
  riseSetWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
});

export default City;
