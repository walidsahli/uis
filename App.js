import React from 'react'
import { View } from 'react-native'
import LoginApp from './Apps/LoginAnimation'
import { enableScreens } from 'react-native-screens';

enableScreens();


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <LoginApp />
    </View>
  )
}

export default App
