import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from "react-redux";

import HeaderLogosBg from './HeaderComponents/HeaderLogosBg';
import HeaderLogosEn from './HeaderComponents/HeaderLogosEN';
import HeaderLogosRo from './HeaderComponents/HeaderLogosRo';

const Header = () => {
    const language = useSelector(state => state.language.language)

    switch (language) {
        case "ro":
            return <HeaderLogosRo />
        case "bg":
            return <HeaderLogosBg />
        case "en":
            return <HeaderLogosEn />
    
        default:
            return <Text>Somthing is wrong</Text>
    }
}

export default Header
