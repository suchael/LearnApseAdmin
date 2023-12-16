import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

import News from "./src/News/News.js";
import Questions from "./src/Questions/Questions.js";
import CreateNews from "./src/News/CreateNews.js";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LearnApseAdmin">
        <Stack.Screen name="LearnApseAdmin" component={Home} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="CreateNews" component={CreateNews} />
        <Stack.Screen name="Questions" component={Questions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;

const Home = ({ navigation }) => {
  const navigateToNews = () => {
    navigation.navigate("News");
  };

  const navigateToQuestions = () => {
    navigation.navigate("Questions");
  };

  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <TouchableOpacity style={styles.button} onPress={navigateToQuestions}>
          <Text style={styles.buttonText}>Questions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToNews}>
          <Text style={styles.buttonText}>News</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row2}>
        <TouchableOpacity style={styles.button} onPress={navigateToNews}>
          <Text style={styles.buttonText}>Teachers Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToQuestions}>
          <Text style={styles.buttonText}>Students Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "lightgray",
    margin: 5,
    paddingVertical: 20,
  },
  row1: {
    flex: 1,
    justifyContent: "space-around",
    // alignItems: 'center',
    flexDirection: "row",
  },
  row2: {
    flex: 1,
    justifyContent: "space-around",
    // alignItems: 'center',
    flexDirection: "row",
  },
  button: {
    backgroundColor: "blue",
    margin: 10,
    borderRadius: 10,
    height: 50,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
