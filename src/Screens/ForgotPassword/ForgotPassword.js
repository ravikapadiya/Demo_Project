//import liraries
import React from 'react';
import { Image, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import styles from "./styles";
const ForgotPassword = () => {
  // const [keyboardHight, setKeyboardHight] = useState(0)
  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", (event) => {
  //     setKeyboardHight(event.endCoordinates.height - 400)
  //   })
  //   const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", (event) => {
  //     setKeyboardHight(0)
  //   })
  //   return () => {
  //     keyboardDidShowListener.remove()
  //     keyboardDidHideListener.remove()
  //   }
  // }, [])

  return (
    <View style={{ flex: 1, }}>
      <View style={{ paddingHorizontal: moderateScale(10) }}>
        <HeaderComp />
      </View>
      <View style={styles.container}>
        <View style={{ flex: 0.2, alignItems: 'center', }}>
          <Image source={require('../../assests/images/locks.png')} style={styles.imageStyle} />
        </View>
        <View style={{ flex: 0.3 }}>
          <Text style={styles.forgotStyle}>Forgot Password</Text>
          <Text style={styles.descText}>Enter the email address associated with your account.</Text>
        </View>
        <View style={{ flex: 0.3 }}>
          <TextInputWithLabel
            label="Email Address *"
            placeHolder="Enter your email"
            keyboardType='email-address'
            inputStyle={{ marginBottom: moderateVerticalScale(28), }}
          />
          <ButtonComp btnText={'Send'}
            btnStyle={{ marginTop: moderateScale(20) }}

          />
        </View>

      </View>
    </View>

  );
};


export default ForgotPassword;
