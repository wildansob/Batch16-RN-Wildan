import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Register(props) {
  const [name, setName] = useState('');
  const [userName, setuserName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const moveToLogin = () => {
    props.navigation.navigate('Login');
  };
  return (
    <View>
      <Text>Halo Register selamat datang</Text>

      <TextInput placeholder="name" />
      <TextInput placeholder="username" />
      <TextInput placeholder="phone" />
      <TextInput placeholder="email" />

      <TouchableOpacity onPress={moveToLogin}>
        <Text>Move to Login</Text>
      </TouchableOpacity>
    </View>
  );
}
