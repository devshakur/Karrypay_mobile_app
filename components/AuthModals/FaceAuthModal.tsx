import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Animated,
  Easing,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CameraView, useCameraPermissions } from "expo-camera";
import Button from "@/components/Button";
import { useTheme } from "@/theme/ThemeProvider";
import { useRouter } from "expo-router";

type FaceModalProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  switchToPassword: () => void;
};

export default function FaceModal({
  visible,
  setVisible,
  switchToPassword,
}: FaceModalProps) {
  const { theme } = useTheme();
  const router = useRouter();

  const [permission, requestPermission] = useCameraPermissions();
  const [cameraReady, setCameraReady] = useState(false);

  // Animation for scanning line
  const scanAnim = useRef(new Animated.Value(0)).current;

  // Request camera permission
  useEffect(() => {
    if (visible && !permission?.granted) {
      requestPermission();
    }
  }, [visible]);

  // Simulate successful face login
  useEffect(() => {
    if (visible && permission?.granted && cameraReady) {
      const timer = setTimeout(() => {
        setVisible(false);
        router.replace("/(tabs)/home/success");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [visible, permission?.granted, cameraReady]);

  // Start scanner animation
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(scanAnim, {
          toValue: 0,
          duration: 2000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // Interpolate vertical line movement
  const translateY = scanAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 160], // moves up & down within camera box
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
        {/* Floating Logo */}
        <Image
          source={require("../../assets/images/karrypay.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Modal Content */}
        <View style={[styles.modalBox, { backgroundColor: "#1F1F1F" }]}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "ManropeSemiBold",
              marginBottom: 25,
              color: "#fff",
              textAlign: "left",
            }}
          >
            Pay with Face ID
          </Text>

          {/* Camera Box */}
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View style={styles.cameraContainer}>
              {!permission ? (
                <Text style={{ color: "#fff" }}>
                  Requesting camera permission...
                </Text>
              ) : !permission.granted ? (
                <Text style={{ color: "#fff" }}>Camera permission denied</Text>
              ) : (
                <>
                  <CameraView
                    style={styles.camera}
                    facing="front"
                    onCameraReady={() => setCameraReady(true)}
                  />

                  {/* Green scanning line */}
                  <Animated.View
                    style={[
                      styles.scanLine,
                      {
                        transform: [{ translateY }],
                      },
                    ]}
                  />

                  {/* Dim overlay */}
                  <View style={styles.cameraOverlay} />
                  <Text style={styles.faceText}>Scanning Face...</Text>
                </>
              )}
            </View>
          </View>

          {/* Fallback button */}
          <View
            style={{
              alignItems: "center",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <Button
              title="Use Password instead"
              backgroundColor={"#999999"}
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
    padding: 20,
    overflow: "hidden",
  },
  cameraContainer: {
    height: 188,
    width: 180,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  cameraOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 10,
  },
  scanLine: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: "#00FF00",
    shadowColor: "#00FF00",
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  faceText: {
    position: "absolute",
    bottom: 10,
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});
