import { StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import CustomButton from "@/components/customButton";
export default function ProfileSetting() {
  const router = useRouter();
  return (
    <LinearGradient
      colors={["#1F1F1F", "#1F1F1F"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, padding: 10, marginTop: 5 }}>
        <View style={styles.header}>
          <Ionicons
            onPress={() => router.back()}
            name="chevron-back"
            size={24}
            color="white"
          />
          <Text style={[styles.skipText, { color: "white" }]}>
            Profile Settings
          </Text>
        </View>
        <View style={{ marginTop: 30, padding: 3 }}>
          <View>
            <Text style={[styles.label, { color: "#fff" }]}>User ID</Text>
            <TextInput
              style={[
                styles.input,
                { backgroundColor: "#333333" },
                { color: "#fff" },
              ]}
              placeholder="Enter Your ID"
              keyboardType="numeric"
              placeholderTextColor="#5E5E5E"
            />
          </View>
          <View>
            <Text style={[styles.label, { color: "#fff" }]}>Name</Text>
            <TextInput
              style={[
                styles.input,
                { backgroundColor: "#333333" },
                { color: "#fff" },
              ]}
              placeholder="Enter Your Name"
              keyboardType="default"
              placeholderTextColor="#5E5E5E"
            />
          </View>
          <View>
            <Text style={[styles.label, { color: "#fff" }]}>Email</Text>
            <TextInput
              style={[
                styles.input,
                { backgroundColor: "#333333" },
                { color: "#fff" },
              ]}
              placeholder="Enter Your Email Address"
              keyboardType="email-address"
              placeholderTextColor="#5E5E5E"
            />
          </View>
          <View>
            <Text style={[styles.label, { color: "#fff" }]}>Phone Number</Text>
            <TextInput
              style={[
                styles.input,
                { backgroundColor: "#333333" },
                { color: "#fff" },
              ]}
              placeholder="Enter Your Phone Number"
              keyboardType="phone-pad"
              placeholderTextColor="#5E5E5E"
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <CustomButton
              title="Edit Profile"
              onPress={() => router.push("/profile")}
              style={{ height: 55 }}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  skipText: {
    width: "100%",
    fontFamily: "ManropeSemiBold",
    fontSize: 16,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontFamily: "ManropeMedium",
    marginBottom: 4,
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
    fontSize: 14,
    marginBottom: 12,
  },
});
