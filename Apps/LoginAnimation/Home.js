import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import { FloatBtn } from '../../Components';


const Home = (props) => {
    const isFocused = useIsFocused()
    
    return (
        <View style={styles.container}>
            <Text style={{fontSize : 30}} onPress={() => props.navigation.navigate('Login')}>Home</Text>
            <FloatBtn isFocused={isFocused} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default Home
