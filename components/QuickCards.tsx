import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const itemsList = [
  {
    name: "KarrySave Plan",
    desc: "Choose a KarrySave Plan",
    backgroundColor: "#0D6297",
    iconbg: "#E0F2FE",
    path: "/savings/savingsDetails",
  },
  {
    name: "Flex Save",
    desc: "Withdraw anytime.",
    backgroundColor: "#DD6202",
    iconbg: "#FFEFC6",
    path: "/savings/flexSave",
  },
  {
    name: "Locked Save",
    desc: "Set withdrawal date.",
    backgroundColor: "#C62808",
    iconbg: "#FFE8D4",
    path: "/savings/lockedSave",
  },
];

export default function QuickCards() {
  const router = useRouter();
  return (
    <View style={{ flexDirection: "column", gap: 15, marginTop: 10 }}>
      {itemsList.map((item, id) => (
        <TouchableOpacity
          onPress={() => router.push(item.path as any)}
          key={id}
          style={{
            height: 78,
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 15,
            padding: 12,
            backgroundColor: item.backgroundColor,
            borderRadius: 14,
          }}
        >
          <View
            style={{
              height: 44,
              width: 44,
              borderRadius: 22,
              backgroundColor: item.iconbg,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="save-outline"
              size={24}
              color={item.backgroundColor}
            />
          </View>
          <View>
            <Text
              style={{
                color: "#fff",
                fontFamily: "ManropeSemiBold",
                fontSize: 16,
                marginBottom: 4,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                color: "#fff",
                fontFamily: "ManropeRegular",
                fontSize: 12,
              }}
            >
              {item.desc}
            </Text>
          </View>
          <View style={{ marginLeft: "auto" }}>
            <Ionicons name="chevron-forward-outline" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
