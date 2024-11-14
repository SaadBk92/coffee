import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";
import CoffeeDetailsScreen from "./app/screens/CoffeeDetailsScreen";
import { StatusBar } from "expo-status-bar";
const App = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.dark }} >
      <StatusBar  backgroundColor="#fffff"/>
      <HomeScreen />
      <View style={{marginBottom:10}}/>
      <CoffeeDetailsScreen/>
      <View style={{marginBottom:10}}/>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({});
