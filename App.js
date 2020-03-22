import React from 'react'
import { View } from 'react-native'
import LoginApp from './Apps/LoginAnimation'
import { enableScreens } from 'react-native-screens';
import Slider from './Apps/Slider';

enableScreens();


const App = () => {
  return (
    <View style={{flex : 1}} >
      {/** <LoginApp /> */}
      <Slider />
    </View>
  )
}

export default App
