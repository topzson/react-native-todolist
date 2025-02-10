import { Text, View, Pressable, TextInput } from "react-native";
import React from "react";
import className from 'twrnc'


export default function Index() {
  return (
    <View style={className`p-3 gap-2`}>
      <Text style={className`text-2xl font-bold`}>
        Todo List App
      </Text>
      <View style={className` justify-between items-center flex-row gap-2 bg-white p-2 rounded-lg`}>
        <TextInput placeholder='Enter todos' style={className`flex-1 p-2 text-lg bg-blue-200 rounded-lg`} />
        <Pressable style={className`p-2 bg-blue-500 rounded-lg`}><Text style={className`text-white text-lg`}>Add Todo</Text></Pressable>
      </View>

      <View style={className`gap-2 my-2 bg-white p-2 rounded-xl`}>
        <Text style={className`text-lg`}>Todos 1</Text>
        <View style={className`flex-row justify-between gap-2`}>
          <Pressable style={className`p-2 bg-yellow-500 rounded-lg flex-1`}><Text style={className`text-white text-lg`}>Edit</Text></Pressable>
          <Pressable style={className`p-2 bg-red-500 rounded-lg flex-1`}><Text style={className`text-white text-lg`}>Delete</Text></Pressable>
        </View>
      </View>

    </View>

  );
}
