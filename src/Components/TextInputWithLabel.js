//import liraries
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../constants/Color';
// create a component
const TextInputWithLabel = ({
  label,
  value,
  placeHolder,
  onchangeText = () => { },
  inputStyle = {},
  keyboardType,
  RightIcon,
  editable,
  onPress,
  ...props
}) => {
  return (
    <View style={{ ...styles.inputStyle, ...inputStyle }}>
      <Text style={styles.labelTextStyle}>{label}</Text>
      <View style={styles.flexView}>
        <TextInput
          value={value}
          placeholder={placeHolder}
          style={styles.inlineStyle}
          keyboardType={keyboardType}
          placeholderTextColor={colors.inputTitle}
          editable={editable}
          onChangeText={onchangeText}
          {...props}
        />
        {!!RightIcon ?
          <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
            <Entypo name='chevron-down' size={20} color='#000000cc' />
          </TouchableOpacity> : null}

      </View>

    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.boderColor,
    borderRadius: moderateScale(4),
  },
  inlineStyle: {
    padding: moderateScale(8),
    fontSize: scale(14),
    color: colors.black,
    flex: 1,
  },
  labelTextStyle: {
    fontSize: scale(14),
    color: colors.label
  },
  flexView: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  }

});

//make this component available to the app
export default TextInputWithLabel;
