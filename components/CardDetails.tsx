import { StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export default function CardDetails() {
  return (
    <LinearGradient
      colors={["#241036", "#3D3D3D", "#5B2C6F"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flexDirection: "column",

        padding: 10,
        borderRadius: 10,
      }}
    >
      <View>
        <Text
          style={{
            color: "#fff",
            fontFamily: "ManropeMedium",
            marginBottom: 10,
          }}
        >
          Card Details
        </Text>
        <View style={{}}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#6B7280", fontFamily: "ManropeMedium" }}>
              Card Number:
            </Text>
            <View
              style={{ flexDirection: "row", gap: 3, alignItems: "center" }}
            >
              <Text style={{ color: "#fff", fontFamily: "ManropeMedium" }}>
                505673562882929
              </Text>
              <Feather name="copy" size={14} color="white" />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={{ color: "#6B7280", fontFamily: "ManropeMedium" }}>
              Account Number:
            </Text>
            <View
              style={{ flexDirection: "row", gap: 3, alignItems: "center" }}
            >
              <Text style={{ color: "#fff", fontFamily: "ManropeMedium" }}>
                7083175021
              </Text>
              <Feather name="copy" size={14} color="white" />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={{ color: "#6B7280", fontFamily: "ManropeMedium" }}>
              expiry Date:
            </Text>

            <Text style={{ color: "#fff", fontFamily: "ManropeMedium" }}>
              06/30
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={{ color: "#6B7280", fontFamily: "ManropeMedium" }}>
              cvv:
            </Text>

            <Text style={{ color: "#fff", fontFamily: "ManropeMedium" }}>
              768
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
