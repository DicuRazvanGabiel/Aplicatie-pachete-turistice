import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from "react-redux";

import DisclaimerRo from './DisclaimerComponents/DisclamerRo';
import DisclaimerBg from './DisclaimerComponents/DisclamerBg';
import DisclaimerEn from './DisclaimerComponents/DisclamerEn';

const Header = () => {
    const language = useSelector(state => state.language.language)

    switch (language) {
        case "ro":
            return <DisclaimerRo />
        case "bg":
            return <DisclaimerBg />
        case "en":
            return <DisclaimerEn />
    
        default:
            return <Text>Somthing is wrong</Text>
    }
}

export default Header
