import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import DatePickers from '../../Components/Datepickers';
import HeaderComp from '../../Components/HeaderComp';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import styles from '../Register/styles';
const Register = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [date, setDate] = useState(new Date())
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState('');
  const onChangeName = (text) => {
    setName(text)
    setError('')
  }
  const onChangeEmail = (text) => {
    setEmail(text)
    setError('')
  }
  const onChangeDate = (text) => {
    setDate(text);
  };
  const onChangePassword = (text) => {
    setPassword(text)
    setError('')
  }
  const onChangeAddress = (text) => {
    setAddress(text)
  }
  const onPreesModelOpen = () => {
    setModalVisible(!modalVisible)
  }
  // const saveData = () => {
  //   firestore()
  //     .collection('Users')
  //     .add({
  //       name: 'Ada Lovelace',
  //       email: 'demo@gmail.com',
  //       password: 1234,
  //       address: 53
  //     })
  //     .then(() => {
  //       console.log('User added!');
  //     });
  // }
  const saveData = async () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name === '') {
      setError('Enter the Name!');
    } else if (email === '') {
      setError('Enter the email!');
    } else if (reg.test(email) !== true) {
      setError('That email address is invalid!');
    } else if (password === '') {
      setError('Enter the valid password');
    } else if (password.trim().length < 6) {
      setError('Enter the 6 character code!');
    } else {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async response => {
          const uid = response.user.uid;
          firestore()
            .collection('User')
            .doc(uid)
            .set({
              name: name,
              email: email,
              password: password,
              address: address,
            })
            .then(() => {
              alert("Registration successful !")
              navigation.navigate("Login")
            })
        })
        .catch(error => {
          console.log('errorwd', error);
          if (error.code === 'auth/email-already-in-use') {
            setError('That email address is already in use!');
            setLoading(false);
          }
          if (error.code === 'auth/invalid-email') {
            setError('That email address is invalid!');
            setLoading(false);
          }
        });
      // await auth().createUserWithEmailAndPassword(email, password)
      // firestore().collection('user').add({
      //   name: name,
      //   email: email,
      //   password: password,
      //   address: address,
      // })
      //   .then(() => {
      //     alert("Registration successful !")
      //     navigation.navigate("Login")
      //   })
      //   .catch(error => {

      //     if (error.code === 'auth/invalid-email') {
      //       alert('That email address is invalid!');
      //     }
      //   });
    }

  }
  return (
    <View style={{ flex: 1, }}>
      <View style={{ paddingHorizontal: moderateScale(15) }}>
        <HeaderComp />
      </View>
      <KeyboardAwareScrollView style={styles.container}>
        <Text style={styles.registerText}>Register</Text>
        <TextInputWithLabel
          label="Name *"
          placeHolder="Enter your name"
          value={name}
          onChangeText={onChangeName}
          inputStyle={{ marginVertical: moderateVerticalScale(20) }}
        />
        <TextInputWithLabel
          value={date?.toLocaleDateString()}
          label="Date of brith *"
          placeHolder="Please enter your dob"
          RightIcon
          editable={false}
          onChangeText={onChangeDate}
          onPress={onPreesModelOpen}
        />
        <DatePickers
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setDate={setDate}
          date={date}
        />
        <TextInputWithLabel
          value={email}
          onchangeText={onChangeEmail}
          label="Email Address *"
          placeHolder="Enter your email"
          keyboardType='email-address'
          inputStyle={{ marginVertical: moderateVerticalScale(20) }}
        />
        <TextInputWithLabel
          value={password}
          onchangeText={onChangePassword}
          label="Password *"
          placeHolder="Enter your Password"
          secureTextEntry={true}
        />
        <TextInputWithLabel
          value={address}
          onchangeText={onChangeAddress}
          label="Address *"
          placeHolder="Enter your address"
          inputStyle={{ marginVertical: moderateVerticalScale(20) }}
        />
        <TextInputWithLabel
          label="Refferal Code *"
          placeHolder="Enter your address"
          inputStyle={{ marginVertical: moderateVerticalScale(15) }}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <ButtonComp btnText={'Continue'}
          btnStyle={{ width: '100%', marginBottom: moderateScale(20) }}
          onPress={saveData}
        />
      </KeyboardAwareScrollView>

    </View>

  );
};

export default Register;
