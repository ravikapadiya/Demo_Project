//import liraries
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import { colors } from '../constants/Color';
// create a component
const ButtonComp = ({
  btnText,
  btnStyle = {},
  onPress = () => { },
  btnTextStyle = {}
}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={{ ...styles.btnStyle, ...btnStyle }} onPress={onPress}>
      <Text style={{ ...styles.btnText, ...btnTextStyle }}>{btnText}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  btnStyle: {
    height: moderateScale(48),
    backgroundColor: colors.themColor,
    borderRadius: moderateScale(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: scale(12),
    color: colors.white,
    fontWeight: 'bold',
    textTransform: "uppercase"
  }
});

//make this component available to the app
export default ButtonComp;
