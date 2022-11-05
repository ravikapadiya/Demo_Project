import { StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { colors } from '../../constants/Color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ChooseAccountStyle: {
    color: colors.black,
    fontSize: scale(24),
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  imageStyle: {
    width: moderateScale(150),
    height: moderateScale(150)
  },
  textStyle: {
    fontSize: scale(20),
    fontWeight: '400',
    color: colors.black,
    marginTop: moderateVerticalScale(16)
  }
});
export default styles;