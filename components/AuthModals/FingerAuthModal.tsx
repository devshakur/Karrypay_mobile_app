import { StyleSheet, Text, View, Image, Modal, Pressable } from "react-native";
import React from "react";
import Button from "@/components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";

type FingerModalProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  switchToPassword: () => void;
};

export default function FingerAuthModal({
  visible,
  setVisible,
  switchToPassword,
}: FingerModalProps) {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          {/* Modal Box */}
          <View style={styles.modalBox}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "ManropeSemiBold",

                  color: "#111827",
                }}
              >
                Pay with fingerprint
              </Text>

              <Pressable onPress={() => setVisible(false)}>
                <Ionicons name="close" size={22} color="#6B7280" />
              </Pressable>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 40,
              }}
            >
              <View
                style={{
                  height: 167,
                  width: 163,
                  backgroundColor: "#F2F2F2CC",
                  borderRadius: 80,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/icons/fingerprintdark.png")}
                  resizeMode="contain"
                  style={{ width: 121, height: 121 }}
                />
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <Button
                title="Use Pin instead"
                backgroundColor="#F3F4F6"
                textColor="#111827"
                onPress={() => {
                  setVisible(false); // close this modal
                  switchToPassword(); // open password modal
                }}
                style={{ width: 300, height: 55 }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end", // bottom sheet
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)", // dim background
  },

  logo: {
    position: "absolute",
    top: "12%", // adjust how high it floats
    width: 180,
    height: 180,
    zIndex: 2,
  },

  modalBox: {
    width: 358,
    height: 416,
    marginBottom: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    padding: 20,
    // alignItems: "center",
    // justifyContent: "center",
    zIndex: 1,
  },

  closeBtn: {
    marginTop: 20,
    backgroundColor: "#2E358F",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },

  closeBtnText: { color: "#fff", fontWeight: "600" },
});
