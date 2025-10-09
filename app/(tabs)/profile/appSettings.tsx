import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function AppSettings() {
  const [biometricEnabled, setBiometricEnabled] = useState(true);
  const [riba, setRiba] = useState(true);

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
            App Settings
          </Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.item}>
            <View style={styles.leftSection}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 14,
                  fontFamily: "ManropeMedium",
                }}
              >
                Language
              </Text>
            </View>
            <Text
              style={{
                color: "gray",
                fontSize: 12,
                fontFamily: "ManropeMedium",
              }}
            >
              English
            </Text>
          </TouchableOpacity>
          {/* Change PIN */}
          <TouchableOpacity style={styles.item}>
            <View style={styles.leftSection}>
              <Text style={styles.text}>Notfications</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#888" />
          </TouchableOpacity>

          {/* Enable Fingerprint / Face ID */}
          <View style={styles.item}>
            <View style={styles.leftSection}>
              <Text style={styles.text}>Enable DarkMode</Text>
            </View>
            <Switch
              value={biometricEnabled}
              onValueChange={setBiometricEnabled}
              thumbColor={biometricEnabled ? "#7C82E0" : "#666"}
              trackColor={{ false: "#333", true: "#444" }}
            />
          </View>
          <View style={styles.item}>
            <View style={styles.leftSection}>
              <Text style={styles.text}>Interest Disabled (Riba-Free)</Text>
            </View>
            <Switch
              value={riba}
              onValueChange={setRiba}
              thumbColor={riba ? "#7C82E0" : "#666"}
              trackColor={{ false: "#333", true: "#444" }}
            />
          </View>
          <TouchableOpacity style={styles.item}>
            <View style={styles.leftSection}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 14,
                  fontFamily: "ManropeMedium",
                }}
              >
                App Version
              </Text>
            </View>
            <Text
              style={{
                color: "gray",
                fontSize: 12,
                fontFamily: "ManropeMedium",
              }}
            >
              v1.0.5
            </Text>
          </TouchableOpacity>
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
