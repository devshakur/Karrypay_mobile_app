import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ViewStyle,
  TextStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const { width } = Dimensions.get("window");

interface PrimaryButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onPress,
  title,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.opaqueButton,
        { width: width < 450 ? 350 : 400, height: 55 },
        style,
      ]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <LinearGradient
        colors={["#2a1947ff", "#38163fff", "#251047ff"]}
        locations={[0, 0.45, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[StyleSheet.absoluteFill, { borderRadius: 30 }]}
      />
      <BlurView
        intensity={20}
        tint="dark"
        style={[
          StyleSheet.absoluteFill,
          {
            borderRadius: 30,
            backgroundColor: "rgba(107, 47, 141, 0.12)",
          },
        ]}
      />
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
});

export default PrimaryButton;
