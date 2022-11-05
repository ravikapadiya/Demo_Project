import { StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { colors } from '../../constants/Color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  imgstyle: {
    height: moderateScale(200),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginStyle: {
    fontSize: scale(32),
    color: colors.black,
    fontWeight: 'bold'
  },
  mainStyle: {
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateVerticalScale(44),
  },
  forgotView: {
    alignSelf: 'flex-end',
    marginVertical: moderateVerticalScale(24),
  },
  forgotText: {
    color: colors.themColor,
    fontSize: scale(16),
    fontWeight: '500',
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateVerticalScale(72),
    justifyContent: 'center',
  },
  memberText: {
    color: colors.black
  },
  joinText: {
    color: colors.black,
    fontSize: scale(13),
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginLeft: moderateVerticalScale(5.5),
    marginTop: moderateVerticalScale(5),
  },
  errors: {
    color: 'red',
    marginLeft: moderateVerticalScale(5.5),
    marginTop: moderateVerticalScale(5),
  },
});
export default styles;