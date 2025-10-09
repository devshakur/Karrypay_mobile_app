// import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
// import React from "react";
// import { useRouter } from "expo-router";
// import { useTheme } from "@/theme/ThemeProvider";
// import { LinearGradient } from "expo-linear-gradient";
// import Logo from "../../assets/svgs/logo";
// import AppIcon from "../../assets/svgs/icons/appIcons";
// import { BlurView } from "expo-blur";

// export default function BiometricOption() {
//   const router = useRouter();
//   const { theme } = useTheme();
//   const colors = theme.colors;

//   return (
//     <LinearGradient
//       colors={["#000000", "#13031a", "#241036"]}
//       locations={[0, 0.45, 1]}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       style={{ flex: 1, width: "100%" }}
//     >
//       <SafeAreaView
//         style={{
//           flex: 1,
//           padding: 20,
//           paddingTop: 120,
//           alignItems: "center",
//         }}
//       >
//         {/* Logo */}
//         <View>
//           <Logo />
//         </View>

//         {/* Title */}
//         <Text
//           style={{
//             textAlign: "center",
//             marginTop: 26,
//             color: "#FFFFFF",
//             fontSize: 28,
//             fontWeight: "700",
//             fontFamily: "ManropeBold",
//             lineHeight: 36,
//           }}
//         >
//           Secure Your Account with Biometrics
//         </Text>

//         {/* Subtitle */}
//         <Text
//           style={{
//             textAlign: "center",
//             marginTop: 18,
//             color: "rgba(255, 255, 255, 0.8)",
//             fontSize: 16,
//             fontWeight: "400",
//             fontFamily: "ManropeRegular",
//             lineHeight: 24,
//           }}
//         >
//           Choose your preferred method to verify your identity. You can use Face
//           ID or Fingerprint for fast, secure access.
//         </Text>

//         {/* Divider */}
//         <View
//           style={{
//             marginTop: 40,
//             borderWidth: 0.5,
//             borderColor: colors.border,
//             width: 350,
//             alignItems: "center",
//           }}
//         />

//         {/* Options */}
//          <View
//           style={{
//             marginTop: 50,
//             alignItems: "center",
//             width: "100%",
//             gap: 16,
//           }}
//         >
//           {/* Face Verification */}
//           <TouchableOpacity
//             onPress={() => router.push("/auth/faceAuth")}
//             style={{
//               borderRadius: 14,
//               overflow: "hidden",
//               width: "100%",
//               maxWidth: 700,
//               alignSelf: "center",
//             }}
//           >
//             <BlurView
//               intensity={20}
//               tint="dark"
//               style={{
//                 paddingVertical: 22,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 paddingHorizontal: 12,
//                 gap: 12,
//               }}
//             >
//               <View
//                 style={{
//                   width: 44,
//                   height: 44,
//                   borderRadius: 29,
//                   backgroundColor: "rgba(38, 41, 91, 0.5)",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <AppIcon name="scan" width={26} height={26} color="#FFFFFF" />
//               </View>
//               <View style={{ flex: 1 }}>
//                 <Text
//                   style={{
//                     fontWeight: "600",
//                     fontSize: 18,
//                     color: "#FFFFFF",
//                     fontFamily: "ManropeSemiBold",
//                     lineHeight: 26,
//                   }}
//                 >
//                   Face Verification
//                 </Text>
//                 <Text
//                   style={{
//                     fontWeight: "400",
//                     fontSize: 14,
//                     color: "rgba(255, 255, 255, 0.7)",
//                     fontFamily: "ManropeRegular",
//                     lineHeight: 22,
//                   }}
//                 >
//                   Use your face to unlock and access your account securely—fast
//                   and contactless.
//                 </Text>
//               </View>
//             </BlurView>
//           </TouchableOpacity>

//           {/* Fingerprint Verification */}
//           <TouchableOpacity
//             onPress={() => router.push("/auth/fingerAuth" as any)}
//             style={{
//               borderRadius: 14,
//               overflow: "hidden",
//               width: "100%",
//               maxWidth: 700,
//               alignSelf: "center",
//             }}
//           >
//             <BlurView
//               intensity={20}
//               tint="dark"
//               style={{
//                 paddingVertical: 22,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 paddingHorizontal: 12,
//                 gap: 12,
//               }}
//             >
//               <View
//                 style={{
//                   width: 44,
//                   height: 44,
//                   borderRadius: 29,
//                   backgroundColor: "rgba(38, 41, 91, 0.5)",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <AppIcon
//                   name="fingerprint"
//                   width={26}
//                   height={26}
//                   color="#FFFFFF"
//                 />
//               </View>
//               <View style={{ flex: 1 }}>
//                 <Text
//                   style={{
//                     fontWeight: "600",
//                     fontSize: 18,
//                     color: "#FFFFFF",
//                     fontFamily: "ManropeSemiBold",
//                     lineHeight: 26,
//                   }}
//                 >
//                   Fingerprint Verification
//                 </Text>
//                 <Text
//                   style={{
//                     fontWeight: "400",
//                     fontSize: 14,
//                     color: "rgba(255, 255, 255, 0.7)",
//                     fontFamily: "ManropeRegular",
//                     lineHeight: 22,
//                   }}
//                 >
//                   Unlock your account with just a touch. Secure, and always at
//                   your fingertip.
//                 </Text>
//               </View>
//             </BlurView>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     </LinearGradient>
//   );
// }

import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useTheme } from "@/theme/ThemeProvider";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../../assets/svgs/logo";
import AppIcon from "../../assets/svgs/icons/appIcons";

export default function BiometricOption() {
  const router = useRouter();
  const { theme } = useTheme();
  const colors = theme.colors;

  return (
    <LinearGradient
      colors={["#000000", "#13031a", "#241036"]}
      locations={[0, 0.45, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, width: "100%" }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          padding: 20,
          paddingTop: 120,
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <View>
          <Logo />
        </View>

        {/* Title */}
        <Text
          style={{
            textAlign: "center",
            marginTop: 26,
            color: "#FFFFFF",
            fontSize: 28,
            fontWeight: "700",
            fontFamily: "ManropeBold",
            lineHeight: 36,
          }}
        >
          Secure Your Account with Biometrics
        </Text>

        {/* Subtitle */}
        <Text
          style={{
            textAlign: "center",
            marginTop: 18,
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: 16,
            fontWeight: "400",
            fontFamily: "ManropeRegular",
            lineHeight: 24,
          }}
        >
          Choose your preferred method to verify your identity. You can use Face
          ID or Fingerprint for fast, secure access.
        </Text>

        {/* Divider */}
        <View
          style={{
            marginTop: 40,
            borderWidth: 0.5,
            borderColor: colors.border,
            width: 350,
            alignItems: "center",
          }}
        />

        {/* Options */}
        <View
          style={{
            marginTop: 50,
            alignItems: "center",
            width: "100%",
            gap: 16,
          }}
        >
          {/* Face Verification */}
          <TouchableOpacity
            onPress={() => router.push("/auth/faceAuth")}
            style={{
              borderRadius: 14,
              overflow: "hidden",
              width: "100%",
              maxWidth: 700,
              alignSelf: "center",
            }}
          >
            <LinearGradient
              colors={[
                "rgba(28,28,28,0.95)", // charcoal black top
                "rgba(28,28,28,0.85)",
                "#2f1747", // purple bottom glow
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{
                paddingVertical: 22,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 12,
                gap: 12,
                borderRadius: 14,
              }}
            >
              <View
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 29,
                  backgroundColor: "rgba(124,106,174,0.25)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AppIcon name="scan" width={26} height={26} color="#FFFFFF" />
              </View>
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 18,
                    color: "#FFFFFF",
                    fontFamily: "ManropeSemiBold",
                    lineHeight: 26,
                  }}
                >
                  Face Verification
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 14,
                    color: "rgba(255, 255, 255, 0.7)",
                    fontFamily: "ManropeRegular",
                    lineHeight: 22,
                  }}
                >
                  Use your face to unlock and access your account securely—fast
                  and contactless.
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Fingerprint Verification */}
          <TouchableOpacity
            onPress={() => router.push("/auth/fingerAuth" as any)}
            style={{
              borderRadius: 14,
              overflow: "hidden",
              width: "100%",
              maxWidth: 700,
              alignSelf: "center",
            }}
          >
            <LinearGradient
              colors={[
                "rgba(28,28,28,0.95)", // charcoal black top
                "rgba(28,28,28,0.85)",
                "#2f1747", // purple bottom glow
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{
                paddingVertical: 22,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 12,
                gap: 12,
                borderRadius: 14,
              }}
            >
              <View
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 29,
                  backgroundColor: "rgba(124,106,174,0.25)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AppIcon
                  name="fingerprint"
                  width={26}
                  height={26}
                  color="#FFFFFF"
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 18,
                    color: "#FFFFFF",
                    fontFamily: "ManropeSemiBold",
                    lineHeight: 26,
                  }}
                >
                  Fingerprint Verification
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 14,
                    color: "rgba(255, 255, 255, 0.7)",
                    fontFamily: "ManropeRegular",
                    lineHeight: 22,
                  }}
                >
                  Unlock your account with just a touch. Secure, and always at
                  your fingertip.
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
