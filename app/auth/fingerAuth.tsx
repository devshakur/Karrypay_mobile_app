import { StyleSheet, Text, View, Alert, Animated, Easing } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import * as LocalAuthentication from "expo-local-authentication";
import { useRouter } from "expo-router";
import { useTheme } from "@/theme/ThemeProvider";

export default function FingerAuth() {
  const router = useRouter();
  const { theme, isDark } = useTheme(); // ✅ get theme colors
  const [authenticated, setAuthenticated] = useState(false);
  const [scanning, setScanning] = useState(false);

  // animation value
  const slideAnim = useRef(new Animated.Value(200)).current;

  useEffect(() => {
    authenticate();
  }, []);

  useEffect(() => {
    if (authenticated) {
      setTimeout(() => {
        router.push("/auth/success" as any);
      }, 500);
    }
  }, [authenticated]);

  const authenticate = async () => {
    try {
      setScanning(true);
      slideUp();

      const compatible = await LocalAuthentication.hasHardwareAsync();
      if (!compatible) {
        Alert.alert("Error", "Your device does not support biometric auth.");
        slideDown();
        return;
      }

      const enrolled = await LocalAuthentication.isEnrolledAsync();
      if (!enrolled) {
        Alert.alert("Error", "No fingerprints or biometrics enrolled.");
        slideDown();
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Place your finger on the sensor",
        fallbackLabel: "Use passcode",
        disableDeviceFallback: false,
      });

      if (result.success) {
        setAuthenticated(true);
      } else {
        Alert.alert("Failed", "Authentication failed. Try again.");
        slideDown();
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Something went wrong.");
      slideDown();
    }
  };

  const slideUp = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 400,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(slideAnim, {
      toValue: 200,
      duration: 400,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(() => setScanning(false));
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View
        style={{
          width: "80%",
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Entypo
          onPress={() => router.back()}
          name="chevron-left"
          size={28}
          color={theme.colors.text}
        />
        <Text style={[styles.header, { color: theme.colors.text }]}>
          Fingerprint Verification
        </Text>
      </View>

      <Text style={[{ paddingVertical: 60, color: theme.colors.text }]}>
        {authenticated
          ? "Verified successfully"
          : "Hold finger sensor to verify."}
      </Text>

      <View style={styles.content}>
        <View
          style={{
            height: 241,
            width: 246,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 123,
            backgroundColor: theme.colors.card,
          }}
        >
          <FontAwesome5
            name="fingerprint"
            size={160}
            color={authenticated && isDark ? theme.colors.text : "#737070ff"}
            onPress={authenticate}
          />
        </View>
      </View>

      {scanning && (
        <Animated.View
          style={[
            styles.progressContainer,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <Text style={[styles.progressText, { color: theme.colors.text }]}>
            {authenticated ? "100" : "0"}%
          </Text>
          <Text style={[styles.verifyingText, { color: theme.colors.text }]}>
            {authenticated ? "Completed" : "Verifying..."}
          </Text>
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 16,
    fontFamily: "ManropeSemiBold",
  },
  content: {
    flex: 1,
    paddingVertical: 80,
    alignItems: "center",
  },
  progressContainer: {
    position: "absolute",
    bottom: 80,
    alignSelf: "center",
    alignItems: "center",
    zIndex: 3,
    padding: 12,
    borderRadius: 12,
  },
  progressText: {
    fontSize: 36,
    fontFamily: "ManropeMedium",
  },
  verifyingText: {
    fontSize: 16,
    fontFamily: "ManropeRegular",
    marginTop: 6,
  },
});
