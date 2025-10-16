import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

type SettingItem = {
  id: string;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  path?: string;
};

const settingsData: SettingItem[] = [
  {
    id: "1",
    name: "Profile Settings",
    icon: "person-circle-outline",
    path: "/profile/profileSetting",
  },
  {
    id: "2",
    name: "KYC Upgrade",
    icon: "shield-checkmark-outline",
    path: "/profile/prices",
  },

  {
    id: "4",
    name: "Account Security",
    icon: "lock-closed-outline",
    path: "/profile/appSecurity",
  },
  {
    id: "5",
    name: "App Settings",
    icon: "settings-outline",
    path: "/profile/appSettings",
  },
];

const supportData: SettingItem[] = [
  { id: "1", name: "Contact Support", icon: "headset-outline", path: "/" },
  { id: "2", name: "Terms & Conditions", icon: "bug-outline", path: "/" },
  { id: "4", name: "Privacy Policy", icon: "notifications-outline", path: "/" },
  { id: "5", name: "About us", icon: "information-circle-outline", path: "/" },
  { id: "6", name: "Logout", icon: "log-out-outline", path: "/" },
];

export default function Profile() {
  const router = useRouter();
  return (
    <LinearGradient
      colors={["#1F1F1F", "#1F1F1F"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, padding: 10, marginTop: 20 }}>
        <View
          style={{
            backgroundColor: "#2A2A2A",
            padding: 10,
            width: "100%",
            borderRadius: 14,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Image
                source={require("../../../assets/images/splash2.png")}
                style={{ width: 40, height: 40, borderRadius: 20 }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "ManropeSemiBold",
                    color: "#fff",
                  }}
                >
                  Shakur Khan
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "ManropeMedium",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  Tier 1
                </Text>
              </View>
            </View>
            <View style={{ marginLeft: "auto" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#333",
                  paddingHorizontal: 12,
                  borderWidth: 1,
                  borderColor: "#7C82E0",
                  paddingVertical: 10,
                  borderRadius: 24,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <MaterialCommunityIcons
                  name="star-plus-outline"
                  size={24}
                  color="#7C82E0"
                />
                <Text style={{ color: "#7C82E0" }}>Upgrade</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          {settingsData.map((item) => (
            <TouchableOpacity
              onPress={() => item.path && router.push(item.path as any)}
              key={item.id}
              style={styles.item}
            >
              <View style={styles.leftSection}>
                <Ionicons name={item.icon} size={20} color="#fff" />
                <Text style={styles.text}>{item.name}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#888" />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          {supportData.map((item) => (
            <TouchableOpacity key={item.id} style={styles.item}>
              <View style={styles.leftSection}>
                <Ionicons name={item.icon} size={20} color="#fff" />
                <Text style={styles.text}>{item.name}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#888" />
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A2A2A",
    borderRadius: 16,
    paddingVertical: 16,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "ManropeMedium",
  },
});
