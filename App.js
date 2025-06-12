import { StyleSheet, View, Modal, Button } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import uuid from "react-native-uuid";
import GoalList from "./components/GoalList";
export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function addGoalHandler(goalInput) {
    setGoals((prev) => [
      ...prev,
      { key: uuid.v4().toString(), text: goalInput },
    ]);

    //close modal after adding goal
    setIsModalVisible(false);
  }

  return (
    <>
      {isModalVisible && (
        <Modal
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.addGoalModal}>
            <View style={styles.inputContainer}>
              <GoalInput onGoalAdd={(goalInput) => addGoalHandler(goalInput)} />
            </View>
            <View style={{ marginTop: 20 }}>
              <Button title="Close" onPress={() => setIsModalVisible(false)} />
            </View>
          </View>
        </Modal>
      )}
      <View style={styles.appContainer}>
        <View>
          <Button
            title="Add New Goal"
            onPress={() => setIsModalVisible(true)}
          />
        </View>
        <GoalList
          dataList={goals}
          allowToEdit
          onDelete={(id) =>
            setGoals((prev) => prev.filter((goal) => goal.key !== id))
          }
        />
      </View>
    </>
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
  addGoalModal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
