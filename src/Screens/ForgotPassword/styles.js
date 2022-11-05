import { StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { colors } from '../../constants/Color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
  },
  headingText: {
    color: colors.black,
    fontSize: scale(16),
    fontWeight: 'bold',
    marginTop: moderateScale(15),
    textAlign: 'center'
  },
  forgotStyle: {
    color: colors.black,
    fontSize: scale(24),
    fontWeight: 'bold',
    textAlign: 'center'
  },
  descText: {
    fontSize: scale(14),
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
    marginTop: moderateVerticalScale(16)
  },
  imageStyle: {
    width: moderateScale(60),
    height: moderateScale(60)
  }
});
export default styles;