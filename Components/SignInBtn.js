import React from 'react'
import { Keyboard ,StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator, Animated, Easing } from 'react-native'
const { width, height } = Dimensions.get('screen')
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);



export const SignInBtn = (props) => {
    const changedWidth = new Animated.Value(0)
    const biggerCircle = new Animated.Value(0)
    React.useEffect(() => {
        if(!props.isFocused){
            changedWidth.setValue(0)
            biggerCircle.setValue(0)
        }
    },[props.isFocused])

    const signIn = () => {
        Keyboard.dismiss()
        Animated.timing(changedWidth, {
            toValue: 1,
            duration: 300,
            easing: Easing.linear
        }).start()
        setTimeout(() => {
            Animated.timing(biggerCircle, {
                toValue: 2,
                duration: 200,
                easing: Easing.linear
            }).start(() => {
                setTimeout(() => props.navigation.navigate('Home'), 300)
            })
        }, 3000)
    }

    return (
        <AnimatedTouchable onPress={signIn}
            activeOpacity={1}
            style={{
                ...styles.container,
                width: Animated.add(changedWidth, biggerCircle).interpolate({
                    inputRange: [0, 1, 2],
                    outputRange: [width * 0.8, 60, width + 200]
                }),
                height: biggerCircle.interpolate({
                    inputRange: [0, 2],
                    outputRange: [60, height + 200]
                }),
                bottom: biggerCircle.interpolate({
                    inputRange: [0, 2],
                    outputRange: [-50, -height / 2]
                }),
                left: Animated.add(changedWidth, biggerCircle).interpolate({
                    inputRange: [0, 1, 2],
                    outputRange: [0, width / 2 - 60, -width / 2 + 60]
                })
            }} >
            <Animated.View
                style={{
                    ...styles.center,
                    opacity: Animated.add(changedWidth, biggerCircle).interpolate({
                        inputRange: [0, 1, 2],
                        outputRange: [0, 1, 0]
                    }),
                }} >
                <ActivityIndicator color='white'
                />
            </Animated.View>
            <Animated.Text style={{
                ...styles.text, ...styles.center,
                opacity: changedWidth.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0]
                })
            }}>Sign In</Animated.Text>
        </AnimatedTouchable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: width * 0.8,
        backgroundColor: '#fc6879',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: -50,
        right: 0,
        left: 0
    },
    text: {
        color: 'white'
    },
    center: {
        position: 'absolute'
    }
})

