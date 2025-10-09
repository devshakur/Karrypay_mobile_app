import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Button from "@/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import * as LocalAuthentication from "expo-local-authentication";
import { useRouter } from "expo-router";
import { useTheme } from "@/theme/ThemeProvider";

type FingerModalProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  switchToPassword: () => void;
};

export default function FingerPrintModal({
  visible,
  setVisible,
  switchToPassword,
}: FingerModalProps) {
  const { theme } = useTheme();
  const router = useRouter();
  const lineAnim = useRef(new Animated.Value(0)).current;
  const [showScanLine, setShowScanLine] = React.useState(false);

  // Handle biometric auth
  useEffect(() => {
    if (visible) handleFingerprint();
  }, [visible]);

  const handleFingerprint = async () => {
    try {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      if (!hasHardware) {
        alert("Fingerprint hardware not available.");
        return;
      }

      const supportedTypes =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
      if (
        !supportedTypes.includes(
          LocalAuthentication.AuthenticationType.FINGERPRINT
        )
      ) {
        alert("Fingerprint authentication not supported on this device.");
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate with fingerprint",
        fallbackLabel: "Use Passcode",
      });

      if (result.success) {
        // ✅ Start the scanning animation after native modal closes
        setShowScanLine(true);
        animateScanLine();
      } else {
        alert("Fingerprint authentication failed.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Animate the scanning line up and down
  const animateScanLine = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(lineAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(lineAnim, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Stop animation after ~3 seconds and navigate
    setTimeout(() => {
      setVisible(false);
      router.push("/(tabs)/home");
    }, 3000);
  };

  const translateY = lineAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 160], // height range for scanning line movement
  });

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}
      statusBarTranslucent
    >
      <SafeAreaView style={styles.overlay} edges={[]}>
        <Image
          source={require("../../assets/images/karrypay.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={[styles.modalBox, { backgroundColor: "#1F1F1F" }]}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "ManropeSemiBold",
              marginBottom: 25,
              color: "#fff",
            }}
          >
            Log in with
          </Text>

          <View style={styles.fingerprintContainer}>
            <View style={styles.fingerprintCircle}>
              <Image
                source={require("../../assets/icons/fingerprintdark.png")}
                resizeMode="contain"
                style={{ width: 133, height: 133 }}
              />
              {showScanLine && (
                <Animated.View
                  style={[
                    styles.scanLine,
                    {
                      transform: [{ translateY }],
                    },
                  ]}
                />
              )}
            </View>
          </View>

          <View style={styles.footer}>
            <Button
              title="Use Password instead"
              backgroundColor="#333333"
              textColor="#fff"
              onPress={() => {
                setVisible(false);
                switchToPassword();
              }}
              style={{ width: 300, height: 55 }}
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
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  logo: {
    position: "absolute",
    top: "12%",
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
  },
  fingerprintContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fingerprintCircle: {
    height: 167,
    width: 167,
    backgroundColor: "#333333",
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  scanLine: {
    position: "absolute",
    width: "100%",
    height: 4,
    backgroundColor: "#00FF7F",
    opacity: 0.8,
    borderRadius: 2,
  },
  footer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
});
