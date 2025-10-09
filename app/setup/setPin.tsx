import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

import Button from "@/components/Button";
import OTPInput from "@/components/OtpInput";
import { useTheme } from "@/theme/ThemeProvider";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "@/components/screens/ui/buttons/PrimaryButton";
const { width } = Dimensions.get("window");

export default function SetPin() {
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const { theme } = useTheme();

  return (
    <LinearGradient
      colors={["#241036", "#13031a", "#241036"]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* Header */}
          <View style={styles.header}>
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color={theme.colors.text}
            />
          </View>

          {/* Title */}
          <View style={{ marginTop: 25, paddingHorizontal: 15 }}>
            <Text style={[styles.title, { color: theme.colors.text }]}>
              Add Your 4-Digit Transfer PIN
            </Text>
            <Text style={[styles.subtitle, { color: theme.colors.text }]}>
              This PIN helps you authorize transactions safely.
            </Text>
          </View>

          {/* Input Stack */}
          <View style={{ padding: 13, marginTop: 10 }}>
            {/* Create Pin */}
            <View style={styles.inputGroup}>
              <View style={styles.otpWrapper}>
                <Text style={[styles.labels, { color: theme.colors.text }]}>
                  Create PIN
                </Text>
                <OTPInput length={4} />
              </View>
            </View>

            {/* Confirm Pin */}
            <View style={styles.inputGroup}>
              <View style={styles.otpWrapper}>
                <Text style={[styles.labels, { color: theme.colors.text }]}>
                  Confirm PIN
                </Text>
                <OTPInput
                  length={4}
                  onComplete={() => router.push("/setup/welcome")}
                />
              </View>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <PrimaryButton
              title="Verify & Continue"
              style={{ width: width > 400 ? 360 : "90%", height: 55 }}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    gap: 10,
  },
  title: {
    fontFamily: "ManropeSemiBold",
    fontSize: width > 400 ? 26 : 22,
  },
  subtitle: {
    fontFamily: "ManropeMedium",
    fontSize: width > 400 ? 16 : 14,
    marginTop: 8,
    marginBottom: 60,
  },
  inputGroup: {
    marginBottom: 25,
    marginTop: 10,
    alignItems: width > 400 ? "center" : "flex-start", // ✅ label + input move together
  },

  labels: {
    fontSize: width > 400 ? 16 : 14,
    marginBottom: 10,
    fontFamily: "ManropeMedium",
    textAlign: "center",
  },
  otpWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  footer: {
    flex: 1,
    marginBottom: 39,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
