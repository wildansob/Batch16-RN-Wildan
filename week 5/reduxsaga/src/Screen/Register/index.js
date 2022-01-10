import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { useDispatch } from 'react-redux';
import { RegisterAction } from './redux/action';

export default function Register() {

  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const submitRegister = () =>{
      dispatch(RegisterAction({username, phone, email}))}
  return (
    <View>
      <Text>Ini Register Page</Text>
      <TextInput
        placeholder="username"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="phone"
        onChangeText={text => setPhone(text)}
        keyboardType="phone-pad"
      />
      <TextInput placeholder="email" onChangeText={text => setEmail(text)} 
      />

      <Button title='Register' onPress={submitRegister}/>
    </View>
  );
}
