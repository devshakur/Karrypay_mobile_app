// import React, { useEffect, useState } from "react";
// import { View, StyleSheet } from "react-native";
// import FaceModal from "@/components/modals/FaceModal";
// import FingerPrintModal from "@/components/modals/FingerPrintModal";
// import PasswordModal from "@/components/modals/PasswordModal"; // create this later

// export default function FaceLogin() {
//   // which modal is active
//   const [activeModal, setActiveModal] = useState<
//     "face" | "finger" | "password" | null
//   >(null);

//   // open the face modal by default when the screen mounts
//   useEffect(() => {
//     setActiveModal("finger");
//   }, []);

//   return (
//     <>
//       {/* Face Modal */}
//       <FaceModal
//         visible={activeModal === "face"}
//         setVisible={(v) => setActiveModal(v ? "face" : null)}
//         switchToPassword={() => setActiveModal("password")}
//       />

//       {/* Fingerprint Modal */}
//       <FingerPrintModal
//         visible={activeModal === "finger"}
//         setVisible={(v) => setActiveModal(v ? "finger" : null)}
//         switchToPassword={() => setActiveModal("password")}
//       />

//       {/* Password Modal */}
//       <PasswordModal
//         visible={activeModal === "password"}
//         setVisible={(v) => setActiveModal(v ? "password" : null)}
//       />
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1 },
// });

import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

import FaceModal from "@/components/modals/FaceModal";
import FingerPrintModal from "@/components/modals/FingerPrintModal";
import PasswordModal from "@/components/modals/PasswordModal";

export default function FaceLogin() {
  const [activeModal, setActiveModal] = useState<
    "face" | "finger" | "password" | null
  >(null);

  useEffect(() => {
    detectAuthMethod();
  }, []);

  const detectAuthMethod = async () => {
    try {
      // Check if device supports biometric hardware
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      if (!hasHardware) {
        // fallback to password if no hardware
        setActiveModal("password");
        return;
      }

      // Check supported biometric types
      const supportedTypes =
        await LocalAuthentication.supportedAuthenticationTypesAsync();

      if (
        supportedTypes.includes(
          LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
        )
      ) {
        setActiveModal("face");
      } else if (
        supportedTypes.includes(
          LocalAuthentication.AuthenticationType.FINGERPRINT
        )
      ) {
        setActiveModal("finger");
      } else {
        // no biometric available → show password
        setActiveModal("password");
      }
    } catch (error) {
      console.error("Biometric detection error:", error);
      setActiveModal("password");
    }
  };

  return (
    <>
      {/* Face ID Modal */}
      <FaceModal
        visible={activeModal === "face"}
        setVisible={(v) => setActiveModal(v ? "face" : null)}
        switchToPassword={() => setActiveModal("password")}
      />

      {/* Fingerprint Modal */}
      <FingerPrintModal
        visible={activeModal === "finger"}
        setVisible={(v) => setActiveModal(v ? "finger" : null)}
        switchToPassword={() => setActiveModal("password")}
      />

      {/* Password Modal (fallback) */}
      <PasswordModal
        visible={activeModal === "password"}
        setVisible={(v) => setActiveModal(v ? "password" : null)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
