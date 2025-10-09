import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@/theme/ThemeProvider";

type ModalItemProps = {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
  closeModal?: () => void; // 👈 new prop
};

export default function ModalItem({
  icon,
  label,
  onPress,
  closeModal,
}: ModalItemProps) {
  const { theme } = useTheme();
  const handlePress = () => {
    if (onPress) onPress();
    if (closeModal) closeModal(); // 👈 closes modal after action
  };

  return (
    <TouchableOpacity style={styles.itemRow} onPress={handlePress}>
      <View style={styles.iconCircle}>{icon}</View>
      <Text style={[styles.itemText, { color: theme.colors.text }]}>
        {label}
      </Text>
      <AntDesign name="right" size={18} color={theme.colors.text} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  itemText: { flex: 1, fontSize: 15, color: "#111827" },
});
