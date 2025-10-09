import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
  ViewStyle,
  TextStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const { width } = Dimensions.get("window");

interface SecondaryButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  onPress,
  title,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.opaqueButton,
        {
          width: width < 450 ? 350 : 400,
          height: 55,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "rgba(139,77,240,0.9)",
        },
        style,
      ]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <LinearGradient
        colors={[
          "rgba(139,77,240,0.45)",
          "rgba(139,77,240,0.12)",
          "transparent",
        ]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        style={styles.glowGradient}
      />
      <BlurView
        intensity={60}
        tint="dark"
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: "rgba(139,77,240,0.14)",
          },
        ]}
      />
      <View style={styles.glowShadow} pointerEvents="none" />
      <Text style={[styles.buttonText, { color: "#fff" }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  opaqueButton: {
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 4,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(139,77,240,0.6)",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "ManropeMedium",
  },
  glowGradient: {
    position: "absolute",
    left: -40,
    right: -40,
    top: -42,
    height: 200,
    borderRadius: 60,
    transform: [{ scaleX: 1.12 }],
  },
  glowShadow: {
    position: "absolute",
    left: -10,
    right: -10,
    bottom: 0,
    height: 55,
    borderRadius: 28,
    backgroundColor: "rgba(139,77,240,0.12)",
    shadowColor: "rgba(139,77,240,0.6)",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.22,
    shadowRadius: 26,
    elevation: 6,
    opacity: 0.62,
    zIndex: -1,
  },
});

export default SecondaryButton;
