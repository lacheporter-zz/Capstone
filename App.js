import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("I pressed it");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ top: 20, left: 20, position: "absolute" }}>
        <Image
          source={require("./assets/menuIcon.svg")}
          style={{
            height: 30,
            width: 40,
          }}
        />
      </View>
      <View style={styles.viewStyle}>
        <Text style={{ fontSize: "30px", fontWeight: "bold" }}>
          USC Visitors Prototype
        </Text>
        <Text style={{ fontSize: "20px" }} onPress={handlePress}>
          David, Sarah, Morice
        </Text>
      </View>
      <View style={styles.homeImage}>
        <TouchableOpacity>
          <Image
            source={require("./assets/CurrentLocation.svg")}
            style={{
              height: 200,
              width: 200,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.viewStyle}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("This is a test.")}
        >
          <Text style={styles.buttonText}> Click Me </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  homeImage: {
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 15,
    margin: "1rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    borderRadius: "50%",
    overflow: "hidden",
    border: "solid 4px grey",
    backgroundColor: "white",
  },

  button: {
    backgroundColor: "maroon",
    padding: 15,
    borderRadius: 50,
  },

  buttonText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  viewStyle: {
    padding: 10,
    justifyContent: "center",
  },
});
