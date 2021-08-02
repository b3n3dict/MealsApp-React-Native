import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
const CategoryMealsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>CategoryMealsScreen</Text>
      <Button
        title="Meal details"
        onPress={() => navigation.navigate("MealDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default CategoryMealsScreen;
