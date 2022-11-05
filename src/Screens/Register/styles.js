import { StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { colors } from '../../constants/Color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
  },
  nameView: {
    flexDirection: 'row',
    marginTop: moderateVerticalScale(16)
  },
  countryView: {
    flexDirection: 'row',
  },
  subView: {
    marginHorizontal: moderateScale(8),
  },
  registerText: {
    fontSize: scale(30),
    fontWeight: 'bold',
    color: colors.black,
    marginTop: moderateVerticalScale(10)
  },
  error: {
    color: 'red',
    marginLeft: moderateVerticalScale(5.5),
    marginBottom: moderateVerticalScale(15),
  },
  errors: {
    color: 'red',
    marginLeft: moderateVerticalScale(5.5),
    marginTop: moderateVerticalScale(5),
  },
});
export default styles;