import { Text, View, Pressable, TextInput, FlatList } from "react-native";
import React, { useState } from "react";
import className from 'twrnc'



export default function Index() {
  const [todos, setTodos] = useState<{ key: number, value: string }[]>([]);
  const [todo, setTodo] = useState<string>('');
  const [edit, setEdit] = useState<number | null>(null);
  const addTask = () => {
    if (todo.trim()) {
      if (edit !== null) {
        setTodos(todos.map(item => (item.key === edit ? { key: todos.length, value: todo } : item)))
        setEdit(null);
      } else {
        setTodos([...todos, { key: todos.length, value: todo }]);
      };
      setTodo('');
    }
  };
  const delTask = (key: number) => {
    setTodos(todos.filter(item => item.key !== key));
  };
  const editTask = (key: number,value: string) => {
    setTodo(value);
    setEdit(key);
  };
  return (
    <View style={className`p-3 gap-2`}>
      <Text style={className`text-2xl font-bold`}>
        Todo List App
      </Text>
      <View style={className` justify-between items-center flex-row gap-2 bg-white p-2 rounded-lg`}>
        <TextInput onChangeText={setTodo} value={todo} placeholder='Enter todos' style={className`flex-1 p-2 text-lg bg-blue-200 rounded-lg`} />
        <Pressable onPress={addTask} style={className`p-2 bg-blue-500 rounded-lg`}><Text style={className`text-white text-lg`}>{edit !== null ? 'Update' : 'Add'} Todo</Text></Pressable>
      </View>


      <FlatList data={todos} renderItem={({ item }) => (
        <View style={className`gap-2 my-2 bg-white p-2 rounded-xl`}>
          <Text style={className`text-lg`}>{item.value}</Text>
          <View style={className`flex-row justify-between gap-2`}>
            <Pressable onPress={()=>editTask(item.key,item.value)} style={className`p-2 bg-yellow-500 rounded-lg flex-1`}><Text style={className`text-white text-lg`}>Edit</Text></Pressable>
            <Pressable onPress={() => delTask(item.key)} style={className`p-2 bg-red-500 rounded-lg flex-1`}><Text style={className`text-white text-lg`}>Delete</Text></Pressable>
          </View>
        </View>

      )} />


    </View>

  );
}
