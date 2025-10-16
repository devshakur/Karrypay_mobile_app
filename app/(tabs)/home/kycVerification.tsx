import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import CustomButton from "@/components/customButton";

export default function KycVerification() {
  const steps = [
    {
      id: 1,
      label: "Provide your personal information",
      desc: "Your legal name, date of birth, BVN, e.t.c",
      active: true,
    },
    {
      id: 2,
      label: "Verify Your ID",
      desc: "Upload your Passport, Voter’s Card, Driver’s License or Enter your NIN number",
      active: true,
    },
    {
      id: 3,
      label: "Take a Selfie",
      desc: "Complete your verification with a real-time selfie",
      active: true,
    },
  ];

  // Animated line height
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  useEffect(() => {
    // Animate the connecting line to grow
    Animated.timing(animatedHeight, {
      toValue: 100, // adjust to match your layout spacing
      duration: 1200,
      useNativeDriver: false,
    }).start();
  }, []);

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
        <View style={styles.header}>
          <Ionicons
            onPress={() => router.back()}
            name="chevron-back"
            size={24}
            color={"#fff"}
          />
          <Text style={[styles.skipText, { color: "#fff" }]}>
            KYC Verification
          </Text>
        </View>
        <View style={{ padding: 5, marginTop: 10 }}>
          <Text
            style={{
              fontFamily: "ManropeSemiBold",
              fontSize: 24,
              color: "#fff",
            }}
          >
            Let’s verify your identity
          </Text>
          <Text
            style={{
              color: "#fff",
              marginTop: 7,
              fontSize: 14,
              fontFamily: "ManropeMedium",
            }}
          >
            Please complete your KYC verification to continue using KarryPay.
            You’ll get verified within 24hrs.
          </Text>
        </View>
        <View style={styles.container}>
          {steps.map((step, index) => (
            <View key={step.id} style={styles.stepRow}>
              {/* Circle + line column */}
              <View style={styles.iconColumn}>
                {/* Circle */}
                <View style={[styles.circle, { backgroundColor: "#D1D5DB" }]} />

                {/* Line (only if not last item) */}
                {index !== steps.length - 1 && (
                  <Animated.View
                    style={[
                      styles.line,
                      {
                        height: animatedHeight,
                        backgroundColor: "#D1D5DB",
                      },
                    ]}
                  />
                )}
              </View>

              {/* Label */}
              <View style={{ marginTop: -3 }}>
                <Text
                  style={[
                    styles.label,
                    { color: step.active ? "#fff" : "#888" },
                  ]}
                >
                  {step.label}
                </Text>
                <Text
                  style={[
                    styles.labels,
                    { color: step.active ? "#fff" : "#888" },
                  ]}
                >
                  {step.desc}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View style={{ padding: 10, marginTop: 30 }}>
          <CustomButton
            title="Get Started"
            style={{ height: 55 }}
            onPress={() => router.push("/(tabs)/home/kycOne")}
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
  container: {
    paddingVertical: 28,
    paddingHorizontal: 4,
    alignSelf: "flex-start",
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
    borderColor: "#fff",
    zIndex: 2,
  },
  line: {
    width: 3,
    borderRadius: 2,
    marginTop: -1, // ensures it touches the circle perfectly
  },
  label: {
    fontSize: 16,
    fontFamily: "ManropeMedium",
    paddingTop: 2,
  },
  labels: {
    fontSize: 14,
    fontFamily: "ManropeMedium",
    paddingTop: 2,
  },
});
