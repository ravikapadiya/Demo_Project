//import liraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import styles from "./styles";
// create a component
const ChooseAccount = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, }}>
      <View style={{ paddingHorizontal: moderateScale(10) }}>
        <HeaderComp />
      </View>
      <View style={styles.container}>
        <Text style={styles.ChooseAccountStyle}>Choose your account type</Text>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../../assests/images/home1.png')} style={styles.imageStyle} />
          <Text style={styles.textStyle}>Agency</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../../assests/images/man.png')} style={styles.imageStyle} />
          <Text style={styles.textStyle}>Freelancer</Text>
        </View>
        <ButtonComp btnText={'Continue'}
          btnStyle={{ width: '100%', marginBottom: moderateScale(20) }}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>

  );
};


export default ChooseAccount;
