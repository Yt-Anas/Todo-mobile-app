import React, {useState} from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Header from "./components/Header";
import TodoItem from './components/TodoItem';
import AddTodo from "./components/AddTodo";

const App = () => {
  const [todos, setTodos] = useState([
    {Text : 'Buy coffee', key :`1`},
    {Text : 'Create App', key :`2`},
    {Text : 'Play on the switch', key :`3`}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    setTodos((prevTodos)=> {
      return [
        {text: text , key : Math.random().toString()},
        ...prevTodos
      ];
    })
  }
  
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler= {submitHandler} />
        <View style={styles.list}>
          <FlatList
            data = {todos}
            renderItem = {({item}) =>  (
              <TodoItem item = {item} pressHandler = {pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content : {
    padding : 40
  },
  list : {
    marginTop : 20 ,
  }
})

export default App