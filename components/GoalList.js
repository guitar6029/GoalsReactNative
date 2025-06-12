import { View, FlatList, Text, StyleSheet } from "react-native";
import GoalItem from "./GoalItem";

export default function GoalList({ dataList, onDelete, allowToEdit = false }) {
  const styles = StyleSheet.create({
    goalsContainer: {
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

    scrollView: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
  });

  return (
    <View style={styles.goalsContainer}>
      {dataList.length > 0 ? (
        <Text>List of Goals</Text>
      ) : (
        <Text>No Goals Added Yet</Text>
      )}
      <FlatList
        data={dataList}
        renderItem={(item) => {
          return (
            <GoalItem
              id={item.item.key}
              text={item.item.text}
              allowToEdit={allowToEdit}
              onDelete={() => onDelete(item.item.key)}
            />
          );
        }}
        alwaysBounceHorizontal={false}
        style={styles.scrollView}
      />
    </View>
  );
}
