//import liraries
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import { colors } from '../../constants/Color';
import styles from "./styles";

// create a component
const Login = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');
  const [errors, setErrors] = useState('');
  const onchangeEmail = (text) => {
    setEmail(text)
    setErrors('')
  }
  const onchangePassword = (text) => {
    setPassword(text)
    setError('')
  }
  const saveValue = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '') {
      setErrors('Enter the email!');
    } else if (reg.test(email) !== true) {
      setErrors('That email address is invalid!');
    } else if (password === '') {
      setError('Enter the valid password');
    } else if (password.trim().length < 6) {
      setError('Enter the 6 character code!');
    } else {

      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          alert('user Logged in succesful !')
          navigation.navigate(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            }),
          );

        })
        .catch(error => {
          console.log(error.code);
          if (error.code === 'auth/user-not-found') {
            setErrors('That email address is invalid!');
          }
          if (error.code === 'auth/wrong-password') {
            setError('That password is invalid!');
          }

        });
    }

  }
  // const loginData = () => {
  //   if (email && password) {
  //     firestore()
  //       .collection('user')
  //       .where('email', '==', email)
  //       .get()
  //       .then((querySnapshot) => {
  //         if (querySnapshot.docs.length > 0) {
  //           if (querySnapshot.docs[0]._data.email === email && querySnapshot.docs[0]._data.password === password) {
  //             alert('user Logged in succesful !')
  //             navigation.navigate(
  //               CommonActions.reset({
  //                 index: 0,
  //                 routes: [{ name: 'Home' }],
  //               }),
  //             );

  //           } else {
  //             alert("email id or password invalid")
  //           }
  //         } else {
  //           alert("Account not found ")
  //         }

  //       })
  //       .catch(error => {
  //         console.log(error)
  //       });
  //   } else {
  //     alert("Please fill  Data")
  //   }
  // }
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{ flex: 1, }}>
        <ImageBackground
          source={require('../../assests/images/chiled.jpg')}
          style={styles.imgstyle}
        >
          <Text style={styles.LoginStyle}>LOGIN</Text>
        </ImageBackground>
        <View style={styles.mainStyle}>
          <TextInputWithLabel
            value={email}
            onchangeText={onchangeEmail}
            label="Email Address *"
            placeHolder="Enter your email"
            keyboardType='email-address'

          />
          {errors ? <Text style={styles.errors}>{errors}</Text> : null}
          <TextInputWithLabel
            value={password}
            onchangeText={onchangePassword}
            label="Password *"
            placeHolder="Enter your Password"
            secureTextEntry={true}
            inputStyle={{ marginTop: moderateVerticalScale(20), }}
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <TouchableOpacity activeOpacity={0.7} style={styles.forgotView} onPress={() => navigation.navigate('ForgotPassword')} >
            <Text style={styles.forgotText}>Forgot Password ?</Text>
          </TouchableOpacity>
          <ButtonComp
            btnText={'Login'}
            onPress={saveValue}
          />
          <ButtonComp
            btnText={'Login With Phone'}
            btnStyle={{ width: '100%', marginTop: moderateScale(20), backgroundColor: colors.primary }}
            onPress={() => navigation.navigate('PhoneLogin')}
          />
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.memberText}>Not a Member?</Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('ChooseAccount')}>
            <Text style={styles.joinText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>

    </View>
  );
};

//make this component available to the app
export default Login;
