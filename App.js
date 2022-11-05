/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import MainRoutes from './src/Navigation/MainRoutes';
const App = () => {
  return (
    <View style={{ flex: 1, }}>
      {/* <StatusBar
        // translucent
        barStyle="dark-content"
        backgroundColor='ttransparent'
      /> */}
      <MainRoutes />
    </View>

  )
}

export default App;
