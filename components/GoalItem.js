import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";
export default function GoalItem({ text, onDelete, id }) {

    console.log("GoalItem rendered", text, id);
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
    },
  });

  return (
    <View style={styles.goalItemContainer}>
      <View style={styles.goalItem}>
        <Text>{text}</Text>
      </View>
      <View>
        <Button title="Delete" onPress={() => onDelete(id)} />
      </View>
    </View>
  );
}
