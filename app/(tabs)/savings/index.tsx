import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import QuickCards from "@/components/QuickCards";

export default function Savings() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#A1BCFF", "#EDF4FF"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.header}
      >
        <View style={styles.content}>
          <Text
            style={{
              fontFamily: "ManropeMedium",
              fontSize: 16,
              color: "#6B7280",
              marginTop: 16,
            }}
          >
            Total Savings
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "ManropeMedium",
                fontSize: 30,
                color: "#1f1f1f",
              }}
            >
              ₦5000.00
            </Text>
            <MaterialIcons name="remove-red-eye" size={24} color="black" />
          </View>
          <TouchableOpacity style={styles.button}>
            <View style={styles.btncontent}>
              <AntDesign name="plus" size={20} color="black" />
              <Text style={styles.text}>Add Savings</Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <View style={{ marginTop: 20, padding: 15 }}>
        <Text
          style={{ fontFamily: "ManropeMedium", fontSize: 16, color: "#fff" }}
        >
          Savings Plans
        </Text>
        <QuickCards />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",
  },
  header: {
    width: "100%",
    height: 212,
    borderRadius: 24,
    padding: 24,
  },
  content: {
    marginTop: 10,
  },
  btncontent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  button: {
    backgroundColor: "#7C82E0",
    paddingVertical: 15,
    width: "40%",
    paddingHorizontal: 8,
    borderRadius: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 12,
  },
  text: {
    fontSize: 13,
    fontFamily: "ManropeMedium",
    color: "#111827",
  },
});
