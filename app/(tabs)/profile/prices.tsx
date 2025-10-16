import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Tier1 = [
  { label: "Maximum account limit", value: "N300,000" },
  { label: "Maximum transaction limit", value: "N50,000" },
  { label: "Card limit per transaction", value: "N50,000" },
  { label: "Card balance limit", value: "N50,000" },
];
const Tier2 = [
  { label: "Maximum account limit", value: "N100,000,000" },
  { label: "Maximum transaction limit", value: "N500,000" },
  { label: "Card limit per transaction", value: "N50,000" },
  { label: "Card balance limit", value: "N50,000" },
];
const Tier3 = [
  { label: "Maximum account limit", value: "N5,000,000" },
  { label: "Maximum transaction limit", value: "N1,000,000" },
  { label: "Card limit per transaction", value: "N50,000" },
  { label: "Card balance limit", value: "N50,000" },
];
export default function Prices() {
  const router = useRouter();
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
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            paddingVertical: 20,
            marginTop: 20,
          }}
        >
          <View
            style={{
              padding: 15,
              backgroundColor: "#333",
              borderRadius: 20,
              margin: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "ManropeSemiBold",
                fontSize: 20,
                color: "#fff",
                marginBottom: 10,
              }}
            >
              Tier 1 Limit
            </Text>
            {Tier1.map((limit) => (
              <View key={limit.label} style={styles.limitRow}>
                <Text style={styles.text1}>{limit.label}</Text>
                <Text style={styles.text2}>{limit.value}</Text>
              </View>
            ))}
          </View>
          <View
            style={{
              padding: 15,
              backgroundColor: "#333",
              borderRadius: 20,
              margin: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "ManropeSemiBold",
                fontSize: 20,
                color: "#fff",
                marginBottom: 10,
              }}
            >
              Tier 2 Limit
            </Text>
            {Tier2.map((limit) => (
              <View key={limit.label} style={styles.limitRow}>
                <Text style={styles.text1}>{limit.label}</Text>
                <Text style={styles.text2}>{limit.value}</Text>
              </View>
            ))}
          </View>
          <View
            style={{
              padding: 15,
              backgroundColor: "#333",
              borderRadius: 20,
              margin: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "ManropeSemiBold",
                fontSize: 20,
                color: "#fff",
                marginBottom: 10,
              }}
            >
              Tier 3 Limit
            </Text>
            {Tier3.map((limit) => (
              <View key={limit.label} style={styles.limitRow}>
                <Text style={styles.text1}>{limit.label}</Text>
                <Text style={styles.text2}>{limit.value}</Text>
              </View>
            ))}
          </View>
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
});
