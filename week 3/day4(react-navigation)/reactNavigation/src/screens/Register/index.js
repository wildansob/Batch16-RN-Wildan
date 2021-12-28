import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Register(props) {
  const moveToLogin = () => {
    props.navigation.navigate('Login');
  };
  return (
    <View>
      <Text>Halo Register selamat datang</Text>

      <TouchableOpacity onPress={moveToLogin}>
        <Text>Move to Login</Text>
      </TouchableOpacity>
    </View>
  );
}
