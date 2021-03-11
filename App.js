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
  console.log(require("./assets/icon.png"));
  return (
    <SafeAreaView style={styles.container}>
      <Text>USC Visitors App</Text>
      <Text onPress={handlePress}>David, Sarah, Morice</Text>
      <TouchableOpacity
        onPress={() => console.log("hello")}
        style={styles.homeImage}
      >
        <Image
          source={require("./assets/undrawMap.png")}
          style={{
            height: 200,
            width: 200,
          }}
        />
      </TouchableOpacity>
      <Button
        color="maroon"
        style={styles.button}
        title="click me"
        onPress={() => Alert.alert("Let's Get Started")}
      />

      <StatusBar style="auto" />
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
    shadowOpacity: 0.3,
    shadowRadius: 10,
    margin: "1rem",
    padding: "1rem",
  },
});
