import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import uuid from "react-native-uuid";
export default function App() {
  const [goalInput, setGoalInput] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(text) {
    setGoalInput(text);
  }

  function addGoalHandler() {
    setGoals((prev) => [
      ...prev,
      { key: uuid.v4().toString(), text: goalInput },
    ]);
    setGoalInput("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <GoalInput goalInput={goalInput} setGoalInput={goalInputHandler} />
        <Button
          disabled={!goalInput}
          onPress={addGoalHandler}
          title="Add Goal"
        />
      </View>
      <View style={styles.goalsContainer}>
        {goals.length > 0 ? (
          <Text>List of Goals</Text>
        ) : (
          <Text>No Goals Added Yet</Text>
        )}
        <FlatList
          data={goals}
          renderItem={(item) => {
            return (
              <GoalItem
                id={item.item.key}
                text={item.item.text}
                onDelete={(id) => {
                  setGoals((prev) => prev.filter((goal) => goal.key !== id));
                }}
              />
            );
          }}
          alwaysBounceHorizontal={false}
          style={styles.scrollView}
        />
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
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
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
  },
  scrollView: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});
