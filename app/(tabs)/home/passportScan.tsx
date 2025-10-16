import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Svg, { Rect } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/customButton";

const FRAME_WIDTH = 358;
const FRAME_HEIGHT = 269;
const STROKE_WIDTH = 5;
const BORDER_RADIUS = 16;
const PERIMETER = 2 * (FRAME_WIDTH + FRAME_HEIGHT);

export default function PassportScan() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (!permission?.granted) {
        await requestPermission();
      }
      if (permission?.granted) {
        setScanning(true);
      }
    })();
  }, [permission]);

  useEffect(() => {
    let timer;
    if (scanning && progress < 100) {
      timer = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 100));
      }, 500);
    }
    return () => clearInterval(timer);
  }, [scanning, progress]);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        router.push("/(tabs)/home/kysSubmitted");
      }, 600);
    }
  }, [progress]);

  if (!permission) return <Text>Requesting camera permission...</Text>;
  if (!permission.granted) return <Text>No access to camera</Text>;

  return (
    <SafeAreaView style={styles.container}>
      {/* Camera Background */}
      <CameraView
        style={StyleSheet.absoluteFill}
        facing="back"
        mode="picture"
      />

      {/* Overlay Header */}
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Entypo name="chevron-left" size={28} color="white" />
        </TouchableOpacity>

        <Text style={styles.header}>
          Please scan your international passport to verify your identity. Make
          sure all details are visible.
        </Text>
      </View>

      {/* Rectangle Frame */}
      <View style={styles.frameWrapper}>
        <Svg width={FRAME_WIDTH} height={FRAME_HEIGHT}>
          {/* Outer gray border */}
          <Rect
            x={STROKE_WIDTH / 2}
            y={STROKE_WIDTH / 2}
            width={FRAME_WIDTH - STROKE_WIDTH}
            height={FRAME_HEIGHT - STROKE_WIDTH}
            stroke="#e5e7eb"
            strokeWidth={STROKE_WIDTH}
            rx={BORDER_RADIUS}
            ry={BORDER_RADIUS}
            fill="transparent"
          />
          {/* Green animated progress border */}
          <Rect
            x={STROKE_WIDTH / 2}
            y={STROKE_WIDTH / 2}
            width={FRAME_WIDTH - STROKE_WIDTH}
            height={FRAME_HEIGHT - STROKE_WIDTH}
            stroke="#22c55e"
            strokeWidth={STROKE_WIDTH}
            rx={BORDER_RADIUS}
            ry={BORDER_RADIUS}
            fill="transparent"
            strokeDasharray={PERIMETER}
            strokeDashoffset={PERIMETER - (progress / 100) * PERIMETER}
            strokeLinecap="round"
          />
        </Svg>
      </View>

      {/* Progress Info */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>{progress}%</Text>
        <Text style={styles.verifyingText}>
          {progress === 100 ? "Completed" : "Scanning..."}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3,
    paddingTop: 60,
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 3,
    zIndex: 9,
    padding: 10,
    marginTop: 30,
  },
  header: {
    fontSize: 16,
    fontFamily: "ManropeMedium",
    padding: 10,
    textAlign: "center",
    color: "white",
    marginTop: "20%",
  },
  frameWrapper: {
    position: "absolute",
    top: "30%",
    alignSelf: "center",
    width: FRAME_WIDTH,
    height: FRAME_HEIGHT,
    zIndex: 2,
  },
  progressContainer: {
    position: "absolute",
    bottom: 120,
    alignSelf: "center",
    alignItems: "center",
    zIndex: 3,
  },
  progressText: {
    fontSize: 36,
    fontWeight: "600",
    color: "white",
  },
  verifyingText: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
    marginTop: 6,
  },
});
