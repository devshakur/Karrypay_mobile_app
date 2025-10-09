import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import BottomModal from "./BottomModal";
import Feather from "@expo/vector-icons/Feather";
import { useTheme } from "@/theme/ThemeProvider";

export default function AddMoney({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isDark, theme } = useTheme();
  return (
    <BottomModal
      visible={visible}
      setVisible={setVisible}
      style={{ backgroundColor: isDark ? "#333" : "#fff" }}
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
            color: "#fff",
            fontSize: 14,
            fontFamily: "ManropeMedium",
          }}
        >
          Add Money
        </Text>
        <Text
          onPress={() => setVisible(false)}
          style={{
            color: "#fff",
            fontSize: 14,
            fontFamily: "ManropeMedium",
          }}
        >
          Cancel
        </Text>
      </View>
      <Text
        style={{
          marginTop: 18,
          fontSize: 14,
          fontFamily: "ManropeRegular",
          color: "#fff",
        }}
      >
        Transfer from your bank app to your KarryPay wallet using the account
        details below.
      </Text>
      <View
        style={{
          backgroundColor: "#F5F6FD",
          padding: 16,
          borderRadius: 8,
          marginTop: 30,
        }}
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
              fontSize: 14,
              fontFamily: "ManropeMedium",
              color: "#374151",
            }}
          >
            Account Name
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "ManropeMedium",
              color: "#000000",
            }}
          >
            Abdullahi Bello
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "ManropeMedium",
              color: "#374151",
            }}
          >
            Account Number:
          </Text>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "ManropeMedium",
                color: "#000000",
              }}
            >
              1234567890
            </Text>
            <TouchableOpacity>
              <Feather name="copy" size={14} color="#6B21A8" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "ManropeMedium",
              color: "#374151",
            }}
          >
            Bank Name:
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "ManropeMedium",
              color: "#000000",
            }}
          >
            Wema Bank
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        {/* Two side-by-side buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={{
              height: 53,
              width: "50%",
              justifyContent: "center",
              alignItems: "center",

              borderRadius: 30,
              backgroundColor: isDark ? theme.colors.background : "#F3F4F6",
            }}
          >
            <Text
              style={[
                styles.actionText,
                { color: isDark ? "#fff" : "#111827" },
              ]}
            >
              Copy
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 53,
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
              backgroundColor: "#6B21A8",
            }}
          >
            <Text
              style={{
                color: "#fff",
              }}
            >
              Share
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomModal>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    width: "100%",
  },
  actionBtn: {
    flexDirection: "row",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  actionText: {
    fontSize: 14,
    fontFamily: "ManropeMedium",
    color: "#2E358F",
  },
});
