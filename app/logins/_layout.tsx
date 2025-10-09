import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar as RNStatusBar,
} from "react-native";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <View style={styles.container}>
      {/* Background layer (behind everything) */}
      <ImageBackground
        source={require("@/assets/images/optionImg.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.bgOverlay} />
      </ImageBackground>

      {/* Foreground layer (app content & native modals render above this) */}
      <View style={styles.content}>
        {/* Make status bar translucent so modal can render under it.
            You can hide it as you like, but translucent + transparent background
            lets overlays be visible behind it. */}
        <RNStatusBar translucent backgroundColor="transparent" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
          }}
        >
          <Stack.Screen name="logins" />
          {/* add other screens */}
        </Stack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    ...StyleSheet.absoluteFillObject, // ensures image sits behind everything
  },
  bgOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#00000066", // the dim overlay behind your UI
  },
  content: {
    flex: 1,
  },
});
