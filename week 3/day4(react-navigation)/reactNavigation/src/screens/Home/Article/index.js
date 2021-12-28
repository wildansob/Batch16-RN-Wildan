import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

export default function Article(props) {
  const [dataUser, setDataUser] = useState([]);

  // const getData = () => {
  //   fetchData();
  // };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/users/',
      );

      setDataUser(res.data.map(val => ({...val, maritalStatus: false})));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(dataUser);

  return (
    <ScrollView>
      {dataUser.map(user => {
        return (
          <View key={user.id}>
            <Text>{user.name}</Text>
            <Text>{user.username}</Text>
            <Text>{user.phone}</Text>
          </View>
        );
      })}

      <TouchableOpacity onPress={fetchData}>
        <Text>update Data</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
