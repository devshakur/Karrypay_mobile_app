import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import Svg, { Circle } from "react-native-svg";
import Entypo from "@expo/vector-icons/Entypo";

const CIRCLE_SIZE = 350;
const STROKE_WIDTH = 5;
const RADIUS = (CIRCLE_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function FaceAuth() {
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
    let timer: ReturnType<typeof setInterval>;
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
        router.push("/auth/success" as any);
      }, 500);
    }
  }, [progress]);

  if (!permission) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (!permission.granted) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {/* Full camera background */}
      <CameraView
        style={StyleSheet.absoluteFill}
        facing="front"
        mode="picture"
        // enableZoomGesture
      />

      {/* Overlay content on top of camera */}
      <View style={styles.overlay}>
        {/* Back button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Entypo name="chevron-left" size={28} color="white" />
        </TouchableOpacity>

        {/* Instruction */}
        <Text style={styles.header}>
          Please place your face in front of the camera to scan.
        </Text>
      </View>

      {/* Face circle overlay */}
      <View style={styles.circleWrapper}>
        <Svg width={CIRCLE_SIZE} height={CIRCLE_SIZE}>
          <Circle
            cx={CIRCLE_SIZE / 2}
            cy={CIRCLE_SIZE / 2}
            r={RADIUS}
            stroke="#e5e7eb"
            strokeWidth={STROKE_WIDTH}
            fill="transparent"
          />
          <Circle
            cx={CIRCLE_SIZE / 2}
            cy={CIRCLE_SIZE / 2}
            r={RADIUS}
            stroke="#22c55e"
            strokeWidth={STROKE_WIDTH}
            fill="transparent"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE}
            strokeLinecap="round"
          />
        </Svg>
      </View>

      {/* Progress info */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>{progress}%</Text>
        <Text style={styles.verifyingText}>
          {progress === 100 ? "Completed" : "Verifying..."}
        </Text>
      </View>
    </View>
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
    padding: 10, // bigger touch area
  },
  header: {
    fontSize: 16,
    fontFamily: "ManropeBold",
    color: "white",
    marginTop: 40,
    textAlign: "center",
  },
  circleWrapper: {
    position: "absolute",
    top: "22%",
    alignSelf: "center",
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
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
