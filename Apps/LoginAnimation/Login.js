import React from 'react'
import { StyleSheet, ImageBackground, Dimensions, KeyboardAvoidingView, View, Text } from 'react-native'
import { LoginFormInput, CheckImage, SignInBtn } from '../../Components'
import { useIsFocused } from '@react-navigation/native';

const { height, width } = Dimensions.get('screen')

const Login = (props) => {
    const isFocused = useIsFocused();
    const passwordRef = React.useRef()

    const goPasswordInput = () => {
        passwordRef.current.focus()
    }

    return (
        <ImageBackground source={require('../../assets/sea.jpg')}
            blurRadius={0.3}
            resizeMode='cover'
            style={styles.container}>
            <View
                style={styles.loginForm}
                behavior='height'>
                <LoginFormInput
                    placeholder='Email'
                    icon='user'
                    type='email-address'
                    secureTextEntry={false}
                    onSubmitEditing={goPasswordInput}
                />
                <LoginFormInput
                    placeholder='Password'
                    icon='lock'
                    type='default'
                    secureTextEntry={true}
                    reference={passwordRef} />
                <SignInBtn
                    isFocused={isFocused}
                    navigation={props.navigation} />
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginForm: {
        width: '80%',
        height: height * 0.4,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: height * 0.1,
        paddingTop: height * 0.1,
        marginTop: -height * 0.2
    }
})

export default Login
