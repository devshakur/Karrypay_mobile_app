import {
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  Text,
  View,
  Modal,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "@/components/Button";
import BottomModal from "@/components/modals/BottomModal";

import PasswordAuthModal from "@/components/AuthModals/PswdAuthModal";
import FaceAuthModal from "@/components/AuthModals/FaceAuthModal";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "@/components/screens/ui/buttons/PrimaryButton";

export default function AmountSection() {
  const { theme, isDark } = useTheme();
  const { width } = Dimensions.get("window");
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [isopen, setIsOpen] = useState(false);
  const [openPswd, setOpenPswd] = useState(false);

  const VerifyUser = () => {
    setOpen(false);
    setIsOpen(true);
  };
  const switchToPassword = () => {
    setIsOpen(false);
    setOpenPswd(true);
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
              color={theme.colors.text}
            />
            <Text style={[styles.skipText, { color: theme.colors.primary }]}>
              Send Money
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "10%",
              paddingHorizontal: 10,
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
                  backgroundColor: isDark ? "#444" : "#E6E7FA",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View>
                  <Image
                    source={require("@/assets/images/banks/opay.png")}
                    style={{ width: 40, height: 40, borderRadius: 8 }}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: "600",
                    fontFamily: "ManropeMedium",
                    color: theme.colors.text,
                  }}
                >
                  Abdulshakur Daud
                </Text>
                <Text
                  style={{
                    color: "#6B7280",
                    fontSize: 12,
                    fontFamily: "ManropeMedium",
                  }}
                >
                  Opay
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontWeight: "500",
                fontFamily: "ManropeMedium",
                color: theme.colors.text,
              }}
            >
              8129378618
            </Text>
          </View>
          {/** Amount */}
          <View style={styles.Amtcontainer}>
            {/* Amount Label */}
            <Text style={[styles.label, { color: theme.colors.text }]}>
              Amount
            </Text>
            <View style={styles.amountRow}>
              {/* Fixed NGN Box */}
              <View
                style={[styles.currencyBox, { backgroundColor: "#333333" }]}
              >
                <Text style={styles.currencyText}>NGN</Text>
              </View>

              {/* Amount Input */}
              <TextInput
                style={[
                  styles.amountInput,
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

            {/* Description Label */}
            <Text
              style={[
                styles.label,
                { marginTop: 20 },
                { color: theme.colors.text },
              ]}
            >
              Description
            </Text>
            <TextInput
              style={[
                styles.descriptionInput,
                { color: theme.colors.text },
                { backgroundColor: "#333333" },
              ]}
              placeholder="Add a note (optional)"
              placeholderTextColor="#777"
              value={description}
              onChangeText={setDescription}
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <PrimaryButton
              title="Send"
              style={{ height: width < 470 ? 50 : 70 }}
              onPress={() => setOpen(true)}
            />
          </View>
          {/* {Modal} */}
          {open && (
            <BottomModal
              visible={open}
              setVisible={setOpen}
              height={width < 470 ? 400 : 470}
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
                <Pressable onPress={() => setOpen(false)}>
                  <Ionicons name="close" size={22} color={theme.colors.text} />
                </Pressable>
              </View>

              {/* Amount Center */}
              <View
                style={{
                  marginTop: 20,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    color: theme.colors.text,
                    fontFamily: "ManropeSemiBold",
                  }}
                >
                  ₦50,000.00
                </Text>
              </View>

              {/* Recipient Row */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "10%",
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
                      backgroundColor: isDark ? "#444" : "#E6E7FA",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("@/assets/images/banks/opay.png")}
                      style={{ width: 40, height: 40, borderRadius: 8 }}
                      resizeMode="contain"
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontWeight: "600",
                        fontFamily: "ManropeMedium",
                        color: theme.colors.text,
                      }}
                    >
                      Abdulshakur Daud
                    </Text>
                    <Text
                      style={{
                        color: "#6B7280",
                        fontSize: 12,
                        fontFamily: "ManropeMedium",
                      }}
                    >
                      Opay
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontWeight: "500",
                    fontFamily: "ManropeMedium",
                    color: theme.colors.text,
                  }}
                >
                  8129378618
                </Text>
              </View>

              {/* Amount + Fee */}
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
                  ₦50,000
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
                <Text
                  style={{
                    fontFamily: "ManropeMedium",
                    color: theme.colors.text,
                  }}
                >
                  {" "}
                  ₦50
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
                  ₦100,000.00
                </Text>
              </View>

              {/* Button */}
              <View style={{ marginTop: 20 }}>
                <Button
                  title="Pay"
                  style={{ height: width < 470 ? 50 : 70 }}
                  onPress={VerifyUser}
                />
              </View>
            </BottomModal>
          )}
          {isopen && (
            <FaceAuthModal
              visible={isopen}
              setVisible={setIsOpen}
              switchToPassword={switchToPassword}
            />
          )}
          {openPswd && (
            <PasswordAuthModal
              visible={openPswd}
              setVisible={setOpenPswd}
              // switchToFace={switchToFace}
            />
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
  Amtcontainer: {
    paddingVertical: 30,
  },
  label: {
    fontSize: 14,
    fontFamily: "ManropeSemiBold",
    marginBottom: 6,
    color: "#111",
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencyBox: {
    flex: 0.16,
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 16,
    paddingVertical: 14,
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
  amountInput: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 12,
    fontSize: 16,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    fontFamily: "ManropeMedium",
    height: 50,
  },
  descriptionInput: {
    backgroundColor: "#F3F4F6",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 65,
    fontSize: 14,
    fontFamily: "ManropeMedium",
  },
});
