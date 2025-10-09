import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { useTheme } from "@/theme/ThemeProvider";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "@/components/screens/ui/buttons/PrimaryButton";

export default function Success() {
  const router = useRouter();
  const { width } = Dimensions.get("window");
  const { isDark } = useTheme();

  const handleSetup = () => {
    router.push("/setup/profile");
  };

  return (
    <LinearGradient
      colors={["#000000", "#13031a", "#241036"]}
      locations={[0, 0.45, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* Centered content */}
      <View style={styles.content}>
        <View
          style={[
            styles.iconWrapper,
            {
              backgroundColor: isDark
                ? "rgba(124,106,174,0.25)" // soft purple glow in dark
                : "#DCFCE7", // light green in light
            },
          ]}
        >
          <AntDesign
            name="check"
            size={32}
            color={isDark ? "#9D7AE0" : "green"} // purple check on dark, green on light
          />
        </View>
        <Text style={[styles.title, { color: "#FFFFFF" }]}>
          Congratulations
        </Text>
        <Text style={[styles.subtitle, { color: "rgba(255,255,255,0.8)" }]}>
          Your identity has been verified. Now you can set up your account.
        </Text>
      </View>

      {/* Bottom button */}
      <View style={styles.footer}>
        <PrimaryButton
          title="Set Up Now"
          onPress={handleSetup}
          disabled={false}
          style={{
            paddingVertical: width < 470 ? 15 : 25,
            marginBottom: width < 470 ? 15 : 45,
          }}
        />
        {/* <Button
          title="Set Up Now"
          onPress={handleSetup}
          disabled={false}
          style={{
            paddingVertical: width < 470 ? 15 : 25,
            marginBottom: width < 470 ? 15 : 45,
          }}
        /> */}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    marginTop: -15,
    fontFamily: "ManropeMedium",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontFamily: "ManropeMedium",
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  footer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
