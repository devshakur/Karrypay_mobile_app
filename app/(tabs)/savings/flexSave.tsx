import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import TransactionHistory from "@/components/TransactionHistory";
import { useRouter } from "expo-router";
import BottomModal from "@/components/modals/BottomModal";
import AntDesign from "@expo/vector-icons/AntDesign";
import WalletBalance from "@/components/WalletBalance";

import EvilIcons from "@expo/vector-icons/EvilIcons";
import CustomButton from "@/components/customButton";
import PasswordAuthModal from "@/components/AuthModals/PswdAuthModal";

export default function FlexSave() {
  const router = useRouter();
  const [isSave, setIsSave] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [pswd, setPswd] = useState(false);
  const [savingDetails, setSavingDetails] = useState(false);

  const passPin = () => {
    setPswd(true);
    setIsSave(false);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#1F1F1F", flex: 1 }}>
      <ScrollView>
        <View
          style={{
            padding: 15,
            width: "70%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back-sharp" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ color: "#fff" }}>Flex Save</Text>
        </View>
        <View
          style={{
            padding: 10,
          }}
        >
          <BlurView intensity={100} tint="dark" style={styles.glassCard}>
            <View style={styles.innerCard}>
              <View style={styles.balanceRow}>
                <Text style={styles.balanceText}>₦10,000.00</Text>
                <View style={styles.eyeButton}>
                  <Ionicons name="eye-outline" size={20} color="#fff" />
                </View>
              </View>

              <View style={styles.actionsRow}>
                <TouchableOpacity
                  style={styles.actionButton1}
                  onPress={() => setIsSave(true)}
                >
                  <LinearGradient
                    colors={["#FFFFFF", "#FFFFFF"]} // black → purple
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={StyleSheet.absoluteFill} // fills the whole button
                  />
                  <Feather name="plus" size={20} color="#1f1f1f" />
                  <Text
                    style={{
                      fontFamily: "ManropeMedium",
                      fontSize: 14,
                      color: "#1f1f1f",
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setWithdraw(true)}
                  style={[styles.actionButton2, { backgroundColor: "#1F1F1F" }]}
                >
                  <Feather name="arrow-up" size={20} color="#fff" />
                  <Text style={styles.actionText}>Withdraw</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setSavingDetails(true)}
                  style={[styles.actionButton, { backgroundColor: "#1F1F1F" }]}
                >
                  <MaterialCommunityIcons
                    name="view-grid-plus-outline"
                    size={20}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>
        </View>
        <View style={{ padding: 10 }}>
          <TransactionHistory />
        </View>
        <View style={{ padding: 10, marginTop: -4 }}>
          <TransactionHistory />
        </View>
        {isSave && (
          <BottomModal visible={isSave} setVisible={setIsSave} height={250}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "ManropeSemiBold",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Save to karrySave
              </Text>
              <TouchableOpacity
                onPress={() => setIsSave(false)}
                style={{ marginTop: 3 }}
              >
                <AntDesign name="close" size={20} color="white" />
              </TouchableOpacity>
            </View>
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
              <WalletBalance />
              <View
                style={{
                  padding: 15,
                  marginTop: 5,
                }}
              >
                <CustomButton
                  title="Next"
                  textColor="#fff"
                  style={{ width: "100%", height: 55 }}
                  onPress={passPin}
                />
              </View>
            </View>
          </BottomModal>
        )}
        {pswd && (
          <PasswordAuthModal
            visible={pswd}
            setVisible={setPswd}
            onPasswordSubmit={(pin) => {
              console.log("Entered PIN:", pin);
              router.push("/savings/savingsSuccess");
            }}
          />
        )}
        {withdraw && (
          <BottomModal
            visible={withdraw}
            setVisible={setWithdraw}
            height={330}
            style={{ backgroundColor: "#1F1F1F" }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "ManropeSemiBold",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Withdraw
              </Text>
              <TouchableOpacity
                onPress={() => setWithdraw(false)}
                style={{ marginTop: 3 }}
              >
                <AntDesign name="close" size={20} color="white" />
              </TouchableOpacity>
            </View>
            <View>
              <View
                style={[styles.balanceRow, { marginTop: 18, marginBottom: 0 }]}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
                >
                  <EvilIcons name="paperclip" size={24} color="white" />
                  <Text
                    style={{
                      fontFamily: "ManropeMedium",
                      color: "rgba(255,255,255,0.7)",
                      fontSize: 14,
                    }}
                  >
                    KarrySave Balance
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: "ManropeMedium",
                    color: "#fff",
                    fontSize: 14,
                  }}
                >
                  ₦1,580.29
                </Text>
              </View>
              <View style={[styles.balanceRow, { marginTop: 10 }]}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
                >
                  <EvilIcons name="calendar" size={24} color="white" />
                  <Text
                    style={{
                      fontFamily: "ManropeMedium",
                      color: "rgba(255,255,255,0.7)",
                      fontSize: 14,
                    }}
                  >
                    KarrySave Balance
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: "ManropeMedium",
                    color: "#fff",
                    fontSize: 14,
                  }}
                >
                  30 Sep, 2025
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "ManropeMedium",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 14,
                  marginBottom: 3,
                }}
              >
                Amount to withdraw
              </Text>
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

              <View
                style={{
                  padding: 15,
                  marginTop: 45,
                }}
              >
                <CustomButton
                  title="Withdraw"
                  textColor="#fff"
                  style={{ width: "100%", height: 55 }}
                  onPress={passPin}
                />
              </View>
            </View>
          </BottomModal>
        )}
        {savingDetails && (
          <BottomModal
            visible={savingDetails}
            setVisible={setSavingDetails}
            height={180}
            style={{ backgroundColor: "#1F1F1F" }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "ManropeSemiBold",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                KarrySave Settings
              </Text>
              <TouchableOpacity
                onPress={() => setSavingDetails(false)}
                style={{ marginTop: 3 }}
              >
                <AntDesign name="close" size={20} color="white" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/savings/autoSave")}
            >
              <View
                style={[
                  styles.balanceRow,
                  {
                    marginTop: 14,
                    backgroundColor: "#2A2A2A",
                    padding: 12,
                    borderRadius: 8,
                    marginBottom: 0,
                  },
                ]}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
                >
                  <Ionicons name="calendar" size={20} color="white" />
                  <Text
                    style={{
                      fontFamily: "ManropeMedium",
                      color: "rgba(255,255,255,0.7)",
                      fontSize: 14,
                    }}
                  >
                    AutoSave Settings
                  </Text>
                </View>

                <Ionicons
                  name="chevron-forward-sharp"
                  size={20}
                  color="white"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/savings/changeDate")}
            >
              <View
                style={[
                  styles.balanceRow,
                  {
                    marginTop: 18,
                    backgroundColor: "#2A2A2A",
                    padding: 12,
                    borderRadius: 8,
                    marginBottom: 0,
                  },
                ]}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
                >
                  <Ionicons name="settings-outline" size={20} color="white" />
                  <Text
                    style={{
                      fontFamily: "ManropeMedium",
                      color: "rgba(255,255,255,0.7)",
                      fontSize: 14,
                    }}
                  >
                    Change Withdraw Date
                  </Text>
                </View>

                <Ionicons
                  name="chevron-forward-sharp"
                  size={20}
                  color="white"
                />
              </View>
            </TouchableOpacity>
          </BottomModal>
        )}
      </ScrollView>
    </SafeAreaView>
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
    backgroundColor: "#DD6202", // frosted overlay
    padding: 20,
  },

  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  balanceText: { fontSize: 30, fontFamily: "ManropeMedium", color: "#FFFFFF" },
  eyeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#1F1F1F",
    alignItems: "center",
    justifyContent: "center",
  },
  actionsRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    width: "20%",
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  actionButton2: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    width: "60%",
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  actionButton1: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 4,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    overflow: "hidden",
  },
  actionText: { color: "#fff", fontSize: 14, fontFamily: "ManropeMedium" },
  section: {
    marginTop: 15,
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
});
