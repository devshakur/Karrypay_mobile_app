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
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "@/components/screens/ui/buttons/PrimaryButton";

export default function SendMoney() {
  const router = useRouter();
  const { theme, isDark } = useTheme();
  const { colors } = theme;
  const { width } = Dimensions.get("window");

  const [showModal, setShowModal] = useState(false);
  const [showBankModal, setShowBankModal] = useState(false);

  const [recipientAccount, setRecipientAccount] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [accountName, setAccountName] = useState("");
  const [showRecent, setShowRecent] = useState(true);

  //   const banks = ["Access Bank", "GTBank", "UBA", "First Bank", "Zenith Bank"];

  const [users, setUsers] = useState([
    {
      name: "Abdullahi Musa",
      bank: "Access Bank",
      accountNumber: "1475840311",
    },
    {
      name: "Yusuf Adam",
      bank: "Zenith Bank",
      accountNumber: "1475840311",
    },
    {
      name: "Hezekiah Olushola",
      bank: "MFB Moniiepoint Bank",
      accountNumber: "1475840311",
    },
    {
      name: "Abdullahi Musa",
      bank: "Access Bank",
      accountNumber: "1475840311",
    },
  ]);

  const canProceed = recipientAccount.trim() !== "" && selectedBank !== "";

  const popularBanks = [
    {
      name: "Access Bank",
      short: "Access",
      logo: require("@/assets/images/banks/access.png"),
    },
    {
      name: "First Bank",
      short: "First",
      logo: require("@/assets/images/banks/firstbank.png"),
    },
    {
      name: "Moniepoint",
      short: "MFB",
      logo: require("@/assets/images/banks/moniepoint.png"),
    },
    {
      name: "Opay",
      short: "Opay",
      logo: require("@/assets/images/banks/opay.png"),
    },
    {
      name: "Zenith Bank",
      short: "Zenith",
      logo: require("@/assets/images/banks/firstbank.png"),
    },
  ];

  // Example: group banks by first letter
  const banks = [
    "Access Bank",
    "Apex Bank",
    "GTBank",
    "UBA",
    "First Bank",
    "Zenith Bank",
    "Union Bank",
    "Keystone Bank",
    "Polaris Bank",
    "Stanbic IBTC Bank",
    "Sterling Bank",
  ];

  const groupedBanks = banks.reduce((acc, bank) => {
    const letter = bank.charAt(0).toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(bank);
    return acc;
  }, {});

  // Handle user selection (from favorite/recent modal)
  const handleUserSelect = (user: any) => {
    setRecipientAccount(user.accountNumber);
    setSelectedBank(user.bank);
    setAccountName(user.name);
    setShowModal(false);
  };

  // Handle bank selection
  const handleBankSelect = (bank: string) => {
    setSelectedBank(bank);
    setShowBankModal(false);
  };

  return (
    <LinearGradient
      colors={["#1F1F1F", "#1F1F1F"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView
        style={[styles.container, { paddingHorizontal: width < 470 ? 15 : 20 }]}
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
              Send Money
            </Text>
          </View>

          {/* Recipient Account */}
          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: colors.text }]}>
              Recipient Account
            </Text>
            <TextInput
              style={[
                styles.input,
                { backgroundColor: "#333333" },
                { color: "#fff" },
              ]}
              placeholder="Enter the account number"
              keyboardType="numeric"
              value={recipientAccount}
              onChangeText={setRecipientAccount}
              placeholderTextColor="#5E5E5E"
            />
          </View>

          {/* Bank */}
          <View style={[styles.inputGroup, { marginTop: -5 }]}>
            <Text style={[styles.label, { color: colors.text }]}>Bank</Text>
            <TouchableOpacity
              style={[styles.inputButton, { backgroundColor: "#333333" }]}
              onPress={() => setShowBankModal(true)}
            >
              <Text style={{ color: selectedBank ? "#fff" : "#888" }}>
                {selectedBank || "Select Bank"}
              </Text>
              <Ionicons name="chevron-down" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Show only when ready */}
          {canProceed && (
            <>
              {/* Account Name */}
              <View style={[styles.inputGroup]}>
                <Text style={[styles.label, { color: colors.text }]}>
                  Account Name
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    { backgroundColor: "#333333" },
                    { color: "#fff" },
                  ]}
                  placeholder="Account Name"
                  value={accountName}
                  onChangeText={setAccountName}
                  placeholderTextColor="#5E5E5E"
                />
              </View>

              {/* Send Button */}
              <View style={{ marginTop: 30 }}>
                <PrimaryButton
                  title="Send"
                  style={{ height: 50 }}
                  onPress={() => router.push("/(tabs)/home/amountSection")}
                />
              </View>
            </>
          )}

          {/* Divider */}
          <View style={styles.box}>
            <View style={styles.line} />
            <Text style={styles.text}>OR</Text>
            <View style={styles.line} />
          </View>

          {/* Choose from Favorite */}
          <View>
            <TouchableOpacity
              style={[styles.inputButton, { backgroundColor: "#333333" }]}
              onPress={() => setShowModal(true)}
            >
              <Text style={[styles.inputText, { color: "#fff" }]}>
                Choose from Favorite
              </Text>
              <Ionicons name="chevron-down" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Choose from most recent */}
          <View style={styles.inputGroup}>
            <TouchableOpacity
              style={[styles.inputButton, { backgroundColor: "#333333" }]}
              onPress={() => setShowRecent(!showRecent)}
            >
              <Text style={[styles.inputText, { color: "#fff" }]}>
                Choose from most recent
              </Text>
              <Ionicons
                name={showRecent ? "chevron-up" : "chevron-down"}
                size={20}
                color="#fff"
              />
            </TouchableOpacity>
          </View>

          {/* Recent Users */}
          {showRecent && (
            <LinearGradient
              colors={["#241036", "#3D3D3D", "#5B2C6F"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                flexDirection: "column",
                marginTop: 20,

                padding: 12,
                borderRadius: 10,
              }}
            >
              {users.map((user, i) => (
                <Pressable
                  key={i}
                  onPress={() => handleUserSelect(user)}
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
                      <Text
                        style={{
                          fontFamily: "ManropeSemiBold",
                          color: isDark ? "#7C82E0" : "#2E358F",
                        }}
                      >
                        {user.name.substring(0, 2).toUpperCase()}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontFamily: "ManropeMedium",
                          color: "#FFFFFF",
                        }}
                      >
                        {user.name}
                      </Text>
                      <Text style={{ color: "#6B7280", fontSize: 12 }}>
                        {user.bank}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontFamily: "ManropeMedium",
                      color: "#FFFFFF",
                    }}
                  >
                    {user.accountNumber}
                  </Text>
                </Pressable>
              ))}
            </LinearGradient>
          )}

          {/* Favorite Modal */}
          <Modal
            statusBarTranslucent
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => setShowModal(false)}
          >
            <Pressable
              style={styles.overlay}
              onPress={() => setShowModal(false)}
            >
              <LinearGradient
                colors={["#241036", "#3D3D3D", "#5B2C6F"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.modalBox}
              >
                <Pressable onPress={() => {}}>
                  {/* Search Row */}
                  <View style={styles.searchRow}>
                    <TextInput
                      style={[
                        styles.searchInput,
                        {
                          backgroundColor: "#333333",
                        },
                      ]}
                      placeholder="Search..."
                      placeholderTextColor="#888"
                    />
                    <Pressable onPress={() => setShowModal(false)}>
                      <Text style={styles.cancelText}>Cancel</Text>
                    </Pressable>
                  </View>

                  {/* Scrollable content */}
                  <ScrollView
                    style={{ marginTop: 10 }}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                  >
                    {users.map((user, i) => (
                      <Pressable
                        key={i}
                        onPress={() => handleUserSelect(user)}
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
                            <Text
                              style={{
                                fontFamily: "ManropeMedium",
                                color: isDark ? "#7C82E0" : "#2E358F",
                              }}
                            >
                              {user.name.substring(0, 2).toUpperCase()}
                            </Text>
                          </View>
                          <View>
                            <Text
                              style={{
                                fontFamily: "ManropeMedium",
                                color: "#fff",
                              }}
                            >
                              {user.name}
                            </Text>
                            <Text style={{ color: "#6B7280", fontSize: 12 }}>
                              {user.bank}
                            </Text>
                          </View>
                        </View>
                        <Text
                          style={{
                            fontFamily: "ManropeMedium",
                            color: "#fff",
                          }}
                        >
                          {user.accountNumber}
                        </Text>
                      </Pressable>
                    ))}
                  </ScrollView>
                </Pressable>
              </LinearGradient>
            </Pressable>
          </Modal>

          {/* Bank Modal */}
          <Modal
            statusBarTranslucent
            animationType="slide"
            transparent={true}
            visible={showBankModal}
            onRequestClose={() => setShowBankModal(false)}
          >
            <Pressable
              style={styles.overlay}
              onPress={() => setShowBankModal(false)}
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
                      style={[
                        styles.searchInput,
                        {
                          backgroundColor: "#333333",
                        },
                      ]}
                      placeholder="Search Bank..."
                      placeholderTextColor="#888"
                    />
                    <Pressable onPress={() => setShowBankModal(false)}>
                      <Text style={styles.cancelText}>Cancel</Text>
                    </Pressable>
                  </View>

                  {/* Popular Banks */}
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "ManropeMedium",
                      color: "#fff",
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
                    {popularBanks.map((bank, i) => (
                      <Pressable
                        key={i}
                        onPress={() => handleBankSelect(bank.name)}
                      >
                        <Image
                          source={bank.logo}
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
                          {bank.short}
                        </Text>
                      </Pressable>
                    ))}
                  </View>

                  {/* Scrollable Bank List */}
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: 20 }}
                  >
                    {Object.keys(groupedBanks).map((letter) => (
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
                        {groupedBanks[letter].map((bank, i) => (
                          <Pressable
                            key={i}
                            onPress={() => handleBankSelect(bank)}
                            style={{
                              paddingVertical: 12,
                              borderBottomWidth: 1,
                              borderColor: "#eee",
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 16,
                                color: "#fff",
                              }}
                            >
                              {bank}
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
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
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
  modalBox: {
    height: "32%",
    borderRadius: 20,
    marginBottom: 40,
    marginHorizontal: 10,
    padding: 10,
    paddingVertical: 20,
    overflow: "hidden",
  },
  modalBox2: {
    backgroundColor: "#fff",
    height: "50%",
    borderRadius: 20,
    marginBottom: 20,
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
    backgroundColor: "#F3F4F6",
    marginRight: 10,
  },
  cancelText: {
    color: "#007AFF",
    fontSize: 14,
    fontFamily: "ManropeMedium",
  },
});
