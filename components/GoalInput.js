import { TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
export default function GoalInput({
  placeholder = "Your course goal!",
  onGoalAdd,
}) {
  const [goalInput, setGoalInput] = useState("");
  function goalInputHandler(text) {
    setGoalInput(text);
  }

  function handleAddGoal() {
    if (goalInput.trim().length === 0) return; // Prevent adding empty goals
    onGoalAdd(goalInput);
    setGoalInput(""); // Clear input after adding
  }

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
    <>
      <TextInput
        onChangeText={(e) => goalInputHandler(e)}
        style={styles.goalInput}
        value={goalInput}
        placeholder={placeholder}
      />
      <Button disabled={!goalInput} onPress={handleAddGoal} title="Add Goal" />
    </>
  );
}
