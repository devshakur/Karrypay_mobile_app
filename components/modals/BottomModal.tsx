// import {
//   StyleSheet,
//   View,
//   Modal,
//   Pressable,
//   StyleProp,
//   ViewStyle,
// } from "react-native";
// import React from "react";
// import { useTheme } from "@/theme/ThemeProvider";

// type BottomModalProps = {
//   visible: boolean;
//   setVisible: React.Dispatch<React.SetStateAction<boolean>>;
//   height?: number;
//   children?: React.ReactNode;
//   style?: StyleProp<ViewStyle>; // ✅ allow custom styles
// };

// export default function BottomModal({
//   visible,
//   setVisible,
//   height = 400,
//   children,
//   style,
// }: BottomModalProps) {
//   const { isDark, theme } = useTheme();
//   return (
//     <Modal
//       animationType="slide"
//       transparent
//       visible={visible}
//       onRequestClose={() => setVisible(false)}
//       statusBarTranslucent
//     >
//       <Pressable
//         style={styles.overlay}
//         onPress={() => setVisible(false)} // 👈 close when pressing outside
//       >
//         <Pressable
//           style={[
//             styles.modalBox,
//             { height },
//             { backgroundColor: theme.colors.background },
//             style,
//           ]}
//           onPress={() => {}}
//         >
//           {children}
//         </Pressable>
//       </Pressable>
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
//     width: "90%",
//     borderRadius: 14,
//     backgroundColor: "#FFFFFF",
//     padding: 20,
//     marginBottom: 40,
//     marginHorizontal: 20,
//   },
// });

import {
  StyleSheet,
  View,
  Modal,
  Pressable,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { LinearGradient } from "expo-linear-gradient";

type BottomModalProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  height?: number;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>; // ✅ allow custom styles
};

export default function BottomModal({
  visible,
  setVisible,
  height = 400,
  children,
  style,
}: BottomModalProps) {
  const { isDark } = useTheme();

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}
      statusBarTranslucent
    >
      <Pressable
        style={styles.overlay}
        onPress={() => setVisible(false)} // 👈 close when pressing outside
      >
        <Pressable style={{ width: "100%", padding: 7, alignItems: "center" }}>
          <LinearGradient
            colors={["#241036", "#3D3D3D", "#5B2C6F"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.modalBox, { height }, style]}
          >
            {children}
          </LinearGradient>
        </Pressable>
      </Pressable>
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
    width: "100%",
    borderRadius: 14,
    padding: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    overflow: "hidden", // 🔑 ensures gradient respects rounded corners
  },
});
