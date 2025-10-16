// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { LinearGradient } from "expo-linear-gradient";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import React, { useState } from "react";
// import { useRouter } from "expo-router";
// import BottomModal from "@/components/modals/BottomModal";
// import { AntDesign } from "@expo/vector-icons";

// const items = [
//   { icon: "document-text-outline", label: "Passport" },
//   { icon: "card-outline", label: "Voter's Card" },
//   { icon: "car-outline", label: "Driver's License" },
//   { icon: "id-card-outline", label: "NIN" },
// ];

// export default function KycTwo() {
//   const [open, setOpen] = useState(false);
//   const router = useRouter();

//   return (
//     <LinearGradient
//       colors={["#1F1F1F", "#1F1F1F", "#1F1F1F"]}
//       style={{ flex: 1, padding: 10 }}
//     >
//       <SafeAreaView style={{ flex: 1 }}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Ionicons
//             onPress={() => router.back()}
//             name="chevron-back"
//             size={24}
//             color={"#fff"}
//           />
//           <Text style={[styles.skipText, { color: "#fff" }]}>
//             KYC Verification
//           </Text>
//         </View>

//         <View style={{ padding: 5, marginTop: 10 }}>
//           <Text style={styles.heading}>Tell us about yourself</Text>
//           <Text style={styles.subHeading}>
//             Choose government issued ID to upload
//           </Text>
//         </View>

//         <View style={styles.container}>
//           {items.map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               onPress={() => {
//                 setOpen(true);
//               }}
//               activeOpacity={0.7}
//               style={styles.listItem}
//             >
//               <View style={styles.iconCircle}>
//                 <Ionicons name={item.icon} size={24} color="#2E358F" />
//               </View>
//               <Text style={styles.text}>{item.label}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//         {open && (
//           <BottomModal
//             visible={open}
//             setVisible={setOpen}
//             height={180}
//             style={{ backgroundColor: "#1F1F1F" }}
//           >
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <Text
//                 style={{
//                   fontFamily: "ManropeMedium",
//                   color: "#fff",
//                   fontSize: 16,
//                 }}
//               >
//                 Verify ID Type
//               </Text>
//               <TouchableOpacity
//                 onPress={() => setOpen(false)}
//                 style={{ marginTop: 3 }}
//               >
//                 <AntDesign name="close" size={20} color="white" />
//               </TouchableOpacity>
//             </View>
//             <TouchableOpacity
//               onPress={() => router.push("/(tabs)/home/passportScan")}
//             >
//               <View
//                 style={[
//                   styles.balanceRow,
//                   {
//                     marginTop: 14,
//                     backgroundColor: "#333",
//                     padding: 14,
//                     borderRadius: 8,
//                     marginBottom: 0,
//                   },
//                 ]}
//               >
//                 <View
//                   style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
//                 >
//                   <Ionicons name="scan" size={20} color="white" />
//                   <Text
//                     style={{
//                       fontFamily: "ManropeMedium",
//                       color: "rgba(255,255,255,0.7)",
//                       fontSize: 14,
//                     }}
//                   >
//                     Scan ID
//                   </Text>
//                 </View>

//                 <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => router.push("/(tabs)/savings/changeDate")}
//             >
//               <View
//                 style={[
//                   styles.balanceRow,
//                   {
//                     marginTop: 18,
//                     backgroundColor: "#333",
//                     padding: 14,
//                     borderRadius: 8,
//                     marginBottom: 0,
//                   },
//                 ]}
//               >
//                 <View
//                   style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
//                 >
//                   <Ionicons name="camera" size={20} color="white" />
//                   <Text
//                     style={{
//                       fontFamily: "ManropeMedium",
//                       color: "rgba(255,255,255,0.7)",
//                       fontSize: 14,
//                     }}
//                   >
//                     Choose from gallery
//                   </Text>
//                 </View>

//                 <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
//               </View>
//             </TouchableOpacity>
//           </BottomModal>
//         )}
//       </SafeAreaView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     width: "90%",
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 10,
//     marginBottom: 15,
//   },
//   skipText: {
//     width: "100%",
//     fontFamily: "ManropeSemiBold",
//     fontSize: 16,
//     textAlign: "center",
//   },
//   container: {
//     padding: 10,
//   },
//   heading: {
//     fontFamily: "ManropeSemiBold",
//     fontSize: 18,
//     color: "#fff",
//   },
//   subHeading: {
//     color: "#fff",
//     marginTop: 15,
//     fontSize: 14,
//     fontFamily: "ManropeMedium",
//   },
//   listItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#333",
//     paddingVertical: 16,
//     paddingHorizontal: 14,
//     borderRadius: 12,
//     marginBottom: 14,
//   },
//   iconCircle: {
//     width: 38,
//     height: 38,
//     borderRadius: 19,
//     backgroundColor: "#E6E7FA",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 12,
//   },
//   text: {
//     fontSize: 16,
//     color: "#fff",
//     fontFamily: "ManropeMedium",
//   },
//   balanceRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   balanceText: { fontSize: 30, fontFamily: "ManropeMedium", color: "#AEB3F5" },
// });

// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { LinearGradient } from "expo-linear-gradient";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import React, { useState } from "react";
// import { useRouter } from "expo-router";
// import BottomModal from "@/components/modals/BottomModal";
// import { AntDesign } from "@expo/vector-icons";
// import * as ImagePicker from "expo-image-picker";

// const items = [
//   { icon: "document-text-outline", label: "Passport" },
//   { icon: "card-outline", label: "Voter's Card" },
//   { icon: "car-outline", label: "Driver's License" },
//   { icon: "id-card-outline", label: "NIN" },
// ];

// export default function KycTwo() {
//   const [open, setOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const router = useRouter();

//   const pickImage = async () => {
//     const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (!permission.granted) {
//       alert("Permission to access gallery is required!");
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       const uri = result.assets[0].uri;
//       const filename = uri.split("/").pop();
//       setSelectedImage({ uri, name: filename });
//       // Redirect immediately after picking
//       router.push("/(tabs)/home/kysSubmitted");
//     }
//   };

//   return (
//     <LinearGradient
//       colors={["#1F1F1F", "#1F1F1F", "#1F1F1F"]}
//       style={{ flex: 1, padding: 10 }}
//     >
//       <SafeAreaView style={{ flex: 1 }}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Ionicons
//             onPress={() => router.back()}
//             name="chevron-back"
//             size={24}
//             color={"#fff"}
//           />
//           <Text style={[styles.skipText, { color: "#fff" }]}>
//             KYC Verification
//           </Text>
//         </View>

//         {/* Headings */}
//         <View style={{ padding: 5, marginTop: 10 }}>
//           <Text style={styles.heading}>Tell us about yourself</Text>
//           <Text style={styles.subHeading}>
//             Choose government issued ID to upload
//           </Text>
//         </View>

//         {/* ID Options */}
//         <View style={styles.container}>
//           {items.map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               onPress={() => setOpen(true)}
//               activeOpacity={0.7}
//               style={styles.listItem}
//             >
//               <View style={styles.iconCircle}>
//                 <Ionicons name={item.icon} size={24} color="#2E358F" />
//               </View>
//               <Text style={styles.text}>{item.label}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Bottom Modal */}
//         {open && (
//           <BottomModal
//             visible={open}
//             setVisible={setOpen}
//             height={selectedImage ? 210 : 180}
//             style={{ backgroundColor: "#1F1F1F" }}
//           >
//             {/* Modal Header */}
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <Text style={styles.modalTitle}>Verify ID Type</Text>
//               <TouchableOpacity
//                 onPress={() => setOpen(false)}
//                 style={{ marginTop: 3 }}
//               >
//                 <AntDesign name="close" size={20} color="white" />
//               </TouchableOpacity>
//             </View>

//             {/* Scan ID Option */}
//             <TouchableOpacity
//               onPress={() => router.push("/(tabs)/home/passportScan")}
//             >
//               <View style={styles.optionRow}>
//                 <View style={styles.optionLeft}>
//                   <Ionicons name="scan" size={20} color="white" />
//                   <Text style={styles.optionText}>Scan ID</Text>
//                 </View>
//                 <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
//               </View>
//             </TouchableOpacity>

//             {/* Choose from Gallery Option */}
//             <TouchableOpacity onPress={pickImage}>
//               <View style={styles.optionRow}>
//                 <View style={styles.optionLeft}>
//                   <Ionicons name="camera" size={20} color="white" />
//                   <Text style={styles.optionText}>Choose from gallery</Text>
//                 </View>
//                 <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
//               </View>
//             </TouchableOpacity>

//             {/* Display chosen file name */}
//             {selectedImage && (
//               <Text style={styles.selectedFile}>
//                 Selected file: {selectedImage.name}
//               </Text>
//             )}
//           </BottomModal>
//         )}
//       </SafeAreaView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     width: "90%",
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 10,
//     marginBottom: 15,
//   },
//   skipText: {
//     width: "100%",
//     fontFamily: "ManropeSemiBold",
//     fontSize: 16,
//     textAlign: "center",
//   },
//   container: {
//     padding: 10,
//   },
//   heading: {
//     fontFamily: "ManropeSemiBold",
//     fontSize: 18,
//     color: "#fff",
//   },
//   subHeading: {
//     color: "#fff",
//     marginTop: 15,
//     fontSize: 14,
//     fontFamily: "ManropeMedium",
//   },
//   listItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#333",
//     paddingVertical: 16,
//     paddingHorizontal: 14,
//     borderRadius: 12,
//     marginBottom: 14,
//   },
//   iconCircle: {
//     width: 38,
//     height: 38,
//     borderRadius: 19,
//     backgroundColor: "#E6E7FA",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 12,
//   },
//   text: {
//     fontSize: 16,
//     color: "#fff",
//     fontFamily: "ManropeMedium",
//   },
//   modalTitle: {
//     fontFamily: "ManropeMedium",
//     color: "#fff",
//     fontSize: 16,
//   },
//   optionRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#333",
//     padding: 14,
//     borderRadius: 8,
//     marginTop: 14,
//   },
//   optionLeft: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//   },
//   optionText: {
//     fontFamily: "ManropeMedium",
//     color: "rgba(255,255,255,0.7)",
//     fontSize: 14,
//   },
//   selectedFile: {
//     color: "#AEB3F5",
//     marginTop: 12,
//     fontSize: 13,
//     fontFamily: "ManropeMedium",
//   },
// });

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import BottomModal from "@/components/modals/BottomModal";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const items = [
  { icon: "document-text-outline", label: "Passport" },
  { icon: "card-outline", label: "Voter's Card" },
  { icon: "car-outline", label: "Driver's License" },
  { icon: "id-card-outline", label: "NIN" },
];

export default function KycTwo() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter();

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert("Permission to access gallery is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      const filename = uri.split("/").pop();
      setSelectedImage({ uri, name: filename });
      router.push("/(tabs)/home/kysSubmitted");
    }
  };

  const handleItemPress = (label) => {
    if (label === "NIN") {
      // Navigate directly to NIN screen
      router.push("/(tabs)/home/nin");
    } else {
      // Open modal for others
      setOpen(true);
    }
  };

  return (
    <LinearGradient
      colors={["#1F1F1F", "#1F1F1F", "#1F1F1F"]}
      style={{ flex: 1, padding: 10 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons
            onPress={() => router.back()}
            name="chevron-back"
            size={24}
            color={"#fff"}
          />
          <Text style={[styles.skipText, { color: "#fff" }]}>
            KYC Verification
          </Text>
        </View>

        {/* Headings */}
        <View style={{ padding: 5, marginTop: 10 }}>
          <Text style={styles.heading}>Tell us about yourself</Text>
          <Text style={styles.subHeading}>
            Choose government issued ID to upload
          </Text>
        </View>

        {/* ID Options */}
        <View style={styles.container}>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleItemPress(item.label)}
              activeOpacity={0.7}
              style={styles.listItem}
            >
              <View style={styles.iconCircle}>
                <Ionicons name={item.icon} size={24} color="#2E358F" />
              </View>
              <Text style={styles.text}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom Modal */}
        {open && (
          <BottomModal
            visible={open}
            setVisible={setOpen}
            height={selectedImage ? 210 : 180}
            style={{ backgroundColor: "#1F1F1F" }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.modalTitle}>Verify ID Type</Text>
              <TouchableOpacity
                onPress={() => setOpen(false)}
                style={{ marginTop: 3 }}
              >
                <AntDesign name="close" size={20} color="white" />
              </TouchableOpacity>
            </View>

            {/* Scan ID Option */}
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/home/passportScan")}
            >
              <View style={styles.optionRow}>
                <View style={styles.optionLeft}>
                  <Ionicons name="scan" size={20} color="white" />
                  <Text style={styles.optionText}>Scan ID</Text>
                </View>
                <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
              </View>
            </TouchableOpacity>

            {/* Choose from Gallery Option */}
            <TouchableOpacity onPress={pickImage}>
              <View style={styles.optionRow}>
                <View style={styles.optionLeft}>
                  <Ionicons name="camera" size={20} color="white" />
                  <Text style={styles.optionText}>Choose from gallery</Text>
                </View>
                <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
              </View>
            </TouchableOpacity>

            {selectedImage && (
              <Text style={styles.selectedFile}>
                Selected file: {selectedImage.name}
              </Text>
            )}
          </BottomModal>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  skipText: {
    width: "100%",
    fontFamily: "ManropeSemiBold",
    fontSize: 16,
    textAlign: "center",
  },
  container: {
    padding: 10,
  },
  heading: {
    fontFamily: "ManropeSemiBold",
    fontSize: 18,
    color: "#fff",
  },
  subHeading: {
    color: "#fff",
    marginTop: 15,
    fontSize: 14,
    fontFamily: "ManropeMedium",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginBottom: 14,
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#E6E7FA",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "ManropeMedium",
  },
  modalTitle: {
    fontFamily: "ManropeMedium",
    color: "#fff",
    fontSize: 16,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: 14,
    borderRadius: 8,
    marginTop: 14,
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  optionText: {
    fontFamily: "ManropeMedium",
    color: "rgba(255,255,255,0.7)",
    fontSize: 14,
  },
  selectedFile: {
    color: "#AEB3F5",
    marginTop: 12,
    fontSize: 13,
    fontFamily: "ManropeMedium",
  },
});
