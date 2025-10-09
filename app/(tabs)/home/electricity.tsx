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
import PrimaryButton from "@/components/screens/ui/buttons/PrimaryButton";

export default function Electricity() {
  const router = useRouter();
  const { theme, isDark } = useTheme();
  const { colors } = theme;
  const { width } = Dimensions.get("window");

  const [showModal, setShowModal] = useState(false);
  const [showBillerModal, setShowBillerModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [meterNumber, setMeterNumber] = useState("");
  const [selectedBiller, setSelectedBiller] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [showRecent, setShowRecent] = useState(false);

  // Example recent electricity payments
  const [users, setUsers] = useState([
    {
      billerProvider: "Abuja Electricity Distribution Plc (AEDC)",
      meterNumber: "1234-5678-9012",
      customerName: "John Doe",
    },
    {
      billerProvider: "Kano Electricity Distribution Plc (KEDC)",
      meterNumber: "8765-4321-9999",
      customerName: "Mary Jane",
    },
    {
      billerProvider: "Eko Electricity Distribution Plc (EKEDC)",
      meterNumber: "2222-3333-4444",
      customerName: "Ahmed Musa",
    },
    {
      billerProvider: "Abuja Electricity Distribution Plc (AEDC)",
      meterNumber: "1234-5678-9012",
      customerName: "John Doe",
    },
    {
      billerProvider: "Kano Electricity Distribution Plc (KEDC)",
      meterNumber: "8765-4321-9999",
      customerName: "Mary Jane",
    },
    {
      billerProvider: "Eko Electricity Distribution Plc (EKEDC)",
      meterNumber: "2222-3333-4444",
      customerName: "Ahmed Musa",
    },
    {
      billerProvider: "Abuja Electricity Distribution Plc (AEDC)",
      meterNumber: "1234-5678-9012",
      customerName: "John Doe",
    },
    {
      billerProvider: "Kano Electricity Distribution Plc (KEDC)",
      meterNumber: "8765-4321-9999",
      customerName: "Mary Jane",
    },
    {
      billerProvider: "Eko Electricity Distribution Plc (EKEDC)",
      meterNumber: "2222-3333-4444",
      customerName: "Ahmed Musa",
    },
  ]);

  const canProceed = meterNumber.trim() !== "" && selectedBiller !== "";

  const popularBillers = [
    {
      name: "AEDC",
      logo: require("@/assets/images/banks/access.png"),
    },
    {
      name: "KEDC",
      logo: require("@/assets/images/banks/firstbank.png"),
    },
    {
      name: "BEDC",
      logo: require("@/assets/images/banks/moniepoint.png"),
    },
    {
      name: "EKEDC",
      logo: require("@/assets/images/banks/opay.png"),
    },
    {
      name: "IBEDC",
      logo: require("@/assets/images/banks/firstbank.png"),
    },
  ];

  // Example: group billers alphabetically
  const billers = [
    "Abuja Electricity Distribution Plc (AEDC)",
    "Benin Electricity Distribution Company Plc (BEDC)",
    "Eko Electricity Distribution Plc (EKEDC)",
    "Enugu Electricity Distribution Plc (EEDC)",
    "Ibadan Electricity Distribution Company Plc (IBEDC)",
    "Ikeja Electric (IKEDC)",
    "Jos Electricity Distribution Plc (JEDC)",
    "Kaduna Electricity Distribution Plc (KAEDC)",
    "Kano Electricity Distribution Plc (KEDC)",
    "Yola Electricity Distribution Company Plc (YEDC)",
  ];

  const groupedBillers = billers.reduce((acc, biller) => {
    const letter = biller.charAt(0).toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(biller);
    return acc;
  }, {} as Record<string, string[]>);

  // Handle recent user selection
  const handleUserSelect = (user: any) => {
    setMeterNumber(user.meterNumber);
    setSelectedBiller(user.billerProvider);
    setCustomerName(user.customerName);
    setShowModal(false);
  };

  // Handle biller selection
  const handleBillerSelect = (biller: string) => {
    setSelectedBiller(biller);
    setShowBillerModal(false);
  };
  const makePayment = () => {
    setIsOpen(false);
    router.push("/(tabs)/home/electricitySuccess");
  };

  return (
    <LinearGradient
      colors={["#1F1F1F", "#1F1F1F", "#1F1F1F"]}
      locations={[0, 0.45, 1]}
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
              Electricity
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

          {/* Meter Number */}
          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: colors.text }]}>
              Meter Number
            </Text>
            <TextInput
              style={[styles.input, { backgroundColor: "#333333" }]}
              placeholder="0000-0000-0000-0000"
              keyboardType="numeric"
              value={meterNumber}
              onChangeText={setMeterNumber}
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
              />
            </View>
          </View>

          {/* Show only when ready */}
          {canProceed && (
            <>
              <View style={[styles.inputGroup]}>
                <Text style={[styles.label, { color: colors.text }]}>
                  Customer Name
                </Text>
                <TextInput
                  style={[styles.input, { backgroundColor: "#333333" }]}
                  placeholder="Customer Name"
                  value={customerName}
                  onChangeText={setCustomerName}
                  placeholderTextColor="#5E5E5E"
                />
              </View>
            </>
          )}

          {/* Next Button */}
          <View style={{ marginTop: 30 }}>
            <PrimaryButton
              title="Next"
              style={{ height: 50 }}
              onPress={() => setIsOpen(true)}
            />
          </View>

          {/* Divider */}
          <View style={styles.box}>
            <View style={styles.line} />
            <Text style={styles.text}>OR</Text>
            <View style={styles.line} />
          </View>

          {/* Choose from Favorite */}
          <View>
            <TouchableOpacity
              style={[styles.inputButton, { backgroundColor: "#333" }]}
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
              style={[styles.inputButton, { backgroundColor: "#333" }]}
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
                        {user.billerProvider.substring(0, 2).toUpperCase()}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{ fontFamily: "ManropeMedium", color: "#fff" }}
                      >
                        {user.customerName}
                      </Text>
                      <Text style={{ color: "#6B7280", fontSize: 12 }}>
                        {user.billerProvider}
                      </Text>
                    </View>
                  </View>
                  <Text style={{ fontSize: 12, color: "#fff" }}>
                    {user.meterNumber}
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
                              {user.customerName.substring(0, 2).toUpperCase()}
                            </Text>
                          </View>
                          <View>
                            <Text
                              style={{
                                fontFamily: "ManropeMedium",
                                color: "#fff",
                              }}
                            >
                              {user.customerName}
                            </Text>
                            <Text style={{ color: "#6B7280", fontSize: 12 }}>
                              {user.billerProvider}
                            </Text>
                          </View>
                        </View>
                        <Text
                          style={{
                            fontFamily: "ManropeMedium",
                            color: "#fff",
                          }}
                        >
                          {user.meterNumber}
                        </Text>
                      </Pressable>
                    ))}
                  </ScrollView>
                </Pressable>
              </LinearGradient>
            </Pressable>
          </Modal>

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
                    fontFamily: "ManropeMedium",
                    color: "#fff",
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
                        Kedco
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
                    color: "#fff",
                  }}
                >
                  Amount
                </Text>
                <Text style={{ fontFamily: "ManropeMedium", color: "#fff" }}>
                  ₦500
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
                    color: "#fff",
                  }}
                >
                  Units to get
                </Text>
                <Text style={{ fontFamily: "ManropeMedium", color: "#fff" }}>
                  7.00
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
                    color: "#fff",
                  }}
                >
                  Fee
                </Text>
                <Text style={{ fontFamily: "ManropeMedium", color: "#fff" }}>
                  {" "}
                  0.00
                </Text>
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
                  <Text style={{ fontFamily: "ManropeMedium", color: "#fff" }}>
                    Wallet Balance
                  </Text>
                </View>
                <Text
                  style={{
                    fontWeight: "600",
                    fontFamily: "ManropeSemiBold",
                    color: "#fff",
                  }}
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
    color: "#fff",
    paddingHorizontal: 12,
    fontSize: 16,
    borderRadius: 10,
    fontFamily: "ManropeMedium",
    height: 50,
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
    color: "#5E5E5E",
  },
  modalBox: {
    height: "50%",
    borderRadius: 20,
    marginBottom: 40,
    marginHorizontal: 10,
    padding: 10,
    paddingVertical: 20,
    overflow: "hidden",
  },
  modalBox2: {
    overflow: "hidden",
    height: "60%",
    borderRadius: 20,
    marginBottom: 40,
    marginHorizontal: 10,
    padding: 20,
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
});
