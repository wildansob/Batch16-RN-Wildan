import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// main component
import Register from './src/screens/Register';
import Login from './src/screens/Login';

// bottom tab component
import Chat from './src/screens/Home/Chat';
import Notification from './src/screens/Home/Notification';
import Profile from './src/screens/Home/Profile';

// article
import Article from './src/screens/Home/Article';
import Detail from './src/screens/Home/Article/detail';

const Stack = createStackNavigator();

const BottomTab = createBottomTabNavigator();

const ArticleStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="article list" component={Article} />
      <Stack.Screen name="detail article" component={Detail} />
    </Stack.Navigator>
  );
};

const MyBottomTab = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Article" component={ArticleStack} />
      <BottomTab.Screen name="Chat" component={Chat} />
      <BottomTab.Screen name="Notification" component={Notification} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={MyBottomTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="LoginScreen">
//         {MainStack.map((stack, index) => {
//           return (
//             <Stack.Screen
//               key={index}
//               name={stack.name}
//               component={stack.component}
//               options={{...stack.options}}
//             />
//           );
//         })}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
