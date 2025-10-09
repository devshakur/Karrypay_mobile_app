import { useRouter } from "expo-router";
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  View,
  Image,
} from "react-native";

type ButtonProps = {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  icon?: any; // ✅ accept icon/image
  onPress?: (event: GestureResponderEvent) => void;
};

export default function Button({
  title,
  disabled = false,
  backgroundColor = "#2E358F",
  textColor = "#fff",
  style,
  onPress,
  textStyle,
  icon,
}: ButtonProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <View style={styles.row}>
        {icon && (
          <Image source={icon} style={styles.icon} resizeMode="contain" />
        )}
        <Text style={[styles.text, { color: textColor }, textStyle]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 4,
    alignItems: "center",
    justifyContent: "center",

    maxWidth: 600,
    width: "100%",
    alignSelf: "center",

    marginHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "ManropeMedium",
  },
});
