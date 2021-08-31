import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import { Platform } from "react-native";
import Colors from "../Contants/Colors";
const Stack = createStackNavigator();

const MealsNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerTitle: "Meal Categories",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
        }}
      />
      <Stack.Screen name="CategoriesMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailsScreen} />
    </Stack.Navigator>
  );
};

export default MealsNavigation;
