import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TierLevel({ tier }: { tier: number }) {
  const tier1 = {
    title: "Tier 1 Limit",
    limits: [
      { label: "Maximum account limit", value: "N300,000" },
      { label: "Maximum transaction limit", value: "N500,000" },
      { label: "Card limit per transaction", value: "N50,000" },
      { label: "Card balance limit", value: "N50,000" },
    ],
    features: [
      "Phone Number",
      "Date of Birth",
      "State",
      "Street",
      "City",
      "BVN",
    ],
  };

  const tier3 = {
    title: "Tier 3 Limit",
    limits: [
      { label: "Maximum account limit", value: "N1,000,000" },
      { label: "Maximum transaction limit", value: "N2,000,000" },
      { label: "Card limit per transaction", value: "N200,000" },
      { label: "Card balance limit", value: "N200,000" },
    ],
    features: ["Personal Information", "User Identity (NIN)", "Phone Number"],
  };

  const tier4 = {
    title: "Tier 4 Limit",
    limits: [
      { label: "Maximum account limit", value: "N5,000,000" },
      { label: "Maximum transaction limit", value: "N10,000,000" },
      { label: "Card limit per transaction", value: "N500,000" },
      { label: "Card balance limit", value: "N1,000,000" },
    ],
    features: [
      "Personal Information",
      "User Identity (NIN)",
      "Address",
      "Phone Number",
    ],
  };

  const currentTier = tier === 1 ? tier1 : tier === 3 ? tier3 : tier4;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{currentTier.title}</Text>

        {/* Limits */}
        <View style={{ paddingVertical: 10 }}>
          {currentTier.limits.map((limit) => (
            <View key={limit.label} style={styles.limitRow}>
              <Text style={styles.text1}>{limit.label}</Text>
              <Text style={styles.text2}>{limit.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        {/* Features */}
        {currentTier.features.map((item) => (
          <View key={item}>
            <View style={styles.featureRow}>
              <Text style={[styles.text1, { color: "#fff" }]}>{item}</Text>
              <View style={styles.verifiedTag}>
                <Text style={{ color: "#fff" }}>✅ Verified</Text>
              </View>
            </View>
            <View style={styles.miniDivider} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 2,
    flex: 1,
  },
  card: {
    backgroundColor: "#333",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  cardTitle: {
    marginTop: 10,
    color: "#fff",
    fontSize: 18,
    fontFamily: "ManropeSemiBold",
  },
  limitRow: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  text1: {
    color: "#fff",
    fontFamily: "ManropeRegular",
    fontSize: 14,
  },
  text2: {
    color: "#fff",
    fontFamily: "ManropeRegular",

    fontSize: 14,
  },
  divider: {
    borderTopWidth: 0.4,
    marginTop: 10,
    marginBottom: 20,
    borderColor: "gray",
  },
  featureRow: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",
  },
  verifiedTag: {
    borderWidth: 0.5,
    borderColor: "gray",
    padding: 5,
    borderRadius: 15,
  },
  miniDivider: {
    borderTopWidth: 0.3,
    borderColor: "gray",
    marginTop: 10,
    marginBottom: 30,
  },
});
