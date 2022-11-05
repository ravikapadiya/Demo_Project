
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import { colors } from '../../constants/Color';
import styles from './styles';

const PhoneLogin = () => {
  const navigation = useNavigation()
  const [mobilNumber, setMobilNumber] = useState('')
  const [confirm, setConfirm] = useState(null);
  const [otp, setOtp] = useState('');
  const onchangeMobilNumber = (text) => {
    setMobilNumber(text)
  }
  const signInWithPhoneNumber = async () => {
    const confirmation = await auth().signInWithPhoneNumber('+91' + mobilNumber);
    setConfirm(confirmation);
  }
  const verifyCode = async () => {
    try {
      await confirm.confirm(otp);
      alert('Login succesful!')
      setTimeout(() => {
        navigation.navigate('Home')
      }, 5000);
    } catch (error) {
      console.log('Invalid code.');
    }
  }
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: moderateScale(10) }}>
        <HeaderComp onPressBack={() => {
          setConfirm(null)
          navigation.goBack()
        }} />
      </View>
      <View style={styles.phoneContainer}>
        <View style={{ flex: 0.8, }}>
          <Text style={styles.phoneStyle}>Phon Login</Text>
          <Text style={styles.descText}>Enter the phone number associated with your account.</Text>
        </View>

        <View style={{ flex: 2, }}>
          {confirm === null ? (
            <View>
              <TextInputWithLabel
                value={mobilNumber}
                onchangeText={onchangeMobilNumber}
                label="Phone Number *"
                placeHolder="Enter your phone number"
                keyboardType='numeric'
                inputStyle={{ marginTop: moderateVerticalScale(50), }}
              />
              <ButtonComp
                btnText={'Login'}
                btnStyle={{ width: '100%', marginTop: moderateScale(50), backgroundColor: colors.themColor }}
                onPress={() => { signInWithPhoneNumber() }}
              />
            </View>
          ) : (
            <View>
              <OTPInputView
                style={{ height: 200, alignSelf: 'center', }}
                pinCount={6}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code => {
                  console.log(`Code is ${code}, you are good to go!`)
                  setOtp(code)
                })}
              />
              <ButtonComp
                btnText={'Verify OTP'}
                btnStyle={{ width: '100%', marginTop: moderateScale(50), backgroundColor: colors.themColor }}
                onPress={() => { verifyCode() }}
              />
            </View>

          )}
        </View>
      </View>
    </View>
  );
};


export default PhoneLogin;
