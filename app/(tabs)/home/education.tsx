import {
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Text,
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

export default function Education() {
  const router = useRouter();
  const { theme, isDark } = useTheme();
  const { width } = Dimensions.get("window");
  const { colors } = theme;

  // JSON Config
  const billers = [
    {
      name: "JAMB",
      icon: "https://img.icons8.com/color/48/student-center.png",
      plans: [
        { name: "UTME Pin", price: 5000 },
        { name: "DE Pin", price: 5500 },
      ],
    },
    {
      name: "WAEC",
      icon: "https://img.icons8.com/color/48/graduation-cap.png",
      plans: [
        { name: "WAEC Result Checker Pin", price: 3500 },
        { name: "WAEC GCE Registration Pin", price: 4200 },
      ],
    },
  ];

  const [showBillerModal, setShowBillerModal] = useState(false);
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [selectedBiller, setSelectedBiller] = useState<any>(null);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [price, setPrice] = useState("");

  const makePayment = () => {
    setIsOpen(false);
    router.push("/(tabs)/home/educationSuccess");
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
              Education
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
                {selectedBiller?.name || "Choose a biller"}
              </Text>
              <Ionicons name="chevron-down" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Plan */}
          <View style={[styles.inputGroup, { marginTop: 15 }]}>
            <Text style={[styles.label, { color: colors.text }]}>Type</Text>
            <TouchableOpacity
              style={[styles.inputButton, { backgroundColor: "#333" }]}
              onPress={() => {
                if (selectedBiller) {
                  setShowPlanModal(true);
                } else {
                  alert("Please select a biller first");
                }
              }}
            >
              <Text style={{ color: selectedPlan ? colors.text : "#888" }}>
                {selectedPlan?.name || "Select Plan"}
              </Text>
              <Ionicons
                name="chevron-down"
                size={20}
                color={isDark ? "#fff" : "#555"}
              />
            </TouchableOpacity>
          </View>

          {/* Customer ID */}
          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: colors.text }]}>
              Customer ID
            </Text>
            <TextInput
              style={[
                styles.input,
                { backgroundColor: "#333333", color: "#fff" },
              ]}
              placeholder="0000-0000-0000-0000"
              keyboardType="numeric"
              placeholderTextColor="#5E5E5E"
            />
          </View>

          {/* Email/Phone */}
          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: "#fff" }]}>
              Email/phone number
            </Text>
            <TextInput
              style={[
                styles.input,
                { backgroundColor: "#333333", color: "#fff" },
              ]}
              placeholder="Email or phone number (to deliver the PIN)"
              keyboardType="numeric"
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
                editable={false}
              />
            </View>
          </View>

          {/* Next Button */}
          <View style={{ marginTop: 60 }}>
            <Button
              title="Next"
              style={{
                height: 50,
                backgroundColor: price ? "#2E358F" : "#E6E7FA",
              }}
              onPress={() => setIsOpen(true)}
              disabled={!price}
            />
          </View>

          {/* Biller Modal */}
          {showBillerModal && (
            <BottomModal
              visible={showBillerModal}
              setVisible={setShowBillerModal}
              height={200}
            >
              {/* Header */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 16,
                }}
              >
                <Text
                  style={{ fontSize: 16, fontWeight: "600", color: "#fff" }}
                >
                  Select Biller
                </Text>
                <Pressable onPress={() => setShowBillerModal(false)}>
                  <Ionicons name="close" size={20} color="#fff" />
                </Pressable>
              </View>

              {billers.map((biller) => (
                <Pressable
                  key={biller.name}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: 12,
                  }}
                  onPress={() => {
                    setSelectedBiller(biller);
                    setSelectedPlan(null);
                    setPrice("");
                    setShowBillerModal(false);
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
                      source={{ uri: biller.icon }}
                      style={{ width: 28, height: 28 }}
                    />
                    <Text
                      style={{ fontSize: 15, fontWeight: "500", color: "#fff" }}
                    >
                      {biller.name}
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#fff" />
                </Pressable>
              ))}
            </BottomModal>
          )}

          {/* Plan Modal */}
          {showPlanModal && (
            <BottomModal
              visible={showPlanModal}
              setVisible={setShowPlanModal}
              height={200}
            >
              {/* Header */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 16,
                }}
              >
                <Text
                  style={{ fontSize: 16, fontWeight: "600", color: "#fff" }}
                >
                  Select Service Type
                </Text>
                <Pressable onPress={() => setShowPlanModal(false)}>
                  <Ionicons name="close" size={20} color="#fff" />
                </Pressable>
              </View>

              {selectedBiller?.plans.map((plan: any) => (
                <Pressable
                  key={plan.name}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: 12,
                  }}
                  onPress={() => {
                    setSelectedPlan(plan);
                    setPrice(String(plan.price));
                    setShowPlanModal(false);
                  }}
                >
                  <Text
                    style={{ fontSize: 15, fontWeight: "500", color: "#fff" }}
                  >
                    {plan.name}
                  </Text>
                  <Ionicons name="chevron-forward" size={20} color="#fff" />
                </Pressable>
              ))}
            </BottomModal>
          )}
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
                    fontFamily: "ManropeSemiBold",
                    color: "#fff",
                  }}
                >
                  Summary
                </Text>
                <Pressable onPress={() => setIsOpen(false)}>
                  <Ionicons name="close" size={22} color="#fff" />
                </Pressable>
              </View>
              {/* Amount Center */}
              <View style={{ marginTop: 10, alignItems: "center" }}>
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
    backgroundColor: "#fff",
    height: "40%",
    borderRadius: 20,
    marginBottom: 40,
    marginHorizontal: 10,
    padding: 15,
    paddingVertical: 20,
  },
  modalBox2: {
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
    backgroundColor: "#F3F4F6",
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
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  cancelTexts: {
    fontSize: 14,
    color: "#2E358F",
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
    color: "#111827",
  },
  planDesc: {
    fontSize: 12,
    color: "#6B7280",
  },
  planPrice: {
    fontSize: 14,
    fontFamily: "ManropeSemiBold",
    color: "#2E358F",
  },
});
