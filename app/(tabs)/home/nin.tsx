import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "@/components/customButton";

export default function Nin() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#1F1F1F", "#1F1F1F", "#1F1F1F"]}
      locations={[0, 0.45, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          {/* Header */}
          <View style={styles.header}>
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="#fff"
            />
            <Text style={[styles.skipText, { color: "#fff" }]}>NIN Entry</Text>
          </View>

          {/* Description */}
          <View style={{ padding: 15 }}>
            <Text style={styles.title}>Enter Your NIN</Text>
            <Text style={styles.subtitle}>
              Provide your 11-digit National Identification Number to verify
              your identity.
            </Text>
          </View>

          {/* Input */}
          <View style={[styles.inputGroup, { marginTop: 15 }]}>
            <Text style={[styles.label, { color: "#fff" }]}>NIN Number</Text>
            <TextInput
              style={[styles.input, { backgroundColor: "#333333" }]}
              placeholder="Enter your NIN number"
              keyboardType="numeric"
              maxLength={11}
              placeholderTextColor="#5E5E5E"
            />
          </View>

          {/* Fixed bottom button */}
          <View style={styles.bottomContainer}>
            <CustomButton
              title="Continue"
              onPress={() => router.push("/tiers")}
              style={{ height: 55 }}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "90%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
  },
  skipText: {
    width: "100%",
    fontFamily: "ManropeSemiBold",
    fontSize: 14,
    textAlign: "center",
  },
  title: {
    fontFamily: "ManropeMedium",
    fontSize: 18,
    color: "#fff",
  },
  subtitle: {
    color: "#fff",
    marginTop: 7,
    fontSize: 14,
    fontFamily: "ManropeMedium",
  },
  inputGroup: {
    marginTop: 20,
    paddingHorizontal: 15,
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
    marginBottom: 12,
    color: "#fff",
  },
  bottomContainer: {
    padding: 15,
    marginTop: "auto",
  },
});
