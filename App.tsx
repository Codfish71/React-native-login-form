/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [isPrintEnabled, setIsPrintEnabled] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Login For heading */}
      <Text style={styles.heading}>Login Form</Text>
      <View style={styles.form}>
        <Text style={styles.textLabel}>First Name : </Text>
        <TextInput
          placeholder="First Name"
          value={firstName}
          style={styles.textInput}
          onChangeText={text => setFirstName(text)}
        />

        <Text style={styles.textLabel}>Last Name : </Text>
        <TextInput
          placeholder="Last Name"
          value={lastName}
          style={styles.textInput}
          onChangeText={text => {
            setLastName(text);
          }}
        />

        <Text style={styles.textLabel}>Email : </Text>
        <TextInput
          placeholder="Email"
          value={email}
          style={styles.textInput}
          onChangeText={text => setEmail(text)}
        />

        <Text style={styles.textLabel}>Password : </Text>
        <TextInput
          placeholder="Password"
          value={password}
          style={styles.textInput}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => setIsPrintEnabled(true)}>
          <Text>Print details</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text>Remove details</Text>
        </Pressable>
      </View>

      <View style={styles.printView}>
        {isPrintEnabled ? (
          <View>
            <Text>{firstName}</Text>
            <Text>{lastName}</Text>
            <Text>{email}</Text>
            <Text>{password}</Text>
          </View>
        ) : console.warn("SOmething wrong")}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ede7f6',
    flex: 1,
  },
  heading: {
    fontFamily: 'lucida grande',
    fontSize: 30,
    color: '#141823',
    textAlign: 'center',
    textAlignVertical: 'top',
    marginTop: 90,
  },
  button: {
    height: 40,
    width: 160,
    borderRadius: 10,
    backgroundColor: '#311b92',
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationColor: '#000000',
    marginTop: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  form: {},
  textLabel: {
    fontFamily: 'lucida grande',
    fontSize: 17,
    color: '#141823',
    textAlign: 'left',
    marginLeft: 20,
  },
  textInput: {
    margin: 20,
    marginTop: -1,
    color: '#141823',
    borderColor: '#141823',
    borderRadius: 3,
    borderWidth: 2,
  },
  printView: {
    color: '#141823',
  },
});

export default App;
