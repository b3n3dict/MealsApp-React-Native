import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import MealsNavigation from "./navigation/MealsNavigator";

export default function App() {
  const [loaded, error] = useFonts({
    openSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    openSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <MealsNavigation />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ccc",
    justifyContent: "center",
  },
});
