import {
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
  Modal,
  Image,
  View,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useTheme } from "@/theme/ThemeProvider";
import Button from "@/components/Button";
import BottomModal from "@/components/modals/BottomModal";
import { LinearGradient } from "expo-linear-gradient";

export default function CableTv() {
  const router = useRouter();
  const { theme, isDark } = useTheme();
  const { width } = Dimensions.get("window");
  const { colors } = theme;

  const [amount, setAmount] = useState("All");
  const [showBillerModal, setShowBillerModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState("");

  const [smartCardNumber, setSmartCardNumber] = useState("");
  const [selectedBiller, setSelectedBiller] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [showPlans, setShowPlans] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const popularBillers = [
    { name: "Dstv", logo: require("@/assets/images/banks/access.png") },
    { name: "Gotv", logo: require("@/assets/images/banks/firstbank.png") },
    {
      name: "Startimes",
      logo: require("@/assets/images/banks/moniepoint.png"),
    },
    { name: "Primetv", logo: require("@/assets/images/banks/opay.png") },
    { name: "Amazontv", logo: require("@/assets/images/banks/firstbank.png") },
  ];

  const quickAmounts = ["All", "Hot Offers", "Premium"];

  const billers = [
    "ArewaFlix",
    "Amazontv",
    "Dstv",
    "Gotv",
    "Startimes",
    "Primetv",
    "NextFlix",
  ];

  const plans = [
    { id: "1", name: "Basic Plan", price: "₦1,000", description: "1 Month" },
    {
      id: "2",
      name: "Standard Plan",
      price: "₦3,000",
      description: "3 Months",
    },
    {
      id: "3",
      name: "Premium Plan",
      price: "₦10,000",
      description: "12 Months",
    },
  ];

  const transactions = [
    { id: 1, name: "Dstv Compact", days: "2", amount: "₦7,000" },
    { id: 2, name: "Gotv Smallie", days: "1", amount: "₦2,500" },
    { id: 3, name: "Startimes Basic", days: "1", amount: "₦1,500" },
    { id: 4, name: "Dstv Premium", days: "29", amount: "₦15,000" },
  ];

  const groupedBillers = billers.reduce((acc, biller) => {
    const letter = biller.charAt(0).toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(biller);
    return acc;
  }, {} as Record<string, string[]>);

  const handleBillerSelect = (biller: string) => {
    setSelectedBiller(biller);
    setSelectedPlan(""); // reset plan when biller changes
    setShowBillerModal(false);
  };

  const makePayment = () => {
    setIsOpen(false);
    router.push("/(tabs)/home/cableSuccess");
  };

  return (
    <LinearGradient
      colors={["#241036", "#13031a", "#241036"]}
      locations={[0, 0.45, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView
        style={[
          styles.container,
          { paddingHorizontal: width < 470 ? 15 : 20 },
          { backgroundColor: colors.background },
        ]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color={colors.text}
            />
            <Text style={[styles.skipText, { color: colors.primary }]}>
              Cable TV
            </Text>
          </View>

          {/* Biller Provider */}
          <View style={[styles.inputGroup, { marginTop: 15 }]}>
            <Text style={[styles.label, { color: colors.text }]}>
              Biller Provider
            </Text>
            <TouchableOpacity
              style={[styles.inputButton, { backgroundColor: "#333" }]}
              onPress={() => setShowBillerModal(true)}
            >
              <Text style={{ color: selectedBiller ? colors.text : "#888" }}>
                {selectedBiller || "Select Biller"}
              </Text>
              <Ionicons name="chevron-down" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Plan */}
          <View style={[styles.inputGroup, { marginTop: 15 }]}>
            <Text style={[styles.label, { color: colors.text }]}>Plan</Text>
            <TouchableOpacity
              style={[styles.inputButton, { backgroundColor: "#333" }]}
              disabled={!selectedBiller}
              onPress={() => setShowPlans(true)} // ✅ open modal
            >
              <Text style={{ color: selectedPlan ? colors.text : "#888" }}>
                {selectedPlan?.name || "Select Plan"}
              </Text>
              <Ionicons name="chevron-down" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Smart Card Number */}
          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: "#fff" }]}>
              Smart Card Number
            </Text>
            <TextInput
              style={[styles.input, { backgroundColor: "#333333" }]}
              placeholder="0000-0000-0000-0000"
              keyboardType="numeric"
              value={smartCardNumber}
              onChangeText={setSmartCardNumber}
              placeholderTextColor="#5E5E5E"
            />
          </View>

          {/* Amount */}
          <View style={styles.section}>
            <View style={styles.inputRow}>
              <View style={styles.currencyBox}>
                <Text style={styles.currencyText}>NGN</Text>
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="0.00"
                placeholderTextColor="#777"
                keyboardType="numeric"
                value={price}
                onChangeText={setPrice}
              />
            </View>
          </View>

          {/* Next Button */}
          <View style={{ marginTop: 60 }}>
            <Button
              title="Next"
              style={{
                height: 50,
                backgroundColor: price ? "#241036" : "#E6E7FA",
              }}
              onPress={() => setIsOpen(true)}
              disabled={!price}
            />
          </View>

          {/* Quick Filters */}
          <View style={styles.quickButtonsRow}>
            {quickAmounts.map((amt) => (
              <TouchableOpacity
                key={amt}
                style={[
                  styles.quickButton,
                  amount === amt && styles.quickButtonActive,
                ]}
                onPress={() => setAmount(amt)}
              >
                <Text
                  style={[
                    styles.quickButtonText,
                    amount === amt && styles.quickButtonTextActive,
                  ]}
                >
                  {amt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Recent Transactions */}
          <LinearGradient
            colors={["#1A1A1A", "#3C1361", "#7E22"]} // charcoal → purple gradient
            start={{ x: 0, y: 0 }} // top-left
            end={{ x: 1, y: 0 }} // bottom-right
            style={styles.card}
          >
            {/* <View
            style={[
              styles.card,
              { backgroundColor: isDark ? "#2A2A2A" : "#F9FAFB" },
            ]}
          > */}
            {transactions.map((tx) => (
              <View key={tx.id} style={styles.txRow}>
                <View
                  style={[
                    styles.iconCircle,
                    { backgroundColor: isDark ? "#3A3A3A" : "#F3F4F6" },
                  ]}
                >
                  <Image
                    source={require("@/assets/images/banks/mtn.png")}
                    style={{ width: 44, height: 44 }}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.txInfo}>
                  <Text style={[styles.txName, { color: "#FFFFFF" }]}>
                    {tx.name}
                  </Text>
                  <Text
                    style={[
                      styles.txType,
                      { color: isDark ? "#A1A1AA" : "#6B7280" },
                    ]}
                  >
                    {tx.days} Days
                  </Text>
                </View>
                <View style={styles.txAmount}>
                  <Text style={[styles.amount, { color: "#FFFFFF" }]}>
                    {tx.amount}
                  </Text>
                </View>
              </View>
            ))}
            {/* </View> */}
          </LinearGradient>

          {/* Biller Modal */}
          <Modal
            statusBarTranslucent
            animationType="slide"
            transparent={true}
            visible={showBillerModal}
            onRequestClose={() => setShowBillerModal(false)}
          >
            <Pressable
              style={styles.overlay}
              onPress={() => setShowBillerModal(false)}
            >
              <LinearGradient
                colors={["#241036", "#3D3D3D", "#5B2C6F"]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.modalBox2}
              >
                <Pressable onPress={() => {}}>
                  {/* Search Row */}
                  <View style={styles.searchRow}>
                    <TextInput
                      style={styles.searchInput}
                      placeholder="Search Biller..."
                      placeholderTextColor="#888"
                    />
                    <Pressable onPress={() => setShowBillerModal(false)}>
                      <Text style={styles.cancelText}>Cancel</Text>
                    </Pressable>
                  </View>

                  {/* Popular Billers */}
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#fff",
                      fontFamily: "ManropeMedium",
                    }}
                  >
                    Top Search
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      marginTop: 15,
                    }}
                  >
                    {popularBillers.map((biller, i) => (
                      <Pressable
                        key={i}
                        onPress={() => handleBillerSelect(biller.name)}
                      >
                        <Image
                          source={biller.logo}
                          style={{ width: 40, height: 40, borderRadius: 8 }}
                          resizeMode="contain"
                        />
                        <Text
                          style={{
                            fontSize: 12,
                            textAlign: "center",
                            marginTop: 4,
                            color: "#fff",
                          }}
                        >
                          {biller.name}
                        </Text>
                      </Pressable>
                    ))}
                  </View>

                  {/* Scrollable Billers */}
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: 20 }}
                  >
                    {Object.keys(groupedBillers).map((letter) => (
                      <View key={letter} style={{ marginBottom: 20 }}>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: "600",
                            marginBottom: 10,
                            color: "#fff",
                          }}
                        >
                          {letter}
                        </Text>
                        {groupedBillers[letter].map((biller, i) => (
                          <Pressable
                            key={i}
                            onPress={() => handleBillerSelect(biller)}
                            style={{
                              paddingVertical: 12,
                              borderBottomWidth: 1,
                              borderColor: "#eee",
                            }}
                          >
                            <Text style={{ fontSize: 16, color: "#fff" }}>
                              {biller}
                            </Text>
                          </Pressable>
                        ))}
                      </View>
                    ))}
                  </ScrollView>
                </Pressable>
              </LinearGradient>
            </Pressable>
          </Modal>

          {/* Plans Modal */}
          <Modal
            statusBarTranslucent
            animationType="slide"
            transparent
            visible={showPlans}
            onRequestClose={() => setShowPlans(false)}
          >
            <Pressable
              style={styles.overlay}
              onPress={() => setShowPlans(false)}
            >
              <LinearGradient
                colors={["#241036", "#3D3D3D", "#5B2C6F"]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.modalBox}
              >
                <Pressable onPress={() => {}}>
                  {/* Header */}
                  <Text style={styles.headers}>Available Plans</Text>

                  {/* Search Row */}
                  <View style={styles.searchRows}>
                    <TextInput
                      style={styles.searchInputs}
                      placeholder="Search plans..."
                      placeholderTextColor="#888"
                      value={searchQuery}
                      onChangeText={setSearchQuery}
                    />
                    <Pressable onPress={() => setShowPlans(false)}>
                      <Text style={styles.cancelTexts}>Cancel</Text>
                    </Pressable>
                  </View>

                  {/* Plans List */}
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingVertical: 10 }}
                  >
                    {plans
                      .filter((plan) =>
                        plan.name
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                      )
                      .map((plan) => (
                        <Pressable
                          key={plan.id}
                          onPress={() => {
                            setSelectedPlan(plan);
                            setShowPlans(false);
                          }}
                          style={styles.planRow}
                        >
                          <View>
                            <Text style={styles.planName}>{plan.name}</Text>
                            {plan.description && (
                              <Text style={styles.planDesc}>
                                {plan.description}
                              </Text>
                            )}
                          </View>
                          <Text style={styles.planPrice}>{plan.price}</Text>
                        </Pressable>
                      ))}
                  </ScrollView>
                </Pressable>
              </LinearGradient>
            </Pressable>
          </Modal>

          {/* Summary Modal */}
          {isOpen && (
            <BottomModal visible={isOpen} setVisible={setIsOpen} height={460}>
              {/* Header */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#fff",
                    fontFamily: "ManropeSemiBold",
                  }}
                >
                  Summary
                </Text>
                <Pressable onPress={() => setIsOpen(false)}>
                  <Ionicons name="close" size={22} color="#fff" />
                </Pressable>
              </View>

              {/* Amount Center */}
              <View
                style={{
                  marginTop: 10,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    color: "#fff",
                    fontFamily: "ManropeMedium",
                  }}
                >
                  ₦1,000.00
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  marginTop: 20,
                  backgroundColor: isDark ? "#333" : "#F9FAFB",
                  padding: 12,
                  borderRadius: 10,
                }}
              >
                <Pressable
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 12,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: isDark ? "#26295B" : "#E6E7FA",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={require("../../../assets/images/Karry.png")}
                      />
                    </View>
                    <View>
                      <Text style={{ fontFamily: "ManropeMedium" }}>
                        Abdullahi Musa
                      </Text>
                      <Text style={{ color: "#6B7280", fontSize: 12 }}>
                        Dstv
                      </Text>
                    </View>
                  </View>
                  <Text style={{ fontFamily: "ManropeMedium" }}>
                    1475840311
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontFamily: "ManropeMedium",
                    fontSize: 14,
                    color: "#6B7280",
                  }}
                >
                  Amount
                </Text>
                <Text style={{ fontFamily: "ManropeMedium" }}>₦500</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontFamily: "ManropeMedium",
                    fontSize: 14,
                    color: "#6B7280",
                  }}
                >
                  plan
                </Text>
                <Text style={{ fontFamily: "ManropeMedium", color: "#111827" }}>
                  Dstvpadi
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontFamily: "ManropeMedium",
                    fontSize: 14,
                    color: "#6B7280",
                  }}
                >
                  Fee
                </Text>
                <Text style={{ fontFamily: "ManropeMedium" }}> 0.00</Text>
              </View>

              {/* Wallet Balance */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Image
                    source={require("@/assets/images/Karry.png")}
                    style={{ width: 40, height: 40 }}
                    resizeMode="contain"
                  />
                  <Text style={{ fontFamily: "ManropeMedium" }}>
                    Wallet Balance
                  </Text>
                </View>
                <Text
                  style={{ fontWeight: "600", fontFamily: "ManropeSemiBold" }}
                >
                  ₦1,580.29
                </Text>
              </View>

              {/* Button */}
              <View style={{ marginTop: 20 }}>
                <Button
                  title="Pay"
                  style={{ height: 50 }}
                  onPress={makePayment}
                />
              </View>
            </BottomModal>
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 15,
    paddingVertical: "15%",
    paddingBottom: 100,
  },
  header: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  skipText: {
    width: "100%",
    fontFamily: "ManropeSemiBold",
    fontSize: 16,
    textAlign: "center",
  },
  inputGroup: {
    marginTop: 20,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 40,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  text: {
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
    fontSize: 14,
    marginBottom: 12,
    color: "#fff",
  },
  inputButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  inputText: {
    fontSize: 14,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  section: {
    marginTop: 10,
    zIndex: 10,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#333333",
    paddingHorizontal: 12,
    fontSize: 16,
    borderRadius: 10,
    fontFamily: "ManropeMedium",
    height: 50,
    color: "#fff",
  },
  currencyBox: {
    width: 60,
    backgroundColor: "#333333",
    height: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  currencyText: {
    fontSize: 16,
    fontFamily: "ManropeMedium",
    color: "#fff",
  },
  modalBox: {
    backgroundColor: "#fff",
    height: "40%",
    borderRadius: 20,
    marginBottom: 40,
    marginHorizontal: 10,
    padding: 15,
    paddingVertical: 20,
    overflow: "hidden",
  },
  modalBox2: {
    backgroundColor: "#fff",
    height: "60%",
    borderRadius: 20,
    marginBottom: 40,
    marginHorizontal: 10,
    padding: 20,
    overflow: "hidden",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#333333",
    marginRight: 10,
  },
  cancelText: {
    color: "#007AFF",
    fontSize: 14,
    fontFamily: "ManropeMedium",
  },
  quickButtonsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  quickButton: {
    backgroundColor: "#F3F4F6",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 14,
    margin: 5,
  },
  quickButtonActive: {
    backgroundColor: "#2E358F",
  },
  quickButtonText: {
    fontSize: 16,
    fontFamily: "ManropeMedium",
    color: "#111",
  },
  quickButtonTextActive: {
    color: "#fff",
  },
  card: {
    width: "100%",
    marginTop: 25,
    borderRadius: 12,
    padding: 16,
  },
  txRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  txInfo: {
    flex: 1,
    marginLeft: 12,
  },
  txName: {
    fontSize: 15,
    fontFamily: "ManropeMedium",
  },
  txType: {
    fontSize: 13,
    fontFamily: "ManropeRegular",
  },
  txAmount: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 15,
    fontFamily: "ManropeMedium",
  },
  headers: {
    fontSize: 16,
    fontFamily: "ManropeSemiBold",
    marginBottom: 12,
    color: "#fff",
  },
  searchRows: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  searchInputs: {
    flex: 1,
    height: 40,
    backgroundColor: "#333333",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  cancelTexts: {
    fontSize: 14,
    color: "blue",
    fontFamily: "ManropeMedium",
  },
  planRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  planName: {
    fontSize: 14,
    fontFamily: "ManropeMedium",
    color: "#fff",
  },
  planDesc: {
    fontSize: 12,
    color: "#6B7280",
  },
  planPrice: {
    fontSize: 14,
    fontFamily: "ManropeSemiBold",
    color: "#fff",
  },
});
