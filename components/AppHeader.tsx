// import React from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import { useTheme } from "@/theme/ThemeProvider";
// import { BlurView } from "expo-blur";

// export default function AppHeader() {
//   const { theme, isDark } = useTheme();
//   return (
//     <View style={styles.container}>
//       {/* Left side: Logo + Name + Tier */}
//       <View style={styles.leftSection}>
//         <Image
//           source={require("@/assets/images/Karry.png")} // replace with your logo
//           style={styles.logo}
//           resizeMode="contain"
//         />
//         <View>
//           <Text style={[styles.appName, { color: theme.colors.text }]}>
//             Yusuf
//           </Text>
//           <Text style={styles.tier}>Tier-1</Text>
//         </View>
//       </View>

//       {/* Right side: Icons */}
//       <View style={styles.rightSection}>
//         <TouchableOpacity style={[styles.iconButton]}>
//           <BlurView>
//           <MaterialIcons name="notifications-none" size={24} color="#F9FAFB" />
//           </BlurView>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.iconButton]}>
//           <FontAwesome name="cog" size={20} color="#F9FAFB" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingTop: 15,
//   },
//   leftSection: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   logo: {
//     width: 36,
//     height: 36,
//     marginRight: 8,
//     borderRadius: 8,
//   },
//   appName: {
//     fontSize: 14,
//     fontFamily: "ManropeSemiBold",
//     color: "#111827",
//   },
//   tier: {
//     fontSize: 12,
//     fontFamily: "ManropeMedium",
//     color: "#6B7280",
//     marginTop: 2,
//   },
//   rightSection: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   iconButton: {
//     height: 40,
//     width: 40,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     marginLeft: 16,
//     backgroundColor: "#5B2C6F",
//   },
// });

// import React from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import { useTheme } from "@/theme/ThemeProvider";
// import { BlurView } from "expo-blur";
// import { LinearGradient } from "expo-linear-gradient";

// export default function AppHeader() {
//   const { theme, isDark } = useTheme();
//   return (
//     <View style={styles.container}>
//       {/* Left side: Logo + Name + Tier */}
//       <View style={styles.leftSection}>
//         <Image
//           source={require("@/assets/images/Karry.png")} // replace with your logo
//           style={styles.logo}
//           resizeMode="contain"
//         />
//         <View>
//           <Text style={[styles.appName, { color: theme.colors.text }]}>
//             Yusuf
//           </Text>
//           <Text style={styles.tier}>Tier-1</Text>
//         </View>
//       </View>

//       {/* Right side: Icons */}
//       <View style={styles.rightSection}>
//         {/* Notifications */}
//         <TouchableOpacity style={styles.gradientWrapper}>
//           <LinearGradient
//             colors={["#000000", "#6B21A8"]}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 1 }}
//             style={styles.gradientBorder}
//           >
//             <View style={styles.iconInner}>
//               <MaterialIcons
//                 name="notifications-none"
//                 size={24}
//                 color="#F9FAFB"
//               />
//             </View>
//           </LinearGradient>
//         </TouchableOpacity>

//         {/* Settings */}
//         <TouchableOpacity style={styles.gradientWrapper}>
//           <LinearGradient
//             colors={["#000000", "#6B21A8"]}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 1 }}
//             style={styles.gradientBorder}
//           >
//             <View style={styles.iconInner}>
//               <FontAwesome name="cog" size={20} color="#F9FAFB" />
//             </View>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingTop: 15,
//   },
//   leftSection: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   logo: {
//     width: 36,
//     height: 36,
//     marginRight: 8,
//     borderRadius: 8,
//   },
//   appName: {
//     fontSize: 14,
//     fontFamily: "ManropeSemiBold",
//     color: "#111827",
//   },
//   tier: {
//     fontSize: 12,
//     fontFamily: "ManropeMedium",
//     color: "#6B7280",
//     marginTop: 2,
//   },
//   rightSection: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   gradientWrapper: {
//     marginLeft: 16,
//     borderRadius: 24,
//   },
//   gradientBorder: {
//     padding: 2, // border thickness
//     borderRadius: 24,
//   },
//   iconInner: {
//     height: 40,
//     width: 40,
//     borderRadius: 20,
//     backgroundColor: "1F1F1F", // transparent background
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   iconButton: {
//     height: 40,
//     width: 40,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     overflow: "hidden",
//   },
// });

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@/theme/ThemeProvider";
import { LinearGradient } from "expo-linear-gradient";

export default function AppHeader() {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      {/* Left side: Logo + Name + Tier */}
      <View style={styles.leftSection}>
        <Image
          source={require("@/assets/images/Karry.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View>
          <Text style={[styles.appName, { color: theme.colors.text }]}>
            Yusuf
          </Text>
          <Text style={styles.tier}>Tier-1</Text>
        </View>
      </View>

      {/* Right side: Icons */}
      <View style={styles.rightSection}>
        {/* Notifications */}
        <TouchableOpacity style={styles.gradientWrapper}>
          <LinearGradient
            colors={["#000000", "#6B21A8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientBorder}
          >
            <View style={styles.iconInner}>
              <MaterialIcons
                name="notifications-none"
                size={24}
                color="#F9FAFB"
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Settings */}
        <TouchableOpacity style={styles.gradientWrapper}>
          <LinearGradient
            colors={["#000000", "#6B21A8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientBorder}
          >
            <View style={styles.iconInner}>
              <FontAwesome name="cog" size={20} color="#F9FAFB" />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 15,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 36,
    height: 36,
    marginRight: 8,
    borderRadius: 8,
  },
  appName: {
    fontSize: 14,
    fontFamily: "ManropeSemiBold",
    color: "#111827",
  },
  tier: {
    fontSize: 12,
    fontFamily: "ManropeMedium",
    color: "#6B7280",
    marginTop: 2,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  gradientWrapper: {
    marginLeft: 16,
    borderRadius: 24,
  },
  gradientBorder: {
    padding: 2, // thickness of gradient border
    borderRadius: 24,
  },
  iconInner: {
    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: "rgba(31, 31, 31, 0.6)", // transparent dark background
    alignItems: "center",
    justifyContent: "center",
  },
});
