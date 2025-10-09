// import {
//   StyleSheet,
//   Text,
//   View,
//   Modal,
//   TextInput,
//   NativeSyntheticEvent,
//   TextInputKeyPressEventData,
//   TouchableOpacity,
//   Dimensions,
// } from "react-native";
// import React, { useRef, useState } from "react";
// import Button from "@/components/Button";
// import { useRouter } from "expo-router";
// import { useTheme } from "@/theme/ThemeProvider";

// type PswdModalProps = {
//   visible: boolean;
//   setVisible: React.Dispatch<React.SetStateAction<boolean>>;
//   failureConfig?: {
//     title: string;
//     message: string;
//     retryPath: string;
//   };
//   successConfig?: {
//     title: string;
//     message: string;
//     nextPath: string;
//   };
// };

// export default function PasswordAuthModal({
//   visible,
//   setVisible,
//   failureConfig,
//   successConfig,
// }: PswdModalProps) {
//   const router = useRouter();
//   const { isDark, theme } = useTheme();
//   const colors = theme.colors;

//   const length = 4; // PIN length
//   const [code, setCode] = useState<string[]>(Array(length).fill(""));
//   const inputs = useRef<TextInput[]>([]);

//   const { width } = Dimensions.get("window");

//   // 🔑 Handle typing
//   const handleChange = (text: string, index: number) => {
//     const newCode = [...code];
//     newCode[index] = text.slice(-1);
//     setCode(newCode);

//     if (text && index < length - 1) {
//       inputs.current[index + 1].focus();
//     }
//   };

//   // ⌫ Handle backspace
//   const handleKeyPress = (
//     e: NativeSyntheticEvent<TextInputKeyPressEventData>,
//     index: number
//   ) => {
//     if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
//       inputs.current[index - 1].focus();
//     }
//   };

//   // ✅ Simulated login
//   const Login = () => {
//     const pin = code.join("");
//     if (pin.length < length) return; // validation

//     setVisible(false);

//     setTimeout(() => {
//       if (failureConfig) {
//         router.push({
//           pathname: "/(tabs)/home/failed",
//           params: failureConfig,
//         });
//       } else if (successConfig && false) {
//         router.push({
//           pathname: "/(tabs)/home/success",
//           params: successConfig,
//         });
//       }
//     }, 300);
//   };

//   // 📱 Responsive input width
//   let inputWidth = 70;
//   let inputHeight = 75;
//   if (width < 400) {
//     inputWidth = 70;
//     inputHeight = 75;
//   } else if (width > 600) {
//     inputWidth = 125;
//     inputHeight = 100;
//   }

//   return (
//     <Modal
//       animationType="slide"
//       transparent
//       visible={visible}
//       onRequestClose={() => setVisible(false)}
//       statusBarTranslucent
//     >
//       <View style={styles.overlay}>
//         <View
//           style={[
//             styles.modalBox,
//             {
//               backgroundColor: "#333",
//               width: width < 470 ? 370 : 600,
//             },
//           ]}
//         >
//           {/* Header */}
//           <View style={styles.headerRow}>
//             <Text style={[styles.header, { color: "black" }]}>
//               Pay with PIN
//             </Text>
//             <TouchableOpacity onPress={() => setVisible(false)}>
//               <Text style={[styles.closeText, { color: theme.colors.text }]}>
//                 ✕
//               </Text>
//             </TouchableOpacity>
//           </View>

//           {/* PIN Input */}
//           <View style={{ marginTop: 20, marginBottom: 40 }}>
//             <View style={styles.pinContainer}>
//               {Array.from({ length }).map((_, index) => (
//                 <TextInput
//                   key={index}
//                   ref={(ref) => (inputs.current[index] = ref!)}
//                   value={code[index]}
//                   onChangeText={(text) => handleChange(text, index)}
//                   onKeyPress={(e) => handleKeyPress(e, index)}
//                   style={[
//                     styles.input,
//                     {
//                       width: inputWidth,
//                       height: inputHeight,
//                       backgroundColor: "#555",
//                       color: colors.text,
//                       borderColor: "#555",
//                     },
//                   ]}
//                   keyboardType="number-pad"
//                   maxLength={1}
//                   textAlign="center"
//                 />
//               ))}
//             </View>
//           </View>

//           {/* Pay Button */}
//           <View
//             style={{
//               alignItems: "center",
//               marginTop: "50%",
//               justifyContent: "flex-end",
//             }}
//           >
//             <Button
//               title="Pay"
//               backgroundColor="#2E358F"
//               textColor="#fff"
//               style={{ width: "100%", height: 55 }}
//               onPress={Login}
//             />
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// }

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center",
//     backgroundColor: "rgba(0,0,0,0.4)",
//   },
//   modalBox: {
//     marginBottom: 10,
//     borderRadius: 20,
//     padding: 20,
//   },
//   headerRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   header: {
//     fontSize: 16,
//     fontFamily: "ManropeSemiBold",
//     color: "#111827",
//   },
//   closeText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#6B7280",
//   },
//   pinContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 10,
//     width: "100%",
//     alignItems: "center",
//   },
//   input: {
//     borderRadius: 20,
//     fontSize: 20,
//     fontFamily: "ManropeSemiBold",
//     borderWidth: 1,
//     textAlign: "center",
//   },
// });

import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { useTheme } from "@/theme/ThemeProvider";

type PswdModalProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  failureConfig?: {
    title: string;
    message: string;
    retryPath: string;
  };
  successConfig?: {
    title: string;
    message: string;
    nextPath: string;
  };
  /** ✅ Optional callback that runs when PIN is submitted */
  onPasswordSubmit?: (pin: string) => void;
};

export default function PasswordAuthModal({
  visible,
  setVisible,
  failureConfig,
  successConfig,
  onPasswordSubmit,
}: PswdModalProps) {
  const router = useRouter();
  const { isDark, theme } = useTheme();
  const colors = theme.colors;

  const length = 4;
  const [code, setCode] = useState<string[]>(Array(length).fill(""));
  const inputs = useRef<TextInput[]>([]);

  const { width } = Dimensions.get("window");

  // Handle typing
  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text.slice(-1);
    setCode(newCode);

    if (text && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  // Handle backspace
  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // ✅ Handle PIN submission
  const handleSubmit = () => {
    const pin = code.join("");
    if (pin.length < length) return;

    setVisible(false);

    // If a custom handler is passed, run it
    if (onPasswordSubmit) {
      onPasswordSubmit(pin);
      return;
    }

    // Otherwise, use default navigation
    setTimeout(() => {
      if (failureConfig) {
        router.push({
          pathname: "/(tabs)/home/failed",
          params: failureConfig,
        });
      } else if (successConfig) {
        router.push({
          pathname: "/(tabs)/home/success",
          params: successConfig,
        });
      }
    }, 300);
  };

  // Responsive input size
  let inputWidth = 70;
  let inputHeight = 75;
  if (width > 600) {
    inputWidth = 125;
    inputHeight = 100;
  }

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View
          style={[
            styles.modalBox,
            {
              backgroundColor: "#333",
              width: width < 470 ? 370 : 600,
            },
          ]}
        >
          {/* Header */}
          <View style={styles.headerRow}>
            <Text style={[styles.header, { color: "black" }]}>
              Pay with PIN
            </Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style={[styles.closeText, { color: theme.colors.text }]}>
                ✕
              </Text>
            </TouchableOpacity>
          </View>

          {/* PIN Inputs */}
          <View style={{ marginTop: 20, marginBottom: 40 }}>
            <View style={styles.pinContainer}>
              {Array.from({ length }).map((_, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputs.current[index] = ref!)}
                  value={code[index]}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  style={[
                    styles.input,
                    {
                      width: inputWidth,
                      height: inputHeight,
                      backgroundColor: "#555",
                      color: colors.text,
                      borderColor: "#555",
                    },
                  ]}
                  keyboardType="number-pad"
                  maxLength={1}
                  textAlign="center"
                />
              ))}
            </View>
          </View>

          {/* Pay Button */}
          <View style={{ alignItems: "center", marginTop: "50%" }}>
            <Button
              title="Pay"
              backgroundColor="#2E358F"
              textColor="#fff"
              style={{ width: "100%", height: 55 }}
              onPress={handleSubmit}
            />
          </View>
        </View>
      </View>
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
  modalBox: {
    marginBottom: 10,
    borderRadius: 20,
    padding: 20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 16,
    fontFamily: "ManropeSemiBold",
    color: "#111827",
  },
  closeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6B7280",
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  input: {
    borderRadius: 20,
    fontSize: 20,
    fontFamily: "ManropeSemiBold",
    borderWidth: 1,
    textAlign: "center",
  },
});
