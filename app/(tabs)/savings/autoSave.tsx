import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import CustomButton from "@/components/customButton";

export default function AutoSave() {
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
        <Text style={{ color: "#fff" }}>AutoSave Settings</Text>
      </View>
      <View>
        <Text
          style={{
            color: "#fff",
            fontFamily: "ManropeMedium",
            fontSize: 14,
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}
        >
          Let KarrySave automatically deduct daily, weekly, or monthly. So you
          can build wealth without lifting a finger.
        </Text>
        <View style={{ padding: 8, flexDirection: "column", gap: 14 }}>
          <View style={[styles.inputGroup, { marginTop: 5 }]}>
            <Text style={[styles.label, { color: "#fff" }]}>
              How will you prefer to save?
            </Text>
            <TouchableOpacity
              style={[styles.inputButton, { backgroundColor: "#333333" }]}
              //   onPress={() => setShowBankModal(true)}
            >
              <Text style={{ color: "#888" }}>
                {/* {selectedBank || "Select Bank"} */} Select Bank
              </Text>
              <Ionicons name="chevron-down" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={{ color: "#fff", marginBottom: -10 }}>
            Amount to save
          </Text>
          <View style={styles.inputRow}>
            <View style={styles.currencyBox}>
              <Text style={styles.currencyText}>NGN</Text>
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="0.00"
              placeholderTextColor="#777"
              keyboardType="numeric"
            />
          </View>
          <View style={[styles.inputGroup, { marginTop: 5 }]}>
            <Text style={[styles.label, { color: "#fff" }]}>
              Preferred Time
            </Text>
            <TouchableOpacity
              style={[styles.inputButton, { backgroundColor: "#333333" }]}
              //   onPress={() => setShowBankModal(true)}
            >
              <Text style={{ color: "#888" }}>Select Preferred Time</Text>
              <Ionicons name="chevron-down" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={[styles.inputGroup, { marginTop: 5 }]}>
            <Text style={[styles.label, { color: "#fff" }]}>
              When do you want to Start
            </Text>
            <TouchableOpacity
              style={[styles.inputButton, { backgroundColor: "#333333" }]}
              //   onPress={() => setShowBankModal(true)}
            >
              <Text style={{ color: "#888" }}>Start Now</Text>
              <Ionicons name="chevron-down" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <CustomButton
              title="Save"
              textColor="#fff"
              style={{ width: "100%", height: 55 }}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    marginTop: 20,
    padding: 5,
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
  },
  inputButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  inputText: {
    fontSize: 14,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#333333",
    color: "#fff",
    paddingHorizontal: 12,
    fontSize: 16,
    borderRadius: 10,
    fontFamily: "ManropeMedium",
    height: 50,
  },
  currencyBox: {
    width: 60,
    backgroundColor: "#333333",
    height: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  currencyText: {
    fontSize: 16,
    fontFamily: "ManropeMedium",
    color: "#5E5E5E",
  },
});
