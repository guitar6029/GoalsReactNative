import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
export default function App() {
  const [goalInput, setGoalInput] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(text) {
    setGoalInput(text);
  }

  function addGoalHandler() {
    setGoals(
      (prev) =>
        (prev = [...prev, { key: crypto.randomUUID(), text: goalInput }])
    );
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
        {goals.length > 0 ? (
          <Text>List of Goals</Text>
        ) : (
          <Text>No Goals Added Yet</Text>
        )}
        <FlatList
          data={goals}
          renderItem={(item) => {
            return (
              <View style={styles.goalItemContainer}>
                <View style={styles.goalItem}>
                  <Text>{item.item}</Text>
                </View>
                <View>
                  <Button
                    title="Delete"
                    onPress={() => {
                      setGoals((prev) =>
                        prev.filter((_, i) => i !== item.index)
                      );
                    }}
                  />
                </View>
              </View>
            );
          }}
          alwaysBounceHorizontal={false}
          styles={styles.scrollView}
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
