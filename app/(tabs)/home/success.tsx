import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Button from "@/components/Button";
import {
  useRouter,
  useLocalSearchParams,
  RelativePathString,
} from "expo-router";
import { useTheme } from "@/theme/ThemeProvider";

export default function Success() {
  const router = useRouter();
  const { theme, isDark } = useTheme();
  const { width } = Dimensions.get("window");

  // ✅ get params
  const { title, message, nextPath } = useLocalSearchParams<{
    title?: string;
    message?: string;
    nextPath?: any;
  }>();

  const handleShare = () => {
    console.log("Share Receipt tapped");
    // Later: use Share API
  };

  const handleView = () => {
    console.log("View Receipt tapped");
    router.push("/home");
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* Centered content */}
      <View style={styles.content}>
        <View
          style={[
            styles.iconWrapper,
            {
              backgroundColor: isDark ? theme.colors.primary + "20" : "#DCFCE7",
            },
          ]}
        >
          <AntDesign
            name="check"
            size={32}
            color={isDark ? theme.colors.primary : "green"}
          />
        </View>

        <Text style={[styles.title, { color: theme.colors.text }]}>
          {title || "Congratulations"}
        </Text>
        <Text
          style={[
            styles.subtitle,
            { color: isDark ? theme.colors.text : "#374151" },
          ]}
        >
          {message ||
            "Your identity has been verified. Now you can set up your account."}
        </Text>
      </View>

      {/* Bottom section */}
      <View style={styles.footer}>
        {/* Action row */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionBtn} onPress={handleShare}>
            <Feather
              name="share-2"
              size={22}
              color={isDark ? theme.colors.primary : "#111"}
            />
            <Text
              style={[
                styles.actionText,
                { color: isDark ? theme.colors.primary : "#111" },
              ]}
            >
              Share Receipt
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn} onPress={handleView}>
            <Feather
              name="file-text"
              size={22}
              color={isDark ? theme.colors.primary : "#111"}
            />
            <Text
              style={[
                styles.actionText,
                { color: isDark ? theme.colors.primary : "#111" },
              ]}
            >
              View Receipt
            </Text>
          </TouchableOpacity>
        </View>

        {/* Main button */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 80,
    marginBottom: 40,
  },
  content: {
    flex: 1,
    marginTop: "30%",
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
    fontSize: 24,
    marginTop: -3,
    fontFamily: "ManropeMedium",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
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
  actionRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
  },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 18,
  },
  actionText: {
    fontSize: 14,
    fontFamily: "ManropeMedium",
  },
});
