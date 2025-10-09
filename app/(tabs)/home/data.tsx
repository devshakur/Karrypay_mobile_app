import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  Platform,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import DropDownPicker from "react-native-dropdown-picker";
import Button from "@/components/Button";
import BottomModal from "@/components/modals/BottomModal";
import FaceAuthModal from "@/components/AuthModals/FaceAuthModal";
import PasswordAuthModal from "@/components/AuthModals/PswdAuthModal";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "@/components/screens/ui/buttons/PrimaryButton";

export default function Data() {
  const { theme, isDark } = useTheme();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isopen, setIsOpen] = useState(false);
  const [isFace, setIsFace] = useState(false);
  const [isPswd, setIsPswd] = useState(false);
  const [network, setNetwork] = useState(null);
  const [items, setItems] = useState([
    {
      label: "MTN",
      value: "mtn",
      icon: () => (
        <Image
          source={require("@/assets/images/banks/mtn.png")}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
      ),
    },
    {
      label: "Airtel",
      value: "airtel",
      icon: () => (
        <Image
          source={require("@/assets/images/banks/firstbank.png")}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
      ),
    },
    {
      label: "Glo",
      value: "glo",
      icon: () => (
        <Image
          source={require("@/assets/images/banks/opay.png")}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
      ),
    },
    {
      label: "9mobile",
      value: "9mobile",
      icon: () => (
        <Image
          source={require("@/assets/images/banks/access.png")}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
      ),
    },
  ]);

  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const { width } = Dimensions.get("window");

  const quickAmounts = ["All", "Daily", "Weekly", "Monthly"];
  const transactions = [
    {
      id: 1,
      name: "100Mb",
      days: "2",
      amount: "₦100",
    },
    {
      id: 2,
      name: "200Mb",
      days: "1",
      amount: "₦1,000",
    },
    {
      id: 3,
      name: "5GB",
      days: "1",
      amount: "₦5,000",
    },
    {
      id: 4,
      name: "15GB",
      days: "29",
      amount: "₦8,000",
    },
  ];

  const makePakement = () => {
    setIsOpen(false);
    setIsFace(true);
  };
  const switchToPassword = () => {
    setIsFace(false);
    setIsPswd(true);
  };
  return (
    <LinearGradient
      colors={["#1F1F1F", "#1F1F1F", "#1F1F1F"]}
      locations={[0, 0.45, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={[styles.container]}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View style={styles.header}>
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color={theme.colors.text}
            />
            <Text style={[styles.skipText, { color: theme.colors.primary }]}>
              Data
            </Text>
          </View>
          <View style={styles.section}>
            <View style={styles.inputRow}>
              <View style={styles.dropdownBox}>
                <DropDownPicker
                  open={open}
                  value={network}
                  items={items}
                  setOpen={setOpen}
                  setValue={setNetwork}
                  setItems={setItems}
                  style={[styles.dropdown, { backgroundColor: "#333333" }]}
                  dropDownContainerStyle={styles.dropdownContainer}
                  showArrowIcon={true}
                  ArrowDownIconComponent={() => (
                    <Ionicons name="chevron-down" size={18} color="#fff" />
                  )}
                  ArrowUpIconComponent={() => (
                    <Ionicons name="chevron-up" size={18} color="#fff" />
                  )}
                  placeholder=""
                  labelStyle={{ display: "none" }}
                  textStyle={{ display: "none" }}
                  listItemLabelStyle={{ marginLeft: 8 }}
                />
              </View>

              <TextInput
                style={[
                  styles.textInput,
                  { backgroundColor: "#333333" },
                  { color: theme.colors.text },
                ]}
                placeholder="Enter phone number"
                placeholderTextColor="#777"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
            </View>
          </View>
          <View style={styles.quickButtonsRow}>
            {quickAmounts.map((amt) => (
              <TouchableOpacity
                key={amt}
                style={[
                  styles.quickButton,
                  { backgroundColor: "#333333" },
                  { color: "#fff" },
                  amount === String(amt) && styles.quickButtonActive,
                ]}
                onPress={() => setAmount(String(amt))}
              >
                <Text
                  style={[
                    styles.quickButtonText,
                    amount === String(amt) && styles.quickButtonTextActive,
                  ]}
                >
                  {amt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <LinearGradient
            colors={["#1A1A1A", "#3C1361", "#7E22"]} // charcoal → purple gradient
            start={{ x: 1, y: 1 }} // top-left
            end={{ x: 0, y: 0 }} // bottom-right
            style={styles.card}
          >
            {transactions.map((tx) => (
              <View key={tx.id} style={styles.txRow}>
                {/* Left: Icon inside circle */}
                <View>
                  <Image
                    source={require("@/assets/images/mtn1.png")}
                    style={{ width: 44, height: 44, borderRadius: 22 }}
                    resizeMode="contain"
                  />
                </View>

                {/* Middle: Name + type */}
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
                    {tx.days}Days
                  </Text>
                </View>

                {/* Right: Amount + time */}
                <View style={styles.txAmount}>
                  <Text style={[styles.amount, { color: "#FFFFFF" }]}>
                    {tx.amount}
                  </Text>
                </View>
              </View>
            ))}
          </LinearGradient>
          <View style={styles.bottomButton}>
            <PrimaryButton
              title="Send"
              style={{ height: width < 400 ? 55 : 70 }}
              onPress={() => setIsOpen(true)}
            />
          </View>
        </KeyboardAvoidingView>
        {isopen && (
          <BottomModal
            visible={isopen}
            setVisible={setIsOpen}
            style={{ backgroundColor: isDark ? "#333" : "#fff" }}
          >
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
                  color: theme.colors.text,
                  fontFamily: "ManropeSemiBold",
                }}
              >
                Summary
              </Text>
              <Pressable onPress={() => setIsOpen(false)}>
                <Ionicons name="close" size={22} color={theme.colors.text} />
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
                  color: theme.colors.text,
                }}
              >
                1GB
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
                Amount
              </Text>
              <Text
                style={{
                  fontFamily: "ManropeMedium",
                  color: theme.colors.text,
                }}
              >
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
                  color: "#6B7280",
                }}
              >
                Product Name
              </Text>
              <Text
                style={{
                  fontFamily: "ManropeMedium",
                  color: isDark ? theme.colors.text : "#111827",
                }}
              >
                MTN
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
                Recipient Number
              </Text>
              <Text
                style={{
                  fontFamily: "ManropeMedium",
                  color: theme.colors.text,
                }}
              >
                07083175021
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
                Discount
              </Text>
              <Text
                style={{
                  fontFamily: "ManropeMedium",
                  color: theme.colors.text,
                }}
              >
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
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Image
                  source={require("@/assets/images/Karry.png")}
                  style={{ width: 40, height: 40 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: "ManropeMedium",
                    color: theme.colors.text,
                  }}
                >
                  Wallet Balance
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: "600",
                  fontFamily: "ManropeSemiBold",
                  color: theme.colors.text,
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
                onPress={makePakement}
              />
            </View>
          </BottomModal>
        )}
        {isFace && (
          <FaceAuthModal
            visible={isFace}
            setVisible={setIsFace}
            switchToPassword={switchToPassword}
          />
        )}
        {isPswd && (
          <PasswordAuthModal
            visible={isPswd}
            setVisible={setIsPswd}
            failureConfig={{
              title: "Data Purchase Failed",
              message:
                "We couldn't process your data purchase. Please check your balance or network connection and try again.",
              retryPath: "/(tabs)/home/data",
            }}
            successConfig={{
              title: "Data Purchase Successful",
              message:
                "Your data bundle has been successfully activated. Stay connected and enjoy seamless browsing.",
              nextPath: "/(tabs)/home",
            }}
            // switchToFace={switchToFace}
          />
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: "13%",
    paddingHorizontal: 13,
  },
  header: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "3%",
  },
  skipText: {
    width: "100%",
    fontFamily: "ManropeSemiBold",
    fontSize: 16,
    textAlign: "center",
  },
  section: {
    marginTop: 30,
    zIndex: 10,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownBox: {
    width: 80,
    marginRight: 10,
    zIndex: 1000,
  },
  dropdown: {
    backgroundColor: "#333",
    borderRadius: 10,
    borderWidth: 0,
    height: 50,
  },
  dropdownContainer: {
    backgroundColor: "#333",
    borderRadius: 10,
    borderWidth: 0,
  },
  textInput: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 12,
    fontSize: 16,
    borderRadius: 10,
    fontFamily: "ManropeMedium",
    height: 50,
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
    backgroundColor: "#6B21A8",
  },
  quickButtonText: {
    fontSize: 16,
    fontFamily: "ManropeMedium",
    color: "#fff",
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
  bottomButton: {
    paddingVertical: 15,
    marginTop: "60%",
  },
});
