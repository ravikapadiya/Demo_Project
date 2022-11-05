// import { useNavigation } from '@react-navigation/native';
// import React, { useEffect, useLayoutEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// const Product = () => {
//   const navigation = useNavigation()
//   const [data, setData] = useState([])
//   const [isloading, setIsloading] = useState(false)
//   const [pageCurrent, setPageCurrent] = useState(1)
//   const [filterdata, setFilterdata] = useState([])
//   const [search, setSearch] = useState('')
//   const Size = 10

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerLargeTitle: true,
//       headerTitle: 'Friend',
//       headerRight: () => (
//         <TouchableOpacity
//           style={styles.headerRight}
//         >
//           <Text style={styles.headerRightText}>+</Text>
//         </TouchableOpacity>
//       ),
//     })
//   }, [navigation]);


//   useEffect(() => {
//     console.log("pageCurrent", pageCurrent)
//     setIsloading(true)
//     getApiData()
//   }, [pageCurrent])

//   const getApiData = async () => {
//     const apiURL = `https://randomuser.me/api/?page=${pageCurrent}&results=10`
//     await fetch(apiURL)
//       .then((response) => response.json())
//       .then((res) => {
//         setData([...data, ...res.results])
//         setFilterdata([...filterdata, ...res.results])
//         setIsloading(false)
//       })
//   }

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.container}>
//         <Image style={styles.itemImageStyle} source={{ uri: item.picture.large }} />
//         <View style={styles.itemRow}>
//           <Text style={styles.itemText}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
//           <Text style={styles.itemTextemail}>{item.email}</Text>
//         </View>
//       </View>
//     )
//   }

//   const searchFilter = (text) => {
//     if (text) {
//       const newData = filterdata.filter(item => {
//         const ItemData = item.name.first ? item.name.first.toUpperCase() : ''.toUpperCase()
//         const textData = text.toUpperCase()
//         return ItemData.indexOf(textData) > -1
//       })
//       setData(newData)
//       setSearch(text)
//     } else {
//       setData(filterdata)
//       setSearch(text)
//     }
//   }

//   const renderFooter = () => {
//     return (
//       isloading ?
//         <View style={styles.loder}>
//           <ActivityIndicator size='large' color={'red'} />
//         </View> : null
//     )
//   }
//   const handleloadmore = () => {
//     console.log("dddd")
//     setPageCurrent(pageCurrent + 1)
//     setIsloading(true)
//   }


//   return (
//     <View style={{ flex: 1, }}>
//       <TextInput
//         style={styles.Textinput}
//         value={search}
//         placeholder='Search Here'
//         underlineColorAndroid='transparent'
//         onChangeText={(text) => searchFilter(text)}
//       />
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => item.email}
//         ListFooterComponent={renderFooter}
//         onEndReached={handleloadmore}
//         onEndReachedThreshold={0}
//       />
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     paddingVertical: 16,
//     paddingHorizontal: 16,
//     borderBottomWidth: 1,
//     borderColor: '#ddd'
//   },
//   itemImageStyle: {
//     width: 50,
//     height: 50,
//     marginRight: 16,
//     resizeMode: 'cover',
//     borderRadius: 50
//   },
//   itemRow: {
//     justifyContent: 'space-around',
//   },
//   itemText: {
//     fontSize: 16,
//   },
//   itemTextemail: {
//     color: "#777"
//   },
//   loder: {
//     marginTop: 10,
//     alignItems: 'center'
//   },
//   Textinput: {
//     height: 40,
//     borderWidth: 1,
//     paddingLeft: 10,
//     margin: 5,
//     borderColor: '#009',
//     marginHorizontal: 20,
//     marginBottom: 15,
//   },
//   headerRight: {
//     backgroundColor: 'purple',
//     width: 35,
//     height: 35,
//     borderRadius: 10,
//     justifyContent: 'center',
//     marginRight: 10,
//   },
//   headerRightText: {
//     fontSize: 20,
//     textAlign: 'center',
//     color: "#fff"
//   },
//   Textfriend: {
//     fontSize: 16,
//     color: 'black',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     fontWeight: 'bold'
//   }
// })
// export default Product
