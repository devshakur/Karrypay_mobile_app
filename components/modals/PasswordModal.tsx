import { StyleSheet, Text, View, Image, Modal } from "react-native";
import React from "react";
import Button from "@/components/Button";
import LoginOtp from "../LoginOtp";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/theme/ThemeProvider";

type PswdModalProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PasswordModal({ visible, setVisible }: PswdModalProps) {
  const router = useRouter();
  const { theme, isDark } = useTheme();

  const Login = () => {
    setVisible(false);
    setTimeout(() => {
      router.push("/(tabs)/home" as any);
    }, 300);
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}
      statusBarTranslucent={true} // ✅ important
    >
      {/* SafeAreaView with edges={[]} ensures overlay covers statusbar too */}
      <SafeAreaView style={styles.overlay} edges={[]}>
        {/* Floating Logo */}
        <Image
          source={require("../../assets/images/karrypay.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Modal Box */}
        <View style={[styles.modalBox, { backgroundColor: "#1F1F1F" }]}>
          <View style={{ width: 180, alignItems: "flex-start" }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "ManropeSemiBold",
                marginBottom: 25,
                color: "#fff",
              }}
            >
              Use password
            </Text>
          </View>

          <View
            style={{ flex: 1, alignItems: "center", paddingHorizontal: 20 }}
          >
            <LoginOtp />
          </View>

          <View
            style={{
              alignItems: "center",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <Button
              title="Log in"
              backgroundColor={isDark ? "#7C82E0" : "#2E358F"}
              textColor="#fff"
              style={{ width: 300, height: 55 }}
              onPress={() => Login()}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end", // keep modal at bottom
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)", // dim background
  },

  logo: {
    position: "absolute",
    top: "12%",
    width: 180,
    height: 180,
    zIndex: 2,
  },

  modalBox: {
    width: 378,
    height: 416,
    marginBottom: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    padding: 20,
    zIndex: 1,
  },
});
