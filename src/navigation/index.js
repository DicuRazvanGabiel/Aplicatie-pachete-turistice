import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from "../screens/Login";
import Register from "../screens/Register";

const logInNavigator = createStackNavigator({
    LoginScreen,
    Register
}, {
    initialRouteName: 'LoginScreen',
    headerMode: 'none'
});

const AppContainer  = createAppContainer(logInNavigator);

export default AppContainer;