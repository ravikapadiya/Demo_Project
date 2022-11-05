//import liraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';

// create a component
const HeaderComp = ({
  onPressBack
}) => {
  const navigation = useNavigation()
  const goBack = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={!!onPressBack ? onPressBack : goBack}>
        <Ionicons name='chevron-back' size={30} color='black' />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateScale(42),
  },
});

//make this component available to the app
export default HeaderComp;
