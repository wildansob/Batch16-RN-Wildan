import {MyBottomTab} from './App';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

export const MainStack = [
  {
    name: 'Register',
    component: Register,
    options: {},
  },

  {
    name: 'Login',
    component: Login,
    options: {},
  },

  {
    name: 'Home',
    component: MyBottomTab,
    options: {headerShown: false},
  },
];
