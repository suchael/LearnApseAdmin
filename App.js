import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


import News from './src/News/News.js';
import Questions from './src/Questions/Questions.js';
import CreateNews from "./src/News/CreateNews.js"

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
    navigation.navigate('News');
  };

  const navigateToQuestions = () => {
    navigation.navigate('Questions');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigateToNews}>
        <Text style={styles.buttonText}>News</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToQuestions}>
        <Text style={styles.buttonText}>Questions</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue', 
    margin: 10,
    borderRadius: 10,
    height: 40,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
