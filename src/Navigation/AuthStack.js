import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ChooseAccount, ForgotPassword, Login, PhoneLogin, Register } from "../Screens/index";
const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ChooseAccount" component={ChooseAccount} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="PhoneLogin" component={PhoneLogin} />
    </Stack.Navigator>
  )
}