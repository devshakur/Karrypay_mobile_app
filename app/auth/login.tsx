import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import PrimaryButton from "../../components/screens/ui/buttons/PrimaryButton";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);

  const sendCode = () => {
    router.push("/auth/otp");
  };

  return (
    <LinearGradient
      colors={["#000000", "#13031a", "#241036"]}
      locations={[0, 0.45, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <StatusBar hidden={false} barStyle={"light-content"} />
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={{ flex: 1, padding: 15 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Ionicons
                  onPress={() => router.back()}
                  name="chevron-back"
                  size={24}
                  color="#fff"
                />
                <Text style={styles.headerTitle}>Create account</Text>
              </View>

              <View style={{ paddingHorizontal: 5, marginTop: 30 }}>
                <Text style={styles.title}>Welcome back</Text>
                <Text style={styles.subtitle}>
                  Please enter your phone number
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 35,
                }}
              >
                <View style={styles.countryBox}>
                  <Text style={{ fontSize: 20 }}>🇳🇬</Text>
                  <Text style={styles.countryCode}>234</Text>
                </View>

                <TextInput
                  style={styles.input}
                  placeholder="(999) 999-9999"
                  placeholderTextColor="rgba(255,255,255,0.5)"
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={setPhone}
                />
              </View>
            </View>
          </ScrollView>

          <View style={{ alignItems: "center", marginBottom: 45 }}>
            <PrimaryButton
              onPress={() => {
                if (phone.length === 10) sendCode();
              }}
              title="Login"
              style={{
                width: width < 450 ? 350 : 400,
                height: 55,
                opacity: phone.length === 10 ? 1 : 0.6,
              }}
              textStyle={{ fontWeight: "600", fontFamily: "ManropeMedium" }}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#1f1f1f",
  },
  headerTitle: {
    color: "#8b5cf6",
    fontFamily: "ManropeSemiBold",
    fontWeight: "600",
    fontSize: 16,
  },
  title: {
    color: "#fff",
    fontFamily: "ManropeSemiBold",
    fontWeight: "600",
    fontSize: 24,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: "ManropeMedium",
    color: "rgba(255,255,255,0.8)",
  },
  countryBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(96, 43, 81, 0.5)",
    paddingHorizontal: 10,
    height: 50,
    marginRight: 10,
    flex: 0.2,
    justifyContent: "center",
  },
  countryCode: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(255,255,255,0.7)",
    fontFamily: "ManropeRegular",
  },
  input: {
    flex: 0.8,
    backgroundColor: "rgba(231, 133, 204, 0.03)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(96, 43, 81, 0.5)",
    paddingHorizontal: 10,
    height: 48,
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
    fontFamily: "ManropeRegular",
  },
  privacyText: {
    fontFamily: "ManropeRegular",
    marginTop: 10,
    fontWeight: "500",
    fontSize: 12,
    color: "rgba(255,255,255,0.85)",
    flex: 1,
  },
});
