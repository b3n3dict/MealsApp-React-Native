import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const Stack = createStackNavigator();

const MealsNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoriesMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailsScreen} />
    </Stack.Navigator>
  );
};

export default MealsNavigation;
