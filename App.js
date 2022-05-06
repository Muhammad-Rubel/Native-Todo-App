import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const todos = [
    {
      id: 1,
      name: "Go to Shop",
    },
    {
      id: 2,
      name: "Wash Clothes",
    },
    {
      id: 3,
      name: "Go to Office",
    },
    {
      id: 4,
      name: "Play Football",
    },
    {
      id: 5,
      name: "Watch Movie",
    },
    {
      id: 6,
      name: "Go to Shop",
    },
    {
      id: 7,
      name: "Wash Clothes",
    },
    {
      id: 8,
      name: "Go to Office",
    },
    {
      id: 9,
      name: "Play Football",
    },
    {
      id: 10,
      name: "Watch Movie",
    },
  ];
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.title}>My Todo App</Text>
      </View>

      {/* Todos */}
      <View style={styles.todoContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={todos}
          renderItem={({ item }) => (
            <Text style={styles.todoItem}>{item.name}</Text>
          )}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  header: {
    padding: 24,
    backgroundColor: "#f4f4f4",
    textAlign: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  todoContainer: {
    paddingHorizontal: 20,
    marginTop: 80,
    paddingBottom: 20,
  },
  todoItem: {
    backgroundColor: "gold",
    padding: 24,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    borderRadius: 3,
  },
});
