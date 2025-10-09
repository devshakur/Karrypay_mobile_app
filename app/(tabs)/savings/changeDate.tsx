import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import CustomButton from "@/components/customButton";
import PasswordAuthModal from "@/components/AuthModals/PswdAuthModal";

export default function ChangeDate() {
  const router = useRouter();
  const [pin, setPin] = useState(false);
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
        <Text style={{ color: "#fff" }}>Withdrawal Date</Text>
      </View>
      <View>
        <Text
          style={{
            color: "#fff",
            fontFamily: "ManropeMedium",
            fontSize: 14,
            textAlign: "center",
            padding: 10,
          }}
        >
          Let KarrySave automatically deduct daily, weekly, or monthly. So you
          can build wealth without lifting a finger.
        </Text>
      </View>
      {/* Input Calender */}
      <View style={{ padding: 10 }}>
        <CustomButton
          onPress={() => setPin(true)}
          title="Save"
          textColor="#fff"
          style={{ width: "100%", height: 55 }}
        />
      </View>
      {pin && (
        <PasswordAuthModal
          visible={pin}
          setVisible={setPin}
          onPasswordSubmit={(pin) => {
            console.log("Entered PIN:", pin);
            router.push("/savings/savingsSuccess");
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
