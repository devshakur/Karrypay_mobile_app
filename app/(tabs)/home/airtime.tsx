import { useTheme } from "@/theme/ThemeProvider";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import DropDownPicker from "react-native-dropdown-picker";
import Carousel from "@/components/Carousel";
import Button from "@/components/Button";
import BottomModal from "@/components/modals/BottomModal";
import FaceAuthModal from "@/components/AuthModals/FaceAuthModal";
import PasswordAuthModal from "@/components/AuthModals/PswdAuthModal";
import FingerAuthModal from "@/components/AuthModals/FingerAuthModal";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "@/components/screens/ui/buttons/PrimaryButton";

export default function Airtime() {
  const { theme, isDark } = useTheme();
  const router = useRouter();

  // Network dropdown state
  const [open, setOpen] = useState(false);
  const [network, setNetwork] = useState(null);
  const [isopen, setIsOpen] = useState(false);
  const [isFace, setIsFace] = useState(false);
  const [isPswd, setIsPswd] = useState(false);
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

  const quickAmounts = [50, 100, 200, 500];

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
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          // keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 20} // adjust this number until button clears keyboard
        >
          <View style={styles.header}>
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color={theme.colors.text}
            />
            <Text style={[styles.skipText, { color: theme.colors.primary }]}>
              Airtime
            </Text>
          </View>
          {/* Content */}
          <View style={{ flex: 1 }}>
            {/* Header */}

            {/* Phone Number Row */}
            <View style={styles.section}>
              <View style={styles.inputRow}>
                <View style={[styles.dropdownBox]}>
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
                      <Ionicons
                        name="chevron-up"
                        size={18}
                        color={isDark ? "#fff" : "#333"}
                      />
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

            {/* Amount Row */}
            <View style={styles.section2}>
              <View style={styles.inputRow}>
                <View
                  style={[styles.currencyBox, { backgroundColor: "#333333" }]}
                >
                  <Text style={styles.currencyText}>NGN</Text>
                </View>
                <TextInput
                  style={[
                    styles.textInput,
                    { backgroundColor: "#333333" },
                    { color: theme.colors.text },
                  ]}
                  placeholder="0.00"
                  placeholderTextColor="#777"
                  keyboardType="numeric"
                  value={amount}
                  onChangeText={setAmount}
                />
              </View>
            </View>

            {/* Quick Amount Buttons */}
            <View style={styles.quickButtonsRow}>
              {quickAmounts.map((amt) => (
                <TouchableOpacity
                  key={amt}
                  style={[
                    styles.quickButton,
                    amount === String(amt) && styles.quickButtonActive,
                    { backgroundColor: "#333333" },
                  ]}
                  onPress={() => setAmount(String(amt))}
                >
                  <Text
                    style={[
                      styles.quickButtonText,
                      amount === String(amt) && styles.quickButtonTextActive,
                    ]}
                  >
                    ₦{amt}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <LinearGradient
              colors={["#8E44AD", "#5B2C6F", "#1E1E1E"]} // charcoal → purple gradient
              start={{ x: 1, y: 0 }} // top-left
              end={{ x: 1, y: 1 }} // bottom-right
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
              <Carousel total={3} current={0} />
            </View>
          </View>
          {/* Fixed Bottom Button */}
          <View style={styles.bottomButton}>
            <PrimaryButton
              title="Next"
              style={{ height: 50, backgroundColor: "#5B2C6F" }}
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
                ₦100.00
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
              title: "Airtime Purchase Failed",
              message:
                "We couldn’t complete your airtime purchase at the moment.",
              retryPath: "/(tabs)/home/airtime",
            }}
            successConfig={{
              title: "Airtime Purchase",
              message:
                "You’ve successfully recharged ₦1,000 to 0803 123 4567 (MTN).Your airtime is on its way and should reflect shortly. Thank you for using KarryPay..",
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
    padding: 15,
  },
  header: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "10%",
  },
  skipText: {
    width: "100%",
    fontFamily: "ManropeSemiBold",
    fontSize: 16,
    textAlign: "center",
  },
  section: {
    marginTop: 40,
    zIndex: 10,
  },
  section2: {
    marginTop: 30,
    zIndex: 10,
  },
  card2: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    paddingHorizontal: 10,
    marginTop: 25,
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
    backgroundColor: "#333333",
    borderRadius: 17,
    borderWidth: 0,
    height: 50,
  },
  dropdownContainer: {
    backgroundColor: "#333333",
    borderRadius: 17,
    borderWidth: 0,
  },
  textInput: {
    flex: 1,
    backgroundColor: "#333333",
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
  quickButtonsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  quickButton: {
    backgroundColor: "#F3F4F6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 14,
    margin: 5,
  },
  quickButtonActive: {
    backgroundColor: "#2E358F",
  },
  quickButtonText: {
    fontSize: 14,
    fontFamily: "ManropeMedium",
    color: "#111",
  },
  quickButtonTextActive: {
    color: "#fff",
  },
  bottomButton: {
    paddingVertical: -25,

    marginBottom: 40,
  },
  payBillsCard: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 16,
  },
  payTitle: { fontSize: 18, fontFamily: "ManropeSemiBold", color: "#fff" },
  paySubtitle: {
    fontSize: 14,
    fontFamily: "ManropeMedium",
    color: "rgba(255,255,255,0.7)",
  },
});
