import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import CustomButton from "@/components/customButton";

export default function KycSubmitted() {
  const router = useRouter();

  const steps = [
    {
      id: 1,
      label: "Personal Information",
      active: true,
    },
    {
      id: 2,
      label: "Verify Your ID",
      active: true,
    },
    {
      id: 3,
      label: "Selfie Verification",
      active: true,
    },
  ];

  return (
    <LinearGradient
      colors={["#1F1F1F", "#1F1F1F", "#1F1F1F"]}
      locations={[0, 0.45, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, padding: 10 }}
    >
      <SafeAreaView>
        {/* Header */}
        <TouchableOpacity style={{ alignSelf: "flex-end" }}>
          <Text style={[styles.skipText, { color: "blue" }]}>Done</Text>
        </TouchableOpacity>

        {/* Clock Icon Section */}
        <View style={styles.iconContainer}>
          <View style={styles.clockCircle}>
            <Ionicons name="time-outline" size={32} color="#F59E0B" />
          </View>
          <Text style={styles.statusTitle}>Submitted</Text>
          <Text style={styles.statusDesc}>
            We’ve received your details and documents. Our team is reviewing
            them, and verification will be completed within 24 hours.
          </Text>
        </View>

        {/* Progress Steps */}
        <View style={styles.stepsContainer}>
          {steps.map((step, index) => (
            <View key={step.id} style={styles.stepRow}>
              <View style={styles.iconColumn}>
                <View style={[styles.circle, { backgroundColor: "#F59E0B" }]} />
                {index !== steps.length - 1 && (
                  <View
                    style={[
                      styles.line,
                      { backgroundColor: "#F59E0B", height: 90 },
                    ]}
                  />
                )}
              </View>
              <Text style={styles.stepLabel}>{step.label}</Text>
            </View>
          ))}
        </View>

        {/* Button */}
        <View style={{ padding: 10, marginTop: 40 }}>
          <CustomButton
            title="Back to Dashboard"
            style={{ height: 55 }}
            onPress={() => router.push("/(tabs)/home")}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 18,
  },
  skipText: {
    width: "100%",
    fontFamily: "ManropeSemiBold",
    fontSize: 16,
    textAlign: "center",
  },
  iconContainer: {
    alignItems: "center",
    marginTop: 40,
    paddingHorizontal: 20,
  },
  clockCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(245,158,11,0.15)",
    justifyContent: "center",
    alignItems: "center",
  },
  statusTitle: {
    fontSize: 22,
    fontFamily: "ManropeSemiBold",
    color: "#fff",
    marginTop: 20,
  },
  statusDesc: {
    color: "#fff",
    opacity: 0.8,
    textAlign: "center",
    fontFamily: "ManropeMedium",
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
  },
  stepsContainer: {
    marginTop: 50,
    alignSelf: "flex-start",
    paddingLeft: 10,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconColumn: {
    alignItems: "center",
    marginRight: 12,
  },
  circle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#F59E0B",
    zIndex: 2,
  },
  line: {
    width: 3,
    borderRadius: 2,
    marginTop: -1,
  },
  stepLabel: {
    fontSize: 16,
    fontFamily: "ManropeMedium",
    color: "#fff",
    marginTop: -3,
  },
});
