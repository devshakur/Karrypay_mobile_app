import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import OTPInput from "@/components/OtpInput";
import { useTheme } from "@/theme/ThemeProvider";
export default function Otp() {
  const router = useRouter();
  const { theme } = useTheme();
  const handleComplete = (code: string) => {
    router.push("/auth/biometricOption");
  };

  return (
    <LinearGradient
      colors={["#000000", "#13031a", "#241036"]}
      locations={[0, 0.45, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ flex: 1, padding: 15 }}>
            {/* Header */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <Ionicons
                onPress={() => router.back()}
                name="chevron-back"
                size={24}
                color={theme.colors.text}
              />
            </View>

            <View style={{ paddingHorizontal: 5, marginTop: 30 }}>
              <Text
                style={{
                  color: theme.colors.text,
                  fontFamily: "ManropeSemiBold",
                  fontWeight: "600",
                  fontSize: 24,
                }}
              >
                OTP Code
              </Text>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  fontFamily: "ManropeMedium",
                  color: theme.colors.text,
                }}
              >
                We just sent code to +234 XXXX 5021. Enter the code.
              </Text>
            </View>

            <View style={styles.otpContainer}>
              <OTPInput onComplete={handleComplete} />
            </View>

            <Text
              style={{
                marginTop: 10,
                fontSize: 14,
                fontFamily: "ManropeMedium",
                color: theme.colors.primary,
              }}
            >
              Didn’t receive, resend
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  otpContainer: {
    marginTop: 20,
  },
});
