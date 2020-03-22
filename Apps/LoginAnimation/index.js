import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';

const Stack = createStackNavigator();

const config = {
    headerMode : 'none',
    initialRouteName : 'Login',
    animationEnabled : false
}
const commonOptions = {
    animationEnabled : false
}

const LoginApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator {...config}>
                <Stack.Screen name="Home" component={Home} options={{...commonOptions}} />
                <Stack.Screen name="Login" component={Login} options={{...commonOptions}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default LoginApp