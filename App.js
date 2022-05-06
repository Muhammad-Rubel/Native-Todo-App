import React, { useState } from "react";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  let [newTodo, setNewTodo] = "";

  const [todos, setTodos] = useState([
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
  ]);

  const addNewTodo = () => {
    if (newTodo) {
      const obj = {
        id: Math.random(),
        name: newTodo,
      };
      setTodos([obj, ...todos]);
    }
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-2xl font-bold`}>My Todo App</Text>
      </View>

      {/* Todos */}
      <View style={styles.todoContainer}>
        {/* Add new todo */}
        <View>
          <Text>Add new Todo</Text>
          <TextInput
            style={tw`border-b-2 focus:outline-none`}
            placeholder="Go to shop..."
            onChange={(value) => {
              setNewTodo(value);
            }}
          ></TextInput>

          <TouchableOpacity
            onPress={addNewTodo}
            style={tw`px-6 py-2 rounded bg-blue-500 text-white mt-2 ml-auto`}
          >
            <Text>Add +</Text>
          </TouchableOpacity>
        </View>
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
