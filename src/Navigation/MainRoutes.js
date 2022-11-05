import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AuthStack from "./AuthStack";
import HomeStack from './HomeStack';

function MainRoutes() {
  const [user, setUser] = useState('');
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((userExist) => {
      if (userExist) {
        setUser(userExist)
      } else {
        setUser('')
      }
    });
    return unsubscribe
  }, []);
  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
export default MainRoutes