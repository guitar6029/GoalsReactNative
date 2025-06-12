import { View, Text, Pressable, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { useRef, useState } from "react";

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#f9f9f9",
    width: "80%",
  },
  goalItemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
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

export default function GoalItem({ text, onDelete, id, allowToEdit }) {
  const [editMode, setEditMode] = useState(false);
  const [editGoalInput, setEditGoalInput] = useState(text);
  const inputRef = useRef(null);

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <View style={styles.goalItemContainer}>
      <View style={styles.goalItem}>
        {editMode ? (
          <TextInput
            ref={inputRef}
            value={editGoalInput}
            onChangeText={setEditGoalInput}
            style={styles.goalInput}
            returnKeyType="done"
            onSubmitEditing={() => {
              inputRef.current?.blur();
              toggleEditMode();
            }}
          />
        ) : (
          <Text>{editGoalInput}</Text>
        )}
      </View>

      {allowToEdit && (
        <Pressable
          android_ripple={{ color: "#ccc" }}
          onPress={toggleEditMode}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#ddd" : "#eee",
              padding: 10,
              borderRadius: 6,
            },
          ]}
        >
          <Text
            style={{ textAlign: "center", color: "blue", fontWeight: "bold" }}
          >
            {editMode ? "Done" : "Edit"}
          </Text>
        </Pressable>
      )}

      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={() => onDelete(id)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#ddd" : "#eee",
            padding: 10,
            borderRadius: 6,
          },
        ]}
      >
        <Text
          style={{ textAlign: "center", color: "blue", fontWeight: "bold" }}
        >
          Delete
        </Text>
      </Pressable>
    </View>
  );
}
