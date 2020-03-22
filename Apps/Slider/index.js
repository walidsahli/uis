import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
    set,
    sub,
    cond,
    event,
    and,
    lessThan,
    greaterThan,
    block,
    concat
} from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/FontAwesome5';
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const { width } = Dimensions.get('screen')

const sliderHight = 20


const Slider = () => {
    const translationX = new Animated.Value(0)
    const sliderHightAnimatedValue = new Animated.Value(sliderHight * 3)
    const rotateVal = new Animated.Value(0)
    const endSliding = new Animated.Value(width * 0.8 + sliderHight)
    const startSliding = new Animated.Value(sliderHight * 2)

    const onGestureEvent = event([
        {
            nativeEvent: {
                absoluteX: x =>
                    cond(
                        and(lessThan(x, endSliding), greaterThan(x, startSliding)
                        ),
                        block([set(translationX, sub(x, sliderHightAnimatedValue)), set(rotateVal, x)])
                    )
            }
        }
    ], { useNativeDriver: true });

    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                <PanGestureHandler
                    onGestureEvent={onGestureEvent}
                >
                    <AnimatedIcon
                        name='spider'
                        style={{
                            ...styles.square,
                            left: translationX,
                            transform: [{
                                rotate: concat(rotateVal.interpolate({
                                    inputRange: [startSliding, endSliding],
                                    outputRange: [0, 720]
                                }), 'deg')
                            }]
                        }} />
                </PanGestureHandler>
                <Animated.View
                    style={{
                        ...styles.progress,
                        width: concat(translationX.interpolate({
                            inputRange: [-sliderHight * 2.5 , width * 0.8 - sliderHight],
                            outputRange: [0, 100]
                        }), '%')
                    }} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bar: {
        width: '80%',
        borderColor: 'grey',
        height: sliderHight / 2,
        borderRadius: sliderHight,
        borderWidth: 0.5
    },
    square: {
        height: sliderHight * 3,
        width: sliderHight * 3,
        position: 'absolute',
        borderRadius: 5,
        top: - (sliderHight * 1.5),
        fontSize: sliderHight * 3 - 5
    },
    progress: {
        height: '100%',
        backgroundColor: 'black',
        borderRadius : 5
    }
})

export default Slider
