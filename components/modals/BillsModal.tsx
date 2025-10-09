import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import BottomModal from "./BottomModal";
import Feather from "@expo/vector-icons/Feather";
import { useTheme } from "@/theme/ThemeProvider";
import { useRouter } from "expo-router";

export default function BillsModal({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isDark, theme } = useTheme();
  const router = useRouter();
  const { width } = Dimensions.get("window");

  const options = [
    { name: "Electricity", icon: "zap", path: "/(tabs)/home/electricity" },
    { name: "Cable TV", icon: "tv", path: "/(tabs)/home/cabletv" },
    { name: "Education", icon: "book", path: "/(tabs)/home/education" },
  ];

  return (
    <BottomModal
      visible={visible}
      setVisible={setVisible}
      height={166}
      style={{ marginBottom: width >= 500 ? "20%" : "36%" }}
    >
      <View style={styles.container}>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => {
              setVisible(false);
              router.push(item.path as any);
            }}
          >
            <Feather name={item.icon as any} size={22} color="#fff" />
            <Text style={[styles.optionText, { color: "#fff" }]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </BottomModal>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -15,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 3,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "ManropeMedium",
  },
});
