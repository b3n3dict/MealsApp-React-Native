import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
const MealDetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>MealDetailsScreen</Text>
      <Button title="Go Back" onPress={() => navigation.popToTop()} />
    </View>
  );
};
const styles = StyleSheet.create({});
export default MealDetailsScreen;
