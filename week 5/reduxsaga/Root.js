import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';
import Login from './src/Screen/Login';
import Register from './src/Screen/Register';

export default function Root() {
    const Global = useSelector(state => state.Global)

    const [isLogin, setIsLogin] = useState(true);
  return (
      <View>
        {isLogin ? <Login /> : <Register/>}

        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text>Move To {isLogin ? 'Register' : 'Login'}</Text>
        </TouchableOpacity>
      </View>
  );
}