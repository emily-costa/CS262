import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Get coffee!", key: "1" },
    { text: "Call Rick!", key: "2" },
    { text: "Walk the dog!", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("ERROR", "TODOs must be over 3 characters long...", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (

    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View styles={styles.list}></View>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
