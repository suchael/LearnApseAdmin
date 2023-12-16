import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const News = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateNews")}
            style={[styles.touchable, { backgroundColor: "black" }]}
          >
            <Text style={[styles.touchableText, { color: "white" }]}>
              Create News
            </Text>
            <FontAwesome name="angle-right" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.wrapper}>
          <Text style={[styles.touchableText, { textAlign: "center" }]}>
            All News
          </Text>
          <NewsHistory />
          <NewsHistory />
        </View>
      </View>
    </ScrollView>
  );
};

function NewsHistory() {
  return (
    <View style = {{marginBottom: 30}}>
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.touchableText}>JAMB latest news</Text>
        <FontAwesome name="angle-right" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: "red" }]}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  wrapper: {
    borderWidth: 2,
    borderColor: "lightgray",
    paddingVertical: 5,
    paddingHorizontal: 3,
    marginTop: 50,
  },
  touchable: {
    backgroundColor: "lightblue",
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 15,
  },
  touchableText: {
    color: "black",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "green", // Change the color as needed
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default News;
