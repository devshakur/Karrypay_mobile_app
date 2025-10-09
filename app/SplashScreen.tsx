import { Image, StatusBar, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Android nav bar
    NavigationBar.setBackgroundColorAsync("green");
    NavigationBar.setVisibilityAsync("hidden");

    StatusBar.setHidden(true, "fade");

    // Move to onboarding after 3 seconds
    const timer = setTimeout(() => {
      router.replace("/onboarding");
    }, 1000);

    return () => {
      StatusBar.setHidden(false, "fade");
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Welcome Screen.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E358F",
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
});
