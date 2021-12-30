import React, {useEffect} from "react";
import {View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import Button from "./src/component/Button";
import Poppins from "./src/component/Poppins";

const App = () => {
  useEffect(()=> {
    SplashScreen.hide();
  }, []);
  
  return (
    <View>
      <Poppins type="Bold" size={24} color="#ccc">
        Movies
      </Poppins>
      <Poppins color="red">Wildan Shobara</Poppins>

      <Button title='Sign in action is asctivated hahahha'/>
      </View>
  );
};

export default App;