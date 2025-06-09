import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
export default function GoalInput({
  placeholder = "Your course goal!",
  goalInput,
  setGoalInput,
}) {
  const styles = StyleSheet.create({
    goalInput: {
      width: "80%",
      borderColor: "#cccccc",
      borderWidth: 1,
      padding: 8,
      marginRight: 2,
      borderRadius: 6,
      backgroundColor: "#f9f9f9",
    },
  });

  return (
    <TextInput
      onChangeText={(e) => setGoalInput(e)}
      style={styles.goalInput}
      value={goalInput}
      placeholder={placeholder}
    />
  );
}
