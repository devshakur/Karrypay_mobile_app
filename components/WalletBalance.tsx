import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function WalletBalance() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            source={require("@/assets/images/Karry.png")}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontFamily: "ManropeMedium",
              color: "#999999",
            }}
          >
            Wallet Balance
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "600",
            fontFamily: "ManropeSemiBold",
            color: "#fff",
          }}
        >
          ₦1,580.29
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
