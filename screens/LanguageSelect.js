import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Container } from "native-base"
import { useDispatch } from "react-redux";
import { changeLanguage } from "../store/actions/language";

const LeanguageSelectScreen = props => {

    const dispatch = useDispatch();

    const languageSelectHandler = (language) => {
        dispatch(changeLanguage(language))
    }
    
    return(
        <Container>
            <View style={styles.containerLang}>
                    <View>
                        <TouchableOpacity onPress={() => languageSelectHandler("ro")}>
                            <Image
                                style={styles.image}
                                source={require('../assets/images/languages/ro.jpg')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => languageSelectHandler("en")}>
                            <Image
                                style={styles.image}
                                source={require('../assets/images/languages/eng.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => languageSelectHandler("bg")}>
                            <Image
                                style={styles.image}
                                source={require('../assets/images/languages/bg.jpg')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
        </Container>
    ); 
};

const styles = StyleSheet.create({
    container:{
        flex: 1
    },  
    containerLang: {
        flex: 1,
        margin: 20,
        alignItems: "center",
        justifyContent: "space-around"
    },
    image: {
        width: 200,
        height: 100,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
})

export default LeanguageSelectScreen;
