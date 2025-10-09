// import React, { useRef, useState, useEffect } from "react";
// import {
//   View,
//   TextInput,
//   StyleSheet,
//   NativeSyntheticEvent,
//   TextInputKeyPressEventData,
//   useWindowDimensions,
// } from "react-native";
// import { BlurView } from "expo-blur";

// type Props = {
//   length?: number;
//   onComplete?: (code: string) => void;
// };

// export default function OTPInput({ length = 6, onComplete }: Props) {
//   const [code, setCode] = useState<string[]>(Array(length).fill(""));
//   const inputs = useRef<TextInput[]>([]);
//   const { width } = useWindowDimensions();

//   const isLarge = width >= 1024;
//   const isMedium = width >= 768 && width < 1024;

//   const boxSize = isLarge ? 44 : isMedium ? 42 : 40;
//   const fontSize = isLarge ? 16 : 14;

//   const handleChange = (text: string, index: number) => {
//     // If user pasted the whole code (or multiple digits), spread them across fields
//     if (text.length > 1) {
//       const digits = text.replace(/\D/g, "").split("").slice(0, length);
//       const newCode = [...code];
//       for (let i = 0; i < digits.length && index + i < length; i++) {
//         newCode[index + i] = digits[i];
//       }
//       setCode(newCode);
//       if (newCode.every((c) => c !== "")) {
//         onComplete?.(newCode.join(""));
//       }
//       // focus next empty
//       const nextEmpty = newCode.findIndex((c) => c === "");
//       if (nextEmpty !== -1) inputs.current[nextEmpty].focus();
//       return;
//     }

//     const newCode = [...code];
//     newCode[index] = text.slice(-1);
//     setCode(newCode);

//     if (text && index < length - 1) {
//       inputs.current[index + 1].focus();
//     }

//     if (newCode.every((c) => c !== "")) {
//       onComplete?.(newCode.join(""));
//     }
//   };

//   const handleKeyPress = (
//     e: NativeSyntheticEvent<TextInputKeyPressEventData>,
//     index: number
//   ) => {
//     if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
//       inputs.current[index - 1].focus();
//     }
//   };

//   // Try to use expo-clipboard if available for auto-paste on focus
//   const [Clipboard, setClipboard] = useState<any>(null);
//   useEffect(() => {
//     let mounted = true;
//     try {
//       // dynamic import - will fail if package not installed
//       const maybe = require("expo-clipboard");
//       if (mounted) setClipboard(maybe);
//     } catch (e) {
//       // expo-clipboard not available, skip auto-paste feature
//     }
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   return (
//     <View style={styles.container}>
//       {Array.from({ length }).map((_, index) => (
//         <View
//           key={index}
//           style={[
//             styles.inputContainer,
//             {
//               width: boxSize,
//               height: boxSize,
//               borderColor: code[index] ? "#A020F0" : "rgba(255, 255, 255, 0.2)",
//             },
//           ]}
//         >
//           <BlurView intensity={50} tint="dark" style={styles.blurView}>
//             <TextInput
//               ref={(ref: TextInput | null) => {
//                 if (ref) inputs.current[index] = ref;
//               }}
//               value={code[index]}
//               onChangeText={(text) => handleChange(text, index)}
//               onKeyPress={(e) => handleKeyPress(e, index)}
//               style={[styles.input, { color: "#FFFFFF", fontSize }]}
//               keyboardType="number-pad"
//               maxLength={length}
//               textAlign="center"
//               secureTextEntry={true}
//               caretHidden={true}
//               placeholderTextColor="#E6EEF8"
//               onFocus={async () => {
//                 if (!Clipboard) return;
//                 try {
//                   const text = await Clipboard.getStringAsync?.();
//                   if (!text) return;
//                   const digits = text.replace(/\D/g, "");
//                   if (digits.length === length) {
//                     const arr = digits.split("").slice(0, length);
//                     setCode(arr);
//                     onComplete?.(arr.join(""));
//                     const last = inputs.current[length - 1];
//                     last?.blur();
//                   }
//                 } catch (e) {
//                   // ignore clipboard errors
//                 }
//               }}
//             />
//           </BlurView>
//         </View>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 10,
//     marginHorizontal: 16,
//     paddingHorizontal: 8,
//     paddingVertical: 16,
//   },
//   inputContainer: {
//     borderWidth: 1,
//     borderRadius: 12,
//     overflow: "hidden",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(26, 26, 46, 0.5)",
//   },
//   blurView: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   input: {
//     width: "100%",
//     height: "100%",
//     textAlign: "center",
//   },
// });

import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@/theme/ThemeProvider";

type Props = {
  length?: number;
  onComplete?: (code: string) => void;
};

export default function OTPInput({ length = 6, onComplete }: Props) {
  const { isDark, theme } = useTheme();
  const [code, setCode] = useState<string[]>(Array(length).fill(""));
  const inputs = useRef<TextInput[]>([]);
  const { width } = useWindowDimensions();

  const isLarge = width >= 1024;
  const isMedium = width >= 768 && width < 1024;

  // ✅ dynamic sizing for OTP boxes
  const boxSize = isLarge ? 64 : isMedium ? 58 : 50;
  const fontSize = isLarge ? 20 : 16;

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

  const activeColors = ["#2f1747", "#1c082d", "#2f1747"];
  const disabledColors = ["#3d2a56", "#28163a", "#3d2a56"];

  return (
    <View style={styles.container}>
      {Array.from({ length }).map((_, index) => {
        const isEmpty = code[index] === "";
        return (
          <LinearGradient
            key={index}
            colors={isDark ? activeColors : disabledColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[
              styles.box,
              {
                width: boxSize,
                height: boxSize,
              },
            ]}
          >
            <TextInput
              ref={(ref) => (inputs.current[index] = ref!)}
              value={code[index]}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              style={[styles.input, { color: theme.colors.text, fontSize }]}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
            />
            {isEmpty && (
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor: isDark ? "#6b5a94ff" : "#e0d7f5",
                    borderColor: isDark ? "#6b5a94ff" : "#bcaee0",
                  },
                ]}
              />
            )}
          </LinearGradient>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginHorizontal: 4,
  },
  box: {
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderWidth: 1,
    overflow: "hidden", // ✅ keeps gradient inside rounded edges
  },
  input: {
    width: "100%",
    height: "100%",
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
