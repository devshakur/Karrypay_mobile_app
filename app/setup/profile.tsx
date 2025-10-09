import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import Button from "@/components/Button";
import { useTheme } from "@/theme/ThemeProvider";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "@/components/screens/ui/buttons/PrimaryButton";

export default function Profile() {
  const router = useRouter();
  const { theme, isDark } = useTheme();
  const { colors } = theme;

  const { width } = useWindowDimensions();
  const isLarge = width >= 1024;
  const isMedium = width >= 768 && width < 1024;

  const contentWidth = isLarge ? "50%" : isMedium ? "70%" : "100%";

  return (
    <LinearGradient
      colors={["#241036", "#13031a", "#241036"]} // ✅ gradient background
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
              color={colors.text}
            />
            <Text style={[styles.skipText, { color: colors.primary }]}>
              Skip for Now
            </Text>
          </View>

          {/* Title */}
          <View style={styles.titleWrapper}>
            <Text style={[styles.title, { color: "#fff" }]}>
              Let’s Get to Know You
            </Text>
            <Text style={[styles.subtitle, { color: "rgba(255,255,255,0.7)" }]}>
              Tell us a bit about yourself to set up your profile.
            </Text>
          </View>

          {/* Input Stack */}
          <View style={[styles.inputWrapper, { width: contentWidth }]}>
            {/* Full Name */}
            <View style={styles.inputGroup}>
              <Text style={[styles.label, { color: "#fff" }]}>Full Name</Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(0,0,0,0.05)", // ✅ translucent overlay
                    color: "#fff",
                  },
                ]}
                placeholder="Enter your full name"
                placeholderTextColor="rgba(255,255,255,0.5)"
              />
            </View>

            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={[styles.label, { color: "#fff" }]}>Email</Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(0,0,0,0.05)",
                    color: "#fff",
                  },
                ]}
                placeholder="Enter your email address"
                keyboardType="email-address"
                placeholderTextColor="rgba(255,255,255,0.5)"
              />
            </View>

            {/* Date of Birth */}
            <View style={styles.inputGroup}>
              <Text style={[styles.label, { color: "#fff" }]}>
                Date of Birth
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(0,0,0,0.05)",
                    color: "#fff",
                  },
                ]}
                placeholder="MM/DD/YYYY"
                keyboardType="numeric"
                placeholderTextColor="rgba(255,255,255,0.5)"
              />
            </View>
          </View>

          {/* Continue Button */}
          <View style={styles.footer}>
            <PrimaryButton
              title="Continue"
              onPress={() => router.push("/setup/bvnVerify" as any)}
              style={{ width: contentWidth, height: 55 }}
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
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  skipText: {
    fontFamily: "ManropeSemiBold",
    fontWeight: "600",
    fontSize: 16,
  },
  titleWrapper: {
    marginTop: 25,
  },
  title: {
    fontFamily: "ManropeSemiBold",
    fontSize: 24,
  },
  subtitle: {
    fontFamily: "ManropeMedium",
    fontSize: 14,
    marginTop: 8,
  },
  inputWrapper: {
    marginTop: 35,
    alignSelf: "center",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    fontFamily: "ManropeMedium",
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "rgba(96, 43, 81, 0.5)",
    fontWeight: "500",
    fontFamily: "ManropeRegular",
  },
  footer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 39,
    flex: 1,
  },
});
