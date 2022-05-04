import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
export default function App() {
  return (
    <View style={tw`p-4 android:pt-2 bg-red-400 dark:bg-black`}>
    <Text style={tw`text-md text-black dark:text-white`}>Hello World</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
