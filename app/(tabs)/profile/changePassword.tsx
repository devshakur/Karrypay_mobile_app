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
import { useTheme } from "@/theme/ThemeProvider";
import Button from "@/components/Button";
import OTPInput from "@/components/OtpInput";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "@/components/screens/ui/buttons/PrimaryButton";

const { width } = Dimensions.get("window");

export default function ChangePassword() {
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
              color="#FFFFFF"
            />
          </View>

          {/* Title */}
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Change Your Login Password</Text>
            <Text style={styles.subtitle}>
              Secure your account with a strong password.
            </Text>
          </View>

          {/* Input Stack */}
          <View style={styles.inputWrapper}>
            {/* Create Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Enter Current Password</Text>
              <View style={styles.otpWrapper}>
                <OTPInput length={6} style={styles.otpInput} secureTextEntry />
              </View>
            </View>

            {/* Confirm Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Enter New Password</Text>
              <View style={styles.otpWrapper}>
                <OTPInput length={6} style={styles.otpInput} secureTextEntry />
              </View>
            </View>
            {/* Confirm Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirm New Password</Text>
              <View style={styles.otpWrapper}>
                <OTPInput length={6} style={styles.otpInput} secureTextEntry />
              </View>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <PrimaryButton
              title="Verify & Continue"
              onPress={() => router.push("/(tabs)/home")}
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
    paddingVertical: 10,
  },
  titleWrapper: {
    marginTop: 30,
  },
  title: {
    fontFamily: "ManropeSemiBold",
    fontSize: width > 400 ? 26 : 22,
    color: "#FFFFFF",
  },
  subtitle: {
    fontFamily: "ManropeMedium",
    fontSize: width > 400 ? 16 : 14,
    marginTop: 8,
    color: "rgba(255,255,255,0.7)",
  },
  inputWrapper: {
    marginTop: 35,
  },
  inputGroup: {
    marginBottom: 25,
  },
  label: {
    fontSize: width > 400 ? 16 : 14,
    marginBottom: 10,
    fontFamily: "ManropeMedium",
    color: "#FFFFFF",
  },
  otpWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  otpInput: {
    backgroundColor: "rgba(255,255,255,0.1)", // translucent for glass effect
    borderRadius: 10,
  },
  footer: {
    flex: 1,
    marginBottom: 39,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
