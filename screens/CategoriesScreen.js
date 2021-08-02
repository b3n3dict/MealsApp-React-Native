import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
const CategoriesScreen = ({ navigation }) => {
  return (
    <View>
      <Text>CategoriesScreen</Text>
      <Button
        title="Meals"
        onPress={() => navigation.navigate("CategoriesMeals")}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default CategoriesScreen;
