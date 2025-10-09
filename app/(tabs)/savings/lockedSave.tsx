import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import React from "react";
import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const transactions = [
  {
    id: "1",
    name: "Back-to-School Funds",
    description: "Unlocks Sept 15, 2025",
    amount: "₦50,500",
    time: "Active",
  },
  {
    id: "2",
    name: "December Shopping",
    description: "Unlocks Dec 17, 2025",
    amount: "₦45000",
    time: "Active",
  },
  {
    id: "3",
    name: "Emergency Lock",
    description: "Unlocks Feb 15, 2025",
    amount: "₦80,500",
    time: "Completed",
  },

  // Add more transactions here
];

export default function LockedSave() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ backgroundColor: "#1F1F1F", flex: 1 }}>
      <View
        style={{
          padding: 15,
          width: "70%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back-sharp" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "#fff" }}>My SafeLock List</Text>
      </View>
      <View style={styles.container}>
        {transactions.map((item) => (
          <View
            key={item.id}
            style={{
              backgroundColor: "#2A2A2A",
              padding: 14,
              borderRadius: 15,
              flexDirection: "row",

              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", gap: 8 }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  backgroundColor: "#26295B",
                }}
              >
                <MaterialIcons name="lock-outline" size={22} color="white" />
              </View>
              <View>
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "ManropeMedium",
                    fontSize: 16,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "ManropeMedium",
                    fontSize: 12,
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
            <View style={{ marginLeft: "auto" }}>
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "ManropeMedium",
                  fontSize: 14,
                }}
              >
                {item.amount}
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "ManropeMedium",
                  fontSize: 12,
                  textAlign: "right",
                }}
              >
                {item.time}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 15,

    gap: 15,
  },
});
