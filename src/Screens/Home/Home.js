//import liraries
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonComp from '../../Components/ButtonComp';
import { colors } from '../../constants/Color';
import dummayData from './dummayData';
import styles from './styles';
const Home = () => {

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.flexStyle}>
        <View style={styles.flexView}>
          <View>
            <Text style={styles.itemDateText}>{item?.date}</Text>
            <Text style={styles.nameText}>{item?.name}</Text>
            <View style={styles.location}>
              <Ionicons name='location-sharp' size={15} />
              <Text style={styles.addressText}>{item?.address}</Text>
            </View>
          </View>
          <Image source={require('../../assests/images/profile.jpg')} style={styles.imageStyle} />
        </View>
        <View style={styles.priceView}>
          <Text style={styles.priceText}>Price</Text>
          <Text style={styles.priceText}>{item?.price}</Text>
        </View>
        <View style={styles.btnView}>
          <View style={{ flex: 1, }}>
            <ButtonComp
              btnText={'REJECT'}
              btnStyle={styles.rejectBtn}
              btnTextStyle={{ color: colors.themColor }}
            />
          </View>
          <View style={styles.dummayView} />
          <View style={{ flex: 1, }}>
            <ButtonComp
              btnText={'ACCEPT'}
            />
          </View>

        </View>
      </View>

    )
  }
  const footerCompo = () => {
    return (
      <View style={{ height: 120 }} />
    )


  }
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: colors.white }}>
        <View style={styles.headerStyle}>
          <View />
          <Text style={styles.headerText}>Nanny Line</Text>
          <Ionicons name='notifications' size={20} />
        </View>
        <View style={{ marginTop: moderateVerticalScale(10), marginHorizontal: moderateScale(16), }}>
          <FlatList
            data={dummayData}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            ListFooterComponent={footerCompo}
            keyExtractor={(item, index) => item.key}
            ItemSeparatorComponent={() => <View style={{ marginBottom: moderateVerticalScale(16) }} />}
          />
        </View>

      </View>
    </View>
  );
};

export default Home;
