import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import PrimaryButton from "@/components/screens/ui/buttons/PrimaryButton";
import CustomButton from "@/components/customButton";
import { useRouter } from "expo-router";

export default function Cards() {
  const { theme } = useTheme();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const actions = [
    {
      id: 1,
      text: "Safe & secure transactions.",
      icon: "lock",
    },
    {
      id: 2,
      text: "Works globally online.",
      icon: "globe",
    },
    {
      id: 3,
      text: "Instant activation.",
      icon: "light-up",
    },
  ];
  return (
    <LinearGradient
      colors={["#1F1F1F", "#1F1F1F"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={[styles.container]}>
        <View>
          <Text
            style={{
              marginTop: 15,
              fontSize: 24,
              fontFamily: "ManropeMedium",
              color: "#fff",
            }}
          >
            Meet KarryCard
          </Text>
          <Text
            style={{
              fontSize: 14,
              paddingVertical: 10,
              fontFamily: "ManropeRegular",
              color: "#fff",
            }}
          >
            Your secure, fast, and convenient virtual card for online payments
            and subscriptions — anywhere, anytime.
          </Text>
        </View>
        <View style={{ padding: 5 }}>
          <Image
            source={require("@/assets/images/karrycard.png")}
            style={{ width: "100%", height: 200 }}
            resizeMode="contain"
          />
        </View>
        <View>
          {actions.map((act) => (
            <View
              key={act.id}
              style={{
                flexDirection: "row",
                padding: 5,
                alignItems: "center",
                gap: 8,
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#E6E7FA",
                }}
              >
                <Entypo name={act.icon} size={18} color="#2E358F" />
              </View>
              <Text
                style={{
                  fontFamily: "ManropeMedium",
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                {act.text}
              </Text>
            </View>
          ))}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 15,
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
              One-time setup fee
            </Text>
          </View>
          <Text
            style={{
              fontWeight: "600",
              fontFamily: "ManropeSemiBold",
              color: theme.colors.text,
            }}
          >
            ₦1000
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            gap: 8,
            marginTop: 30,
          }}
        >
          <TouchableOpacity onPress={() => setChecked(!checked)}>
            {checked ? (
              <MaterialCommunityIcons
                name="checkbox-multiple-marked"
                size={24}
                color="#8b5cf6"
              />
            ) : (
              <MaterialCommunityIcons
                name="checkbox-multiple-blank-outline"
                size={20}
                color="#8b5cf6"
              />
            )}
          </TouchableOpacity>

          <Text style={styles.privacyText}>
            I have read, understood and agreed to proceed.
          </Text>
        </View>
        <CustomButton
          title="Get My Virtual Card"
          style={{ height: 55 }}
          onPress={() => router.push("/(tabs)/cards/viewCards")}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 15,
    paddingVertical: 15,
  },
  privacyText: {
    color: "#fff",
    marginTop: "10%",
    marginBottom: 3,
    fontSize: 12,
  },
});
