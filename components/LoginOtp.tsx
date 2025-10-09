import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";
import { useTheme } from "@/theme/ThemeProvider"; // ✅ import theme

type Props = {
  length?: number;
  onComplete?: (code: string) => void;
};

export default function LoginOtp({ length = 6, onComplete }: Props) {
  const { isDark, theme } = useTheme(); // ✅ get active theme
  const colors = theme.colors;
  const [code, setCode] = useState<string[]>(Array(length).fill(""));
  const inputs = useRef<TextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    if (text.length === length) {
      const newCode = text.split("").slice(0, length);
      setCode(newCode);
      onComplete?.(newCode.join(""));
      return;
    }

    const newCode = [...code];
    newCode[index] = text.slice(-1);
    setCode(newCode);

    if (text && index < length - 1) {
      inputs.current[index + 1].focus();
    }

    if (newCode.every((c) => c !== "")) {
      onComplete?.(newCode.join(""));
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {Array.from({ length }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.box,
            {
              backgroundColor: "#6F6F70",
              borderColor: "#1F1F1F",
            },
          ]}
        >
          <TextInput
            ref={(ref) => (inputs.current[index] = ref!)}
            value={code[index]}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            style={[styles.input, { color: "#fff" }]}
            maxLength={1}
            textAlign="center"
          />
          {/* Tiny circle only if input is empty */}
          {code[index] === "" && (
            <View
              style={[
                styles.circle,
                {
                  backgroundColor: isDark ? "#6F6F70" : "#F3F4F6",
                  borderColor: "#5E5E5E",
                },
              ]}
            />
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 5,
    marginHorizontal: 4,
  },
  box: {
    width: 54,
    height: 54,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderWidth: 1,
  },
  input: {
    width: "100%",
    height: "100%",
    fontSize: 16,
    textAlign: "center",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 6,
    borderWidth: 1,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -6 }, { translateY: -6 }],
  },
});
