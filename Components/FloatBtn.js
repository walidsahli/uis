import React from 'react'
import { Animated, Dimensions, TouchableOpacity, Easing, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedIcon = Animated.createAnimatedComponent(Icon);



const { height, width } = Dimensions.get('screen')

export const FloatBtn = ({ isFocused }) => {
    const btnAnimation = new Animated.Value(0)

    React.useEffect(() => {
        if (isFocused) {
            Animated.timing(btnAnimation, {
                toValue: 1,
                duration: 200,
                easing: Easing.linear
            }).start()
        }
    }, [isFocused])
    return (
        <AnimatedTouchable style={{
            ...styles.floatBtn, width: btnAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [height + 200, 80]
            }), height: btnAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [height + 200, 80]
            }),
            right: btnAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [-(height - width + 200) / 2, 10]
            }),
            bottom: btnAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [-100, 10]
            })
        }}>
            <AnimatedIcon style={styles.textFloatBtn} name='plus' />
        </AnimatedTouchable>
    )
}

const styles = StyleSheet.create({
    floatBtn: {
        backgroundColor: '#fc6879',
        position: 'absolute',
        borderRadius: width,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: -100,
        right: -(height - width + 200) / 2
    },
    textFloatBtn: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})