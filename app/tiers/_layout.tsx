import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "@/components/customButton";
import { useRouter } from "expo-router";
import TierLevel from "./index";
import PrimaryButton from "@/components/screens/ui/buttons/PrimaryButton";

export default function TierLayout() {
  const router = useRouter();
  const [tier, setTier] = useState(1);

  const buttonText =
    tier === 1
      ? "Upgrade to Tier 3"
      : tier === 3
      ? "Upgrade to Tier 4"
      : "You're on the highest tier";

  const handleUpgrade = () => {
    if (tier === 1) setTier(3);
    else if (tier === 3) setTier(4);
  };

  return (
    <LinearGradient
      colors={["#1F1F1F", "#1F1F1F", "#1F1F1F"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons
            name="chevron-back"
            size={24}
            color="#fff"
            onPress={() => router.back()}
          />
          <Text style={styles.headerTitle}>Verify Your Identity</Text>
        </View>

        {/* Scrollable Tier Info */}
        <ScrollView
          style={styles.contentContainer}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <TierLevel tier={tier} buttonText={buttonText} />
        </ScrollView>

        {/* Fixed Bottom Button */}
        <View style={styles.bottomButton}>
          <CustomButton
            style={{ height: 55, marginBottom: 10 }}
            title={buttonText}
            onPress={handleUpgrade}
            disabled={tier === 4}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "ManropeSemiBold",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  bottomButton: {
    position: "absolute",
    bottom: 20,
    left: 15,
    right: 15,
  },
});
