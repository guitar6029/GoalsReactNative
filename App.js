import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";
export default function App() {
  const [goalInput, setGoalInput] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(text) {
    setGoalInput(text);
  }

  function addGoalHandler() {
    setGoals((prev) => (prev = [...prev, goalInput]));
    setGoalInput("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(e) => goalInputHandler(e)}
          style={styles.goalInput}
          value={goalInput}
          placeholder="Your course goal!"
        />
        <Button
          disabled={!goalInput}
          onPress={addGoalHandler}
          title="Add Goal"
        />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
        {goals.map((goal, index) => (
          <Text key={index} style={{ padding: 8, borderBottomWidth: 1 }}>
            {goal}
          </Text>
        ))}
        {/* This is where the list of goals will be rendered */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
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
  goalsContainer: {
    padding: 16,
  },
});
