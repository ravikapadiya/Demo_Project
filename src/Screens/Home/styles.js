import { StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { colors } from '../../constants/Color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    borderBottomWidth: 1,
    backgroundColor: colors.white,
    paddingVertical: moderateVerticalScale(15),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(16),
  },
  headerText: {
    textTransform: 'uppercase',
    fontSize: scale(18),
    color: colors.themColor
  },
  flexStyle: {
    backgroundColor: 'rgb(240, 240, 240)',
    padding: moderateScale(16),
    borderRadius: moderateScale(20),
    margin: 2,
  }, imageStyle: {
    width: moderateScale(64),
    height: moderateScale(64),
    borderRadius: moderateScale(32)
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: moderateVerticalScale(8),
  }, btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rejectBtn: {
    backgroundColor: colors.white,
    borderColor: colors.themColor,
    borderWidth: 1
  },
  dummayView: {
    marginHorizontal: moderateVerticalScale(8),
  },
  itemDateText: {
    fontSize: scale(12),
    color: colors.black
  },
  nameText: {
    fontSize: scale(14),
    color: colors.black,
    fontWeight: 'bold',
    marginTop: moderateVerticalScale(12)
  },
  addressText: {
    fontSize: scale(14),
    color: colors.black,
  }, location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontSize: scale(14),
    color: colors.black,
    fontWeight: 'bold'
  },

});
export default styles