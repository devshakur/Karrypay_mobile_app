import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateInput = ({ label = "Choose Date", onSelectDate }) => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showPicker = () => setPickerVisible(true);
  const hidePicker = () => setPickerVisible(false);

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hidePicker();
    if (onSelectDate) onSelectDate(date);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={showPicker} style={styles.inputBox}>
        <Text style={styles.inputText}>
          {selectedDate ? selectedDate.toDateString() : "Select a date"}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isPickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hidePicker}
      />
    </View>
  );
};

export default DateInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 6,
    fontFamily: "ManropeMedium",
  },
  inputBox: {
    borderRadius: 8,
    backgroundColor: "#333",
    paddingVertical: 14,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  inputText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
