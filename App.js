import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, View, SafeAreaView } from "react-native";

export default function App() {
  const handlePress = () => console.log("I pressed it");
  console.log(require("./assets/icon.png"));
  return (
    <SafeAreaView style={styles.container}>
      <Text>USC Visitors App</Text>
      <Text onPress={handlePress}>David, Sarah, Morice</Text>
      <Image source={require("./assets/adaptive-icon.png")} />

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
});
