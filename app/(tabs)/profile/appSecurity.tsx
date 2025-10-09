import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function AppSecurity() {
  const [biometricEnabled, setBiometricEnabled] = useState(false);

  const router = useRouter();
  return (
    <LinearGradient
      colors={["#1F1F1F", "#1F1F1F"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, padding: 10, marginTop: 5 }}>
        <View style={styles.header}>
          <Ionicons
            onPress={() => router.back()}
            name="chevron-back"
            size={24}
            color="white"
          />
          <Text style={[styles.skipText, { color: "white" }]}>
            Account Security
          </Text>
        </View>
        <View style={styles.container}>
          {/* Change PIN */}
          <TouchableOpacity
            onPress={() => router.push("/profile/changePin")}
            style={styles.item}
          >
            <View style={styles.leftSection}>
              <Ionicons name="key-outline" size={20} color="#fff" />
              <Text style={styles.text}>Change PIN</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#888" />
          </TouchableOpacity>

          {/* Change Password */}
          <TouchableOpacity
            onPress={() => router.push("/profile/changePassword")}
            style={styles.item}
          >
            <View style={styles.leftSection}>
              <Ionicons name="lock-closed-outline" size={20} color="#fff" />
              <Text style={styles.text}>Change Password</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#888" />
          </TouchableOpacity>

          {/* Enable Fingerprint / Face ID */}
          <View style={styles.item}>
            <View style={styles.leftSection}>
              <Ionicons name="finger-print-outline" size={20} color="#fff" />
              <Text style={styles.text}>Enable Fingerprint / Face ID</Text>
            </View>
            <Switch
              value={biometricEnabled}
              onValueChange={setBiometricEnabled}
              thumbColor={biometricEnabled ? "#7C82E0" : "#666"}
              trackColor={{ false: "#333", true: "#444" }}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  skipText: {
    width: "100%",
    fontFamily: "ManropeSemiBold",
    fontSize: 16,
    textAlign: "center",
  },
  container: {
    backgroundColor: "#2A2A2A",
    borderRadius: 16,
    paddingVertical: 10,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "ManropeMedium",
  },
});
