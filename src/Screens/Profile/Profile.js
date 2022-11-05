//import liraries
import auth from '@react-native-firebase/auth';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
// create a component
const Profile = () => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        navigate('Login');
      });
  }
  return (
    <View style={styles.container}>
      <ButtonComp btnText={'Sign Out'}
        btnStyle={{ width: '90%', marginBottom: moderateScale(20), backgroundColor: 'red', }}
        onPress={signOut}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Profile;
