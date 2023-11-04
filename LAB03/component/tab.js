import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../Screen/Login';
import Signup from '../Screen/Signup';
import {NavigationContainer} from '@react-navigation/native'
import Main from '../Screen/Main';
import ResetPassword from '../Screen/ResetPassword';

const stack = createStackNavigator();
export default tab = () => {
  return (
    <NavigationContainer>
        <stack.Navigator
            initialRouteName='Login'
            screenOptions={{headerShown:false}}
            >
            <stack.Screen name='Login' component={Login}/>
            <stack.Screen name='Signup' component={Signup}/>
            <stack.Screen name='Main' component={Main}/>
            <stack.Screen name='RePassword' component={ResetPassword}/>
        </stack.Navigator>
    </NavigationContainer>
  )
}

