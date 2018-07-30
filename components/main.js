import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';

function decimalToBinary(number){
  if(number > 1)
    return decimalToBinary(Number.parseInt(number/2)) + number%2;

  else if(number == 1)
    return '1';

  else
    return '0';
}

export default class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: '',
      result: '',
    };
  }

  onPress = () => {
    Alert.alert(this.state.value + " = " + decimalToBinary(this.state.value));

    this.setState(() => {
        return {
          value: '',
        };
      });
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder="Valor"
          keyboardType={'numeric'}
          onChangeText={(value) => this.setState({value})}
          value={this.state.value}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
          >

          <Text style={styles.textButton}> Converter </Text>

        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  textButton: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  input: {
    height: 70,
    fontSize: 30,
    color: 'black',
    margin: 35,
  },

  button: {
    marginLeft: 35,
    marginRight: 35,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },

});
