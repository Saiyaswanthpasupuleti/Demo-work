import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as React from "react";
import { Image } from "expo-image";

const Logo = require("./assets/color.png");

export default function App() {
  return (
    <SafeAreaProvider>
      <Appbar.Header style={styles.container}>
        <Image style={styles.logo} source={Logo} contentFit="contain" />
        <Appbar.Content title="Presence" />
        <Appbar.Action
          icon="magnify"
          style={{
            padding: 0,
            margin: 0,
          }}
        />
      </Appbar.Header>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  logo: {
    // backgroundColor:"white"
    width: 35,
    height: 35,

    // borderColor: "red",
    // borderWidth: 3
  },
});
