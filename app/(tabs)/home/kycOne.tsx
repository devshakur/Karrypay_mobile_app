import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import CustomButton from "@/components/customButton";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateInput from "@/components/DateInputs";

export default function KycOne() {
  const router = useRouter();
  return (
    <LinearGradient
      colors={["#1F1F1F", "#1F1F1F", "#1F1F1F"]}
      locations={[0, 0.45, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, padding: 10 }}
    >
      <SafeAreaView>
        <ScrollView>
          {/* Header */}
          <View style={styles.header}>
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color={"#fff"}
            />
            <Text style={[styles.skipText, { color: "#fff" }]}>
              KYC Verification
            </Text>
          </View>
          <View style={{ padding: 5, marginTop: 10 }}>
            <Text
              style={{
                fontFamily: "ManropeSemiBold",
                fontSize: 18,
                color: "#fff",
              }}
            >
              Tell us about yourself
            </Text>
            <Text
              style={{
                color: "#fff",
                marginTop: 7,
                fontSize: 14,
                fontFamily: "ManropeMedium",
              }}
            >
              Make sure you enter your informaton exactly as it appears on your
              government-issued ID.
            </Text>
          </View>
          <View style={styles.inputGroup}>
            <View>
              <Text style={[styles.label, { color: "#fff" }]}>Name</Text>
              <TextInput
                style={[styles.input, { backgroundColor: "#333333" }]}
                placeholder="Enter your full name"
                keyboardType="default"
                placeholderTextColor="#5E5E5E"
              />
            </View>
            <View>
              <Text style={[styles.label, { color: "#fff" }]}>
                Email Address
              </Text>
              <TextInput
                style={[styles.input, { backgroundColor: "#333333" }]}
                placeholder="Enter your email address"
                keyboardType="default"
                placeholderTextColor="#5E5E5E"
              />
            </View>
            <View>
              <Text style={[styles.label, { color: "#fff" }]}>
                Enter Your BVN
              </Text>
              <TextInput
                style={[styles.input, { backgroundColor: "#333333" }]}
                placeholder="Enter your BVN"
                keyboardType="default"
                placeholderTextColor="#5E5E5E"
              />
            </View>
            <DateInput
              label="Date of Birth"
              onSelectDate={(date: any) => console.log(date)}
            />
            <View style={[styles.inputGroup, { marginTop: 15 }]}>
              <Text style={[styles.label, { color: "#fff" }]}>State</Text>
              <TouchableOpacity
                style={[styles.inputButton, { backgroundColor: "#333" }]}
                //   onPress={() => setShowBillerModal(true)}
              >
                <Text style={{ color: "#fff" }}>Choose State</Text>
                <Ionicons name="chevron-down" size={20} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={[styles.inputGroup, { marginTop: 15 }]}>
              <Text style={[styles.label, { color: "#fff" }]}>
                Current Address
              </Text>
              <TextInput
                style={[styles.input, { backgroundColor: "#333333" }]}
                placeholder="Enter your current address"
                keyboardType="default"
                placeholderTextColor="#5E5E5E"
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                gap: 10,
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              <CustomButton
                title="Continue"
                style={{ height: 55 }}
                onPress={() => router.push("/home/kycTwo")}
              />
              <CustomButton
                title="Cancel"
                style={{ height: 55, backgroundColor: "#333" }}
                onPress={() => router.push("/home/kycTwo")}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  skipText: {
    width: "100%",
    fontFamily: "ManropeSemiBold",
    fontSize: 16,
    textAlign: "center",
  },
  inputGroup: {
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
    fontSize: 14,
    marginBottom: 12,
    color: "#fff",
  },
  inputButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
});
