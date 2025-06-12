import { StyleSheet, View } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import uuid from "react-native-uuid";
import GoalList from "./components/GoalList";
export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(goalInput) {
    setGoals((prev) => [
      ...prev,
      { key: uuid.v4().toString(), text: goalInput },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <GoalInput onGoalAdd={(goalInput) => addGoalHandler(goalInput)} />
      </View>
      <GoalList
        dataList={goals}
        allowToEdit
        onDelete={(id) =>
          setGoals((prev) => prev.filter((goal) => goal.key !== id))
        }
      />
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
});
