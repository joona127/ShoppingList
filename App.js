import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
const [input, setInput] = React.useState('');
const [data, setData] = React.useState([]);

const Add = () => {
  setData([...data, {key: `${input}`}]);
}

const Clear = () => {
  setData([]);

}
  return (
    <View style={styles.container}>
      <Text></Text>
      <TextInput

        style={styles.TextInputStyle}

        keyboardType={'default'}

        onChangeText={(input) => setInput(input)}
        value={input}

      />

<View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="ADD" onPress={Add} />
        </View>
        <View style={styles.button}>
          <Button title="CLEAR" onPress={Clear} />
        </View>
      </View>
      <Text style={styles.text}>Shopping List</Text>
      <FlatList
      data={data}
      renderItem={({item}) =>
      <Text>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 170
  },
  TextInputStyle: {
    textAlign: 'center',
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingTop: 40

  },
  button: {
    width: '16%',
    height: 40,
    
  },
  text: {
    paddingTop: 30,
    fontWeight: 'bold',
    fontSize: 17,
    color: 'blue'
  }
});
