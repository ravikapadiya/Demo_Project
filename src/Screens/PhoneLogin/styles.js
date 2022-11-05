import { StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { colors } from '../../constants/Color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  phoneContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(30),
  },
  phoneStyle: {
    color: colors.black,
    fontSize: scale(24),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: moderateVerticalScale(40)
  },
  descText: {
    fontSize: scale(14),
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
    marginTop: moderateVerticalScale(20)
  },
  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#000",
    color: colors.black,
    fontSize: scale(22),
  },
  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});

export default styles;