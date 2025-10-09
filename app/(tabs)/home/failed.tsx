import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Button from "@/components/Button";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useTheme } from "@/theme/ThemeProvider";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "@/components/screens/ui/buttons/PrimaryButton";

export default function Failed() {
  const router = useRouter();
  const { theme, isDark } = useTheme();
  const { width } = Dimensions.get("window");

  // ✅ grab params passed from router.push
  const { title, message, retryPath } = useLocalSearchParams<{
    title?: string;
    message?: string;
    retryPath?: any;
  }>();

  const handleRetry = () => {
    if (retryPath) {
      router.push(retryPath); // go back to retry screen
    } else {
      router.back(); // fallback: just go back
    }
  };

  return (
    <LinearGradient
      colors={["#241036", "#13031a", "#241036"]}
      locations={[0, 0.45, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={[styles.container]}>
        {/* Centered content */}
        <View style={styles.content}>
          <View
            style={[
              styles.iconWrapper,
              {
                backgroundColor: isDark
                  ? theme.colors.primary + "20"
                  : "#FEE2E2",
              },
            ]}
          >
            <Entypo
              name="cross"
              size={32}
              color={isDark ? theme.colors.primary : "red"}
            />
          </View>

          {/* Use params if provided, fallback to defaults */}
          <Text style={[styles.title, { color: theme.colors.text }]}>
            {title || "Transfer Failed"}
          </Text>
          <Text style={[styles.subtitle, { color: theme.colors.text }]}>
            {message ||
              "Something went wrong while processing your transfer. Please try again or check your network connection."}
          </Text>
        </View>

        {/* Bottom section */}
        <View style={styles.footer}>
          <PrimaryButton
            title="Try Again"
            style={{ height: width < 400 ? 55 : 70 }}
            onPress={handleRetry}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  content: {
    flex: 1,
    marginTop: "30%",
    alignItems: "center",
  },
  iconWrapper: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    marginTop: -15,
    fontFamily: "ManropeMedium",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "ManropeMedium",
    textAlign: "center",
    marginTop: 20,
  },
  footer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
