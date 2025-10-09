import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { useTheme } from "@/theme/ThemeProvider";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "@/assets/svgs/logo";
import PrimaryButton from "@/components/screens/ui/buttons/PrimaryButton";
export default function Welcome() {
  const router = useRouter();
  const { theme, isDark } = useTheme();

  return (
    <LinearGradient
      colors={["#241036", "#13031a", "#241036"]}
      style={styles.gradient}
    >
      {/* Logo / Image */}
      <View>
        <Logo width={200} height={150} />
      </View>

      {/* Header / Welcome */}
      <View style={{ marginTop: -10, alignItems: "center" }}>
        {/* Celebration Badge */}
        <LinearGradient
          colors={["#4ADE80", "#16A34A"]}
          style={styles.iconWrapper}
        >
          <Text style={{ fontSize: 30 }}>🎉</Text>
        </LinearGradient>

        <View style={{ marginTop: 25 }}>
          <Text style={styles.title}>Welcome aboard, Yusuf!</Text>
        </View>

        <View style={{ marginTop: 8 }}>
          <Text style={styles.subtitle}>
            You can now fully enjoy your wallet.
          </Text>
        </View>
      </View>

      {/* Account Summary */}
      <View
        style={{ alignSelf: "center", paddingHorizontal: 20, marginTop: 40 }}
      >
        <Text style={styles.summaryTitle}>Account Summary</Text>

        <View style={styles.summaryCard}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.text1}>Account Name</Text>
            <Text style={styles.text2}>Yusuf Adam Baba</Text>
          </View>

          <View style={{ alignItems: "center", marginTop: 15 }}>
            <Text style={styles.text1}>Account Number</Text>
            <Text style={styles.text2}>7083175021</Text>
          </View>

          <View style={{ alignItems: "center", marginTop: 15 }}>
            <Text style={styles.text1}>DOB + Last 3 BVN</Text>
            <Text style={styles.text2}>04042004344</Text>
          </View>

          <View style={{ alignItems: "center", marginTop: 15 }}>
            <Text style={styles.text1}>Karrypay Account Tier</Text>
            <Text style={styles.text2}>Tier 1</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <PrimaryButton
          title="Get Started"
          onPress={() => router.push("/logins" as any)}
          style={{ width: 350, height: 55 }}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    resizeMode: "contain",
    height: 60,
    marginBottom: 20,
  },
  iconWrapper: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#4ADE80",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  title: {
    fontSize: 26,
    marginTop: -10,
    fontFamily: "ManropeSemiBold",
    textAlign: "center",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 15,
    fontFamily: "ManropeMedium",
    color: "rgba(255,255,255,0.7)",
  },
  summaryTitle: {
    fontSize: 16,
    fontFamily: "ManropeSemiBold",
    marginBottom: 15,
    textAlign: "center",
    color: "#FFFFFF",
  },
  summaryCard: {
    marginTop: 10,
    width: 360,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.08)", // glass effect
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    alignItems: "center",
  },
  text1: {
    fontFamily: "ManropeMedium",
    fontSize: 13,
    color: "rgba(255,255,255,0.6)",
  },
  text2: {
    fontFamily: "ManropeSemiBold",
    fontSize: 15,
    color: "#FFFFFF",
    marginTop: 4,
  },
  footer: {
    flex: 1,
    paddingVertical: 60,
    marginTop: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
