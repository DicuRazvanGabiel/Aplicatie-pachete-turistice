import React, { useState, useEffect } from "react";
import {
    TextInput,
    View,
    AsyncStorage,
    Alert,
    ActivityIndicator,
} from "react-native";
import {
    Container,
    Content,
    Button,
    ListItem,
    Text,
    Icon,
    Left,
    Body,
    Right,
    Form,
    Switch,
    Item,
    Input,
} from "native-base";
import { useDispatch } from "react-redux";
import * as Auth from "../store/actions/auth";
import DrawerButton from "../components/DrawerButton";
import store from "../store";
import { useSelector } from "react-redux";
import Translate from "../constants/Translate";

const Settings = ({ navigation }) => {
    const [
        enableDistaneNotifications,
        setEnableDistaneNotifications,
    ] = useState(true);
    const [metersToNotificate, setMetersToNotificate] = useState(10000);
    const [settingsChanged, setSettingsChanged] = useState(false);
    const [settingsObj, setSettingsObj] = useState(null);
    const [changePasswordField, setChangePasswordField] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [password, setPassword] = useState();
    const [rePassword, setRePassword] = useState();

    const lang = useSelector((state) => state.language.language);

    const getSettings = async () => {
        const setObj = await AsyncStorage.getItem("settingsObj");
        if (setObj) {
            setSettingsObj(JSON.parse(setObj));
            if (
                setSettingsObj.dNotificatifications &&
                settingsObj.metersToNotificate
            ) {
                setEnableDistaneNotifications(settingsObj.dNotificatifications);
                metersToNotificate(settingsObj.metersToNotificate);
            }
        } else {
            setSettingsObj({
                dNotificatifications: true,
                metersToNotificate: 100,
            });
            setEnableDistaneNotifications(true);
            setMetersToNotificate(100);
        }
    };

    useEffect(() => {
        if (!settingsObj) {
            getSettings();
        }
    }, []);

    const dispatch = useDispatch();

    const chageMeters = (text) => {
        const meters = text.replace(/[^0-9]/g, "");
        setMetersToNotificate(meters);
        setSettingsChanged(true);
    };

    const changePasswordHandler = () => {
        setChangePasswordField(true);
    };

    const handleLogout = () => {
        dispatch(Auth.logout());
        navigation.navigate("AuthScreen");
    };

    const handleSave = async () => {
        AsyncStorage.setItem(
            "settingsObj",
            JSON.stringify({
                dNotificatifications: enableDistaneNotifications,
                metersToNotificate: metersToNotificate,
            })
        );
        setSettingsChanged(false);
    };

    const hendleChangePassword = async () => {
        if (password !== rePassword) {
            Alert.alert("Error", "Campurile pentru parola nu corespund");
            return;
        }

        setIsLoading(true);

        let userData = await AsyncStorage.getItem("userData");
        userData = JSON.parse(userData);

        const response = await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAT9f4YN5uSmzKLcBW-5JQrR5YqptRSHRw",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    idToken: userData.token,
                    password,
                    returnSecureToken: true,
                }),
            }
        );
        let responseObj = await response.json();
        console.log(responseObj);

        setChangePasswordField(false);
        setIsLoading(false);

        if (responseObj.error) {
            Alert.alert("Error", responseObj.error.message);
        }
    };

    if (isLoading) {
        return (
            <Container>
                <Content>
                    <ActivityIndicator size="large" />
                </Content>
            </Container>
        );
    }

    return (
        <Container>
            <DrawerButton navigation={navigation} />
            <Content>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "green" }}>
                            <Icon active name="md-notifications" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>{Translate.notificariDis[lang]}</Text>
                    </Body>
                    <Right>
                        <Switch
                            value={enableDistaneNotifications}
                            onValueChange={(val) => {
                                setEnableDistaneNotifications(val);
                                setSettingsChanged(true);
                            }}
                        />
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "red" }}>
                            <Icon active name="map" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>{Translate.metriiNot[lang]}</Text>
                    </Body>
                    <Right>
                        <View style={{ width: 100 }}>
                            <Input
                                keyboardType="numeric"
                                placeholder={metersToNotificate + ""}
                                onChangeText={chageMeters}
                                value={metersToNotificate + ""}
                                style={{ width: 100 }}
                            />
                        </View>
                        <Text>{Translate.metri[lang]}</Text>
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "blue" }}>
                            <Icon active name="lock" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>{Translate.schimbparrola[lang]}</Text>
                    </Body>
                    <Button bordered onPress={changePasswordHandler}>
                        <Text>{Translate.schimba[lang]}</Text>
                    </Button>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "#34ebe5" }}>
                            <Icon active name="globe" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>{Translate.schimbaLimba[lang]}</Text>
                    </Body>
                    <Button
                        bordered
                        onPress={() => {
                            navigation.navigate("LanguageSelectScreen");
                        }}
                    >
                        <Text>{Translate.schimba[lang]}</Text>
                    </Button>
                </ListItem>

                {changePasswordField ? (
                    <View>
                        <Form>
                            <Item>
                                <Input
                                    autoCapitalize="none"
                                    placeholder="Password"
                                    secureTextEntry
                                    onChangeText={(pass) => {
                                        setPassword(pass);
                                    }}
                                />
                            </Item>
                            <Item last>
                                <Input
                                    autoCapitalize="none"
                                    placeholder="Re Password"
                                    secureTextEntry
                                    onChangeText={(password) => {
                                        setRePassword(password);
                                    }}
                                />
                            </Item>
                        </Form>
                        <Button onPress={hendleChangePassword}>
                            <Text>Change Password</Text>
                        </Button>
                    </View>
                ) : (
                    <View></View>
                )}

                {settingsChanged ? (
                    <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
                        <Button rounded block success onPress={handleSave}>
                            <Text>SAVE</Text>
                        </Button>
                    </View>
                ) : (
                    <View></View>
                )}
                {/* <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
          <Button rounded block success onPress={handleSave}>
            <Text>SAVE</Text>
          </Button>
        </View> */}

                <View style={{ padding: 10 }}>
                    <Button rounded block danger onPress={handleLogout}>
                        <Text>LOGOUT</Text>
                    </Button>
                </View>
            </Content>
        </Container>
    );
};

Settings.navigationOptions = ({ navigation }) => {
    let lang = store.getState().language.language;
    let translate = Translate.setari[lang];
    return {
        title: translate,
    };
};

export default Settings;
