import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppHeader from "@/components/AppHeader";
import { useTheme } from "@/theme/ThemeProvider";
import * as NavigationBar from "expo-navigation-bar";
import Carousel from "@/components/Carousel";
import { BlurView } from "expo-blur";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

export default function Home() {
  const { theme } = useTheme();
  const [userTier, setUserTier] = useState("Tier1");

  const transactions = [
    {
      id: 1,
      name: "John Doe",
      type: "Transfer",
      amount: "₦2,500",
      time: "10:30 AM",
      icon: "transfer",
      color: "#4ADE80",
    },
    {
      id: 2,
      name: "Mary Jane",
      type: "Airtime",
      amount: "₦1,000",
      time: "Yesterday",
      icon: "airtime",
      color: "#FACC15",
    },
    {
      id: 3,
      name: "Peter Smith",
      type: "Transfer",
      amount: "₦7,200",
      time: "2 days ago",
      icon: "transfer",
      color: "#4ADE80",
    },
  ];

  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
    NavigationBar.setBehaviorAsync("inset-swipe");
  }, []);

  return (
    <LinearGradient
      colors={["#1F1F1F", "#1F1F1F"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: "3%",
            paddingTop: "10%",
            paddingBottom: 100, // so you can scroll past the last item
          }}
        >
          {/* Header */}
          <AppHeader />

          {/* Balance Card */}
          <BlurView intensity={100} tint="dark" style={styles.glassCard}>
            <View style={styles.innerCard}>
              <View style={styles.balanceRow}>
                <Text style={styles.balanceText}>₦5,000.00</Text>
                <View style={styles.eyeButton}>
                  <Ionicons name="eye-outline" size={20} color="#fff" />
                </View>
              </View>

              <View style={styles.actionsRow}>
                <TouchableOpacity
                  onPress={() => router.push("/(tabs)/home/sendMoney")}
                  style={styles.actionButton1}
                >
                  <LinearGradient
                    colors={["#000000", "#6B21A8"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={StyleSheet.absoluteFill}
                  />
                  <Feather name="send" size={20} color="#fff" />
                  <Text style={styles.actionText}>Send</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.actionButton,
                    { backgroundColor: "rgba(75,85,99,0.4)" },
                  ]}
                >
                  <Feather name="arrow-up" size={20} color="#fff" />
                  <Text style={styles.actionText}>Top Up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.actionButton,
                    { backgroundColor: "rgba(75,85,99,0.4)" },
                  ]}
                >
                  <MaterialCommunityIcons
                    name="view-grid-plus-outline"
                    size={20}
                    color="#fff"
                  />
                  <Text style={styles.actionText}>Bills</Text>
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>

          {/* Tier Notice */}
          {userTier === "Tier1" && (
            <TouchableOpacity
              onPress={() => router.push("/home/kycVerification")}
            >
              <View style={styles.tierNotice}>
                <View style={styles.tierLeft}>
                  <View style={styles.tierIcon}>
                    <FontAwesome name="bank" size={24} color="#92400E" />
                  </View>

                  <View>
                    <Text style={styles.tierTextMain}>
                      Get your wallet account complete
                    </Text>
                    <Text style={styles.tierTextSub}>Complete KYC</Text>
                  </View>
                </View>

                <Ionicons name="chevron-forward" size={24} color="#000" />
              </View>
            </TouchableOpacity>
          )}

          {/* Pay Bills */}
          <LinearGradient
            colors={["#000000", "#6B21A8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.payBillsCard}
          >
            <View>
              <Text style={styles.payTitle}>Pay Bills</Text>
              <Text style={styles.paySubtitle}>
                Pay all your bills in one place
              </Text>
            </View>
            <Image
              source={require("../../../assets/images/Bills.png")}
              style={{ width: 115, height: 115, resizeMode: "contain" }}
            />
          </LinearGradient>

          {/* Carousel */}
          <View style={{ marginTop: 6 }}>
            <Carousel total={3} current={2} />
          </View>

          {/* Transactions */}
          <BlurView intensity={40} tint="dark" style={styles.glassCard}>
            <View style={styles.innerCard}>
              <Text style={styles.transactionTitle}>Transaction History</Text>

              {transactions.map((tx) => (
                <View key={tx.id} style={styles.txRow}>
                  <View
                    style={[
                      styles.iconCircle,
                      { backgroundColor: "rgba(255,255,255,0.1)" },
                    ]}
                  >
                    {tx.icon === "transfer" ? (
                      <Feather name="arrow-up" size={24} color={tx.color} />
                    ) : (
                      <MaterialIcons
                        name="signal-cellular-alt"
                        size={24}
                        color={tx.color}
                      />
                    )}
                  </View>

                  <View style={styles.txInfo}>
                    <Text style={styles.txName}>{tx.name}</Text>
                    <Text style={styles.txType}>{tx.type}</Text>
                  </View>

                  <View style={styles.txAmount}>
                    <Text style={styles.amount}>{tx.amount}</Text>
                    <Text style={styles.time}>{tx.time}</Text>
                  </View>
                </View>
              ))}
            </View>
          </BlurView>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  glassCard: {
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 16,
  },
  innerCard: {
    backgroundColor: "rgba(255,255,255,0.09)",
    padding: 20,
  },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  balanceText: { fontSize: 30, fontFamily: "ManropeMedium", color: "#fff" },
  eyeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  actionButton1: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    overflow: "hidden",
  },
  actionText: { color: "#fff", fontSize: 14, fontFamily: "ManropeMedium" },

  tierNotice: {
    backgroundColor: "#FDE68A",
    padding: 12,
    width: "100%",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  tierLeft: { flexDirection: "row", alignItems: "center", gap: 10 },
  tierIcon: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: "#F59E0B",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  tierTextMain: {
    color: "#000",
    fontFamily: "ManropeMedium",
    fontSize: 14,
  },
  tierTextSub: {
    color: "#92400E",
    fontFamily: "ManropeMedium",
    fontSize: 13,
  },

  payBillsCard: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 16,
  },
  payTitle: { fontSize: 18, fontFamily: "ManropeSemiBold", color: "#fff" },
  paySubtitle: {
    fontSize: 14,
    fontFamily: "ManropeMedium",
    color: "rgba(255,255,255,0.7)",
  },
  transactionTitle: {
    fontSize: 16,
    fontFamily: "ManropeSemiBold",
    color: "#fff",
    marginBottom: 12,
  },
  txRow: { flexDirection: "row", alignItems: "center", marginBottom: 18 },
  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  txInfo: { flex: 1, marginLeft: 12 },
  txName: { fontSize: 15, fontFamily: "ManropeMedium", color: "#fff" },
  txType: {
    fontSize: 13,
    fontFamily: "ManropeRegular",
    color: "rgba(255,255,255,0.7)",
  },
  txAmount: { alignItems: "flex-end" },
  amount: { fontSize: 15, fontFamily: "ManropeMedium", color: "#fff" },
  time: {
    fontSize: 12,
    fontFamily: "ManropeRegular",
    color: "rgba(255,255,255,0.7)",
  },
});
