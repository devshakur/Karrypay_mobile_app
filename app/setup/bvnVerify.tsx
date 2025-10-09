// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   KeyboardAvoidingView,
//   Platform,
//   useWindowDimensions,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import React, { useState } from "react";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { useRouter } from "expo-router";
// import Button from "@/components/Button";
// import { useTheme } from "@/theme/ThemeProvider";

// export default function BvnVerify() {
//   const router = useRouter();
//   const [visible, setVisible] = useState(true);
//   const { theme, isDark } = useTheme();
//   const { colors } = theme;

//   // ✅ Responsive breakpoints
//   const { width } = useWindowDimensions();
//   const isLarge = width >= 1024;
//   const isMedium = width >= 768 && width < 1024;

//   // ✅ Dynamic content width
//   const contentWidth = isLarge ? "50%" : isMedium ? "70%" : "100%";

//   return (
//     <SafeAreaView
//       style={[styles.container, { backgroundColor: colors.background }]}
//     >
//       <KeyboardAvoidingView
//         style={{ flex: 1 }}
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//       >
//         {/* Header */}
//         <View style={styles.header}>
//           <Ionicons
//             onPress={() => router.back()}
//             name="chevron-back"
//             size={24}
//             color={colors.text}
//           />
//         </View>

//         {/* Title */}
//         <View style={styles.titleWrapper}>
//           <Text style={[styles.title, { color: colors.text }]}>
//             Verify Your Identity
//           </Text>
//           <Text style={[styles.subtitle, { color: colors.text }]}>
//             Tell us a bit about yourself to set up your profile.
//           </Text>
//         </View>

//         {/* Input Stack */}
//         <View style={[styles.inputWrapper, { width: contentWidth }]}>
//           {/* BVN */}
//           <View style={styles.inputGroup}>
//             <Text style={[styles.label, { color: colors.text }]}>BVN</Text>
//             <TextInput
//               style={[
//                 styles.input,
//                 { backgroundColor: isDark ? "#333333" : "#F3F4F6" },
//               ]}
//               placeholder="Enter your BVN number"
//               keyboardType="numeric"
//               placeholderTextColor="#5E5E5E"
//             />
//           </View>

//           {/* NIN */}
//           <View style={styles.inputGroup}>
//             <Text style={[styles.label, { color: colors.text }]}>NIN</Text>
//             <TextInput
//               style={[
//                 styles.input,
//                 { backgroundColor: isDark ? "#333333" : "#F3F4F6" },
//               ]}
//               placeholder="Enter your National Identity number"
//               keyboardType="numeric"
//               placeholderTextColor="#5E5E5E"
//             />
//           </View>
//         </View>

//         {/* Continue Button */}
//         <View style={styles.footer}>
//           <Button
//             title="Verify & Continue"
//             backgroundColor={colors.primary}
//             textColor="#fff"
//             onPress={() => router.push("/setup/setPswd")}
//             style={{ width: contentWidth, height: 55 }}
//           />
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     padding: 20, // ✅ consistent parent padding
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   titleWrapper: {
//     marginTop: 25,
//   },
//   title: {
//     fontFamily: "ManropeSemiBold",
//     fontSize: 24,
//   },
//   subtitle: {
//     fontFamily: "ManropeMedium",
//     fontSize: 14,
//     marginTop: 8,
//   },
//   inputWrapper: {
//     marginTop: 35,
//     alignSelf: "center", // ✅ centers inputs on big screens
//   },
//   inputGroup: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 14,
//     marginBottom: 4,
//     fontFamily: "ManropeMedium",
//   },
//   input: {
//     borderRadius: 10,
//     paddingHorizontal: 12,
//     height: 48,
//     fontSize: 14,
//     fontWeight: "500",
//     fontFamily: "ManropeRegular",
//   },
//   footer: {
//     width: "100%",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     marginBottom: 39,
//     flex: 1,
//   },
// });

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import Button from "@/components/Button";
import { useTheme } from "@/theme/ThemeProvider";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "@/components/screens/ui/buttons/PrimaryButton";

export default function BvnVerify() {
  const router = useRouter();
  const { theme, isDark } = useTheme();
  const { colors } = theme;

  const { width } = useWindowDimensions();
  const isLarge = width >= 1024;
  const isMedium = width >= 768 && width < 1024;

  const contentWidth = isLarge ? "50%" : isMedium ? "70%" : "100%";

  return (
    <LinearGradient
      colors={["#241036", "#13031a", "#241036"]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* Header */}
          <View style={styles.header}>
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="#fff"
            />
          </View>

          {/* Title */}
          <View style={styles.titleWrapper}>
            <Text style={[styles.title, { color: "#fff" }]}>
              Verify Your Identity
            </Text>
            <Text style={[styles.subtitle, { color: "rgba(255,255,255,0.7)" }]}>
              Provide your BVN and NIN to continue setting up your profile.
            </Text>
          </View>

          {/* Input Stack */}
          <View style={[styles.inputWrapper, { width: contentWidth }]}>
            {/* BVN */}
            <View style={styles.inputGroup}>
              <Text style={[styles.label, { color: "#fff" }]}>BVN</Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: "rgba(255,255,255,0.08)",
                    color: "#fff",
                  },
                ]}
                placeholder="Enter your BVN number"
                keyboardType="numeric"
                placeholderTextColor="rgba(255,255,255,0.5)"
              />
            </View>

            {/* NIN */}
            <View style={styles.inputGroup}>
              <Text style={[styles.label, { color: "#fff" }]}>NIN</Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: "rgba(255,255,255,0.08)",
                    color: "#fff",
                  },
                ]}
                placeholder="Enter your National Identity number"
                keyboardType="numeric"
                placeholderTextColor="rgba(255,255,255,0.5)"
              />
            </View>
          </View>

          {/* Continue Button */}
          <View style={styles.footer}>
            <PrimaryButton
              title="Verify & Continue"
              onPress={() => router.push("/setup/setPswd")}
              style={{ width: contentWidth, height: 55 }}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleWrapper: {
    marginTop: 25,
  },
  title: {
    fontFamily: "ManropeSemiBold",
    fontSize: 24,
  },
  subtitle: {
    fontFamily: "ManropeMedium",
    fontSize: 14,
    marginTop: 8,
  },
  inputWrapper: {
    marginTop: 35,
    alignSelf: "center",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    fontFamily: "ManropeMedium",
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)", // subtle glass border
    fontWeight: "500",
    fontFamily: "ManropeRegular",
  },
  footer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 39,
    flex: 1,
  },
});
