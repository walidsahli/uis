import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export const CheckImage = ({ fontSize }) => {
    return (
        <Icon name='check' style={{...styles.Icon, fontSize }}/>
    )
}


const styles = StyleSheet.create({
    Icon:{
        color : 'white',
        opacity :0.5
    }
})