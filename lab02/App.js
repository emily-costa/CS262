//Emily Costa
//Lab 02

import React, { useState } from "react";
import { StyleSheet, Text, TextInput, FlatList, TouchableOpacity, View } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);
  const [birthdays, setBirthdays] = useState([]);
  const[name, setName] = useState('');
  const addBirthday = () => { setBirthdays(birthdays.concat({key:count.toString()})); 
  setCount(prevCount => prevCount + 1);}


  const clickHandle = () => {
    setName(name);
    setBirthday(birthday);
  }


  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Enter name:</Text>
        <TextInput
        style={styles.input}
        placeholder='e.g. Emily Costa'
        onChangeText={(userName) => setName(userName)} />
        <Text>{name} is {count} years old.</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={addBirthday}>
        <Text>Birthday!</Text>
      </TouchableOpacity>

      <FlatList data={birthdays} renderItem={({ item }) => (<Text>{item.key}</Text>)}>
      </FlatList>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: "center",
    backgroundColor: '#d9d9d9',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
    marginTop: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});

export default App;
