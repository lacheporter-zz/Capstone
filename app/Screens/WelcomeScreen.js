import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.menuContainer}>
        <Image style={styles.menu} source={require("../assets/favicon.png")} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          USC Visitors APP
        </Text>
      </View>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/undrawPhoneMap.png")}
        />
        <Text>A new way to visit.</Text>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={{ color: "white" }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={{ color: "black" }}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  titleContainer: {
    position: "absolute",
    top: 170,
  },
  loginButton: {
    width: "50%",
    height: 50,
    backgroundColor: "maroon",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 200,
  },
  registerButton: {
    width: "50%",
    height: 50,
    backgroundColor: "lightgrey",
    borderRadius: 50,
    position: "absolute",
    bottom: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    bottom: 330,
    position: "absolute",
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
  },
  menuContainer: {
    top: 70,
    right: 20,
    position: "absolute",
    alignItems: "center",
  },
  menu: {
    width: 40,
    height: 40,
  },
});

export default WelcomeScreen;
