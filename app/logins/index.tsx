import { SafeAreaView, StyleSheet, Image, View } from "react-native";
import React from "react";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { useTheme } from "@/theme/ThemeProvider";

export default function LoginOption() {
  const router = useRouter();
  const { theme, isDark } = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/images/karrypay.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View
        style={{
          gap: 10,
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          title="QuickSend"
          gradientColors={["#FF6FFF", "#FF00FF", "#9B00FF"]}
          textColor="#fff"
          icon={require("../../assets/icons/scanwhite.png")}
          style={{ width: 350, height: 55 }}
        />

        <Button
          title="Get Started"
          backgroundColor="#F3F4F6"
          textColor="#333"
          onPress={() => router.push("/logins/facelogin" as any)}
          style={{ width: 350, height: 55 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // centers vertically
    alignItems: "center", // centers horizontally
    width: "100%",
    backgroundColor: "transparent",
    marginTop: 80,
    paddingVertical: 60,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 120, // 👈 push it upward by adding space below
  },
});
