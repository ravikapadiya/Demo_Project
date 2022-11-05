// import React, { useRef, useState } from 'react';
// import { Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { colors } from '../helper/Color';
// const { height, width } = Dimensions.get('screen')
// const Slider = [
//   {
//     id: '1',
//     image: require('../image/dv2.jpg'),
//     title: 'Best Digital Solution',
//     subtitle: ' Lorem ipsum may be used as a placeholder before final copy is available...'
//   },
//   {
//     id: '2',
//     image: require('../image/dv3.jpg'),
//     title: 'Best Digital Solution',
//     subtitle: ' Lorem ipsum may be used as a placeholder before final copy is available...'
//   },
//   {
//     id: '3',
//     image: require('../image/dp5.png'),
//     title: 'Increase your Value',
//     subtitle: ' Lorem ipsum may be used as a placeholder before final copy is available...'
//   }
// ]

// const Slide = ({ item }) => {
//   return (
//     <View style={{ width: width, paddingHorizontal: 20, marginTop: 40 }}>
//       <Image source={item.image} style={[styles.Imagecontiner]} />
//       <View style={{ alignItems: 'center' }}>
//         <Text style={styles.itemtitle}>{item.title}</Text>
//         <Text numberOfLines={2} style={styles.itemsubtitle}>{item.subtitle}</Text>
//       </View>
//     </View>
//   )
// }
// function Onboarding({ navigation }) {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const ref = useRef(null)

//   const goNextSlide = () => {
//     const nextSlideIndex = currentIndex + 1
//     if (nextSlideIndex != Slider.length) {
//       const offset = nextSlideIndex * width
//       ref?.current.scrollToOffset({ offset })
//       setCurrentIndex(nextSlideIndex)
//     }

//   }
//   const skipSlide = () => {
//     const lastSlideindex = Slider.length - 1
//     const offset = lastSlideindex * width
//     ref?.current.scrollToOffset({ offset })
//     setCurrentIndex(lastSlideindex)
//   }
//   const Footer = () => {
//     return (
//       <View style={styles.FooterMain}>
//         <View style={{ flexDirection: "row", justifyContent: 'center' }}>
//           {Slider.map((item, index) => (
//             <View key={index} style={[styles.indicator, currentIndex == index && { backgroundColor: colors.white, width: 25 }]} />
//           ))}
//         </View>
//         <View style={{ marginBottom: 20, }}>
//           {currentIndex == Slider.length - 1 ? <View style={{ height: 50 }}>
//             <TouchableOpacity style={styles.btnNext} onPress={() => navigation.navigate("Product")}>
//               <Text style={[styles.btnTitle]} >GET STARTED</Text>
//             </TouchableOpacity>
//           </View> :
//             <View style={{ flexDirection: 'row', }}>
//               <TouchableOpacity style={[styles.btnNext, styles.Skipbtn]} onPress={skipSlide}>
//                 <Text style={[styles.btnTitle, { color: colors.white }]} >SKIP</Text>
//               </TouchableOpacity>
//               <View style={{ width: 15 }} />
//               <TouchableOpacity style={styles.btnNext} onPress={goNextSlide}>
//                 <Text style={styles.btnTitle}>NEXT</Text>
//               </TouchableOpacity>
//             </View>
//           }
//         </View>
//       </View>
//     )
//   }
//   const updateCurrentSlideIndex = (e) => {
//     const contentOffsetX = e.nativeEvent.contentOffset.x
//     const currentIndexNo = Math.round(contentOffsetX / width)
//     setCurrentIndex(currentIndexNo)
//   }
//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor={colors.primary} />
//       <FlatList
//         ref={ref}
//         onMomentumScrollEnd={updateCurrentSlideIndex}
//         pagingEnabled
//         data={Slider}
//         showsHorizontalScrollIndicator={false}
//         horizontal
//         renderItem={({ item }) => <Slide item={item} />}
//       />
//       <Footer />
//     </View>
//   )
// }

// export default Onboarding
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.primary,
//   },
//   Imagecontiner: {
//     height: '65%',
//     resizeMode: 'contain',
//     width: '100%',
//     marginBottom: -10,
//   },
//   itemtitle: {
//     color: colors.white,
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   itemsubtitle: {
//     maxWidth: '75%',
//     color: colors.white,
//     fontSize: 13,
//     marginTop: 10,
//     textAlign: 'center',
//     lineHeight: 20,
//   },
//   indicator: {
//     height: 2.5,
//     width: 10,
//     backgroundColor: 'grey',
//     marginHorizontal: 3,
//     borderRadius: 2
//   },
//   btnNext: {
//     flex: 1,
//     height: 50,
//     borderRadius: 5,
//     backgroundColor: colors.white,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btnTitle: {
//     fontWeight: 'bold',
//     fontSize: 16
//   },
//   Skipbtn: {
//     backgroundColor: 'transparent',
//     borderWidth: 1,
//     borderColor: colors.white
//   },
//   FooterMain: {
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     flex: 2,
//   }
// })