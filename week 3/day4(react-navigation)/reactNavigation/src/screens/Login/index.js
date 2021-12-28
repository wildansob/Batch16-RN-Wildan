import React, {useState} from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';

export default function Login(props) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const moveToHome = () => {
    if (username === 'audywp' && password === 'password') {
      props.navigation.navigate('Home', {
        screen: 'Article',
      });
    } else {
      Alert.alert('username/password salah');
    }
  };

  return (
    <View>
      <Text>{isLogin ? 'Login' : 'Hallo selamat datang'}</Text>

      <TextInput
        onChangeText={text => setUsername(text)}
        placeholder="username"
      />
      <TextInput
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        placeholder="password"
      />

      <TouchableOpacity onPress={moveToHome}>
        <Text>Move to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
