import { StyleSheet, TextInput,View, Button } from 'react-native'
import React, { useState} from 'react'

const AddTodo = ({submitHandler}) => {
    const [text,setText] = useState("");

    const changeHandler = (val) => {
        setText(val);
    }

  return (
    <View>
      <TextInput
        style = {styles.input}
        placeholder='New todo...'
        onChangeText={changeHandler}
      />
      <Button onPress={() => submitHandler(text)} title='Add Todo' color='coral' />
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
    input : {
        marginBottom : 10,
        paddingHorizontal : 8,
        paddingVertical : 6,
        borderBottomWidth : 1,
        borderBottomColor : '#ddd'
    }
})