import React, { useState } from "react";
import {
    View,
    Text,
    Modal,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    AsyncStorage,
} from "react-native";
import { Button } from "native-base";
import ImageViewer from "react-native-image-zoom-viewer";
import { AntDesign } from "@expo/vector-icons";
import DrawerButton from "../components/DrawerButton";
import { useSelector } from "react-redux";
import * as Calendar from "expo-calendar";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Translate from "../constants/Translate";

const { width, height } = Dimensions.get("screen");

const ObjectiveDetail = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const objectiv = navigation.getParam("objectiv");
    const [isModalNotificareVisible, setIsModalNotificareVisible] = useState(
        false
    );
    const lang = useSelector((state) => state.language.language);
    const images = [];
    description = null;

    switch (lang) {
        case "ro":
            description = objectiv.descriereRo;
            break;

        case "bg":
            description = objectiv.descriereBg;
            break;

        case "en":
            description = objectiv.descriereEn;
            break;
    }

    if (objectiv.imageObiectiv) {
        objectiv.imageObiectiv.map((image) => {
            images.push({ url: image.imageUrl });
        });
    }

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const renderImageModalHeader = () => {
        return (
            <View style={styles.imageModalHeader}>
                <View style={styles.titleModalImage}>
                    <Text style={{ color: "white", fontSize: 20 }}>
                        {objectiv.title}
                    </Text>
                </View>
                <TouchableOpacity onPress={toggleModal}>
                    <View style={styles.closeModalImage}>
                        <AntDesign name="closecircleo" size={32} color="red" />
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    async function getDefaultCalendarSource() {
        const calendars = await Calendar.getCalendarsAsync();
        const defaultCalendars = calendars.filter(
            (each) => each.source.name === "Default"
        );
        return defaultCalendars[0].source;
    }

    async function createCalendar() {
        const defaultCalendarSource =
            Platform.OS === "ios"
                ? await getDefaultCalendarSource()
                : { isLocalAccount: true, name: "Expo Calendar" };
        const newCalendarID = await Calendar.createCalendarAsync({
            title: "Natbiot Calendar",
            color: "blue",
            entityType: Calendar.EntityTypes.EVENT,
            sourceId: defaultCalendarSource.id,
            source: defaultCalendarSource,
            name: "internalCalendarName",
            ownerAccount: "personal",
            accessLevel: Calendar.CalendarAccessLevel.OWNER,
        });
        AsyncStorage.setItem("calendarID", newCalendarID);
        return newCalendarID;
    }

    const programeazaTraseu = async (date) => {
        let calendarID = await AsyncStorage.getItem("calendarID");
        if (!calendarID) {
            calendarID = await createCalendar();
        }
        setIsDatePickerVisible(false);
        Calendar.createEventAsync(calendarID, {
            title: `Traseu programat ${objectiv.title}`,
            startDate: date,
            endDate: date,
            alarms: [{ relativeOffset: -60 }],
            timeZone: "GMT+2",
        });
    };

    const notificareOraInchidere = async (timeToNotify) => {
        let calendarID = await AsyncStorage.getItem("calendarID");
        if (!calendarID) {
            calendarID = await createCalendar();
        }
        let oraInchidere = moment(objectiv.inchidereMaV, "HH:mm");

        Calendar.createEventAsync(calendarID, {
            title: `Ora de inchidere a ${objectiv.title}`,
            startDate: new Date(oraInchidere),
            endDate: new Date(oraInchidere),
            alarms: [{ relativeOffset: timeToNotify }],
            timeZone: "GMT+2",
        });

        setIsModalNotificareVisible(false);
    };

    const modalNotificareTime = () => {
        setIsModalNotificareVisible(true);

        // notificareOraInchidere();
    };

    return (
        <View style={styles.container}>
            <DrawerButton navigation={navigation} backButton={true} />
            <ScrollView>
                {images.length !== 0 ? (
                    <View>
                        <View style={{ paddingBottom: 0 }}>
                            <View>
                                <TouchableOpacity onPress={toggleModal}>
                                    <Image
                                        style={{
                                            width: width,
                                            height: height / 2,
                                        }}
                                        source={{
                                            uri:
                                                objectiv.imageObiectiv[0]
                                                    .imageUrl,
                                        }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Modal visible={isModalVisible} transparent={true}>
                            <ImageViewer
                                imageUrls={images}
                                enableImageZoom={true}
                                onSwipeDown={toggleModal}
                                enableSwipeDown={true}
                                enablePreload={true}
                                renderHeader={renderImageModalHeader}
                            />
                        </Modal>
                    </View>
                ) : (
                    <Text> </Text>
                )}

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        marginBottom: 15,
                    }}
                >
                    {objectiv.nonStop ? (
                        <Text>{Translate.programnonstop[lang]}</Text>
                    ) : (
                        <Button
                            rounded
                            style={{ paddingHorizontal: 10 }}
                            onPress={modalNotificareTime}
                        >
                            <Text>Notificare ora inchidere</Text>
                        </Button>
                    )}

                    <Modal visible={isModalNotificareVisible}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: "green",
                                marginTop: 25,
                                justifyContent: "center",
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    margin: 5,
                                }}
                            >
                                <Text style={{ fontSize: 13 }}>
                                    Selecteaza cu cat timp inainte vei primi
                                    notificarea
                                </Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIsModalNotificareVisible(false);
                                    }}
                                >
                                    <AntDesign name="closecircle" size={25} />
                                </TouchableOpacity>
                            </View>
                            <ScrollView>
                                <TouchableOpacity
                                    onPress={() => notificareOraInchidere(-5)}
                                >
                                    <Text
                                        style={{
                                            textAlign: "center",
                                            textDecorationLine: "underline",
                                            fontSize: 15,
                                            marginVertical: 15,
                                        }}
                                    >
                                        Cu 5 minute inainte
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => notificareOraInchidere(-30)}
                                >
                                    <Text
                                        style={{
                                            textAlign: "center",
                                            textDecorationLine: "underline",
                                            fontSize: 15,
                                            marginVertical: 15,
                                        }}
                                    >
                                        Cu 30 minute inainte
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => notificareOraInchidere(-60)}
                                >
                                    <Text
                                        style={{
                                            textAlign: "center",
                                            textDecorationLine: "underline",
                                            fontSize: 15,
                                            marginVertical: 15,
                                        }}
                                    >
                                        Cu o ora inainte
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => notificareOraInchidere(-420)}
                                >
                                    <Text
                                        style={{
                                            textAlign: "center",
                                            textDecorationLine: "underline",
                                            fontSize: 15,
                                            marginVertical: 15,
                                        }}
                                    >
                                        Cu 7 ore inainte
                                    </Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </Modal>

                    <Button
                        success
                        rounded
                        style={{ paddingHorizontal: 10 }}
                        onPress={() => setIsDatePickerVisible(true)}
                    >
                        <Text>{Translate.programeazaTraseu[lang]}</Text>
                    </Button>
                </View>

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="datetime"
                    onConfirm={programeazaTraseu}
                    onCancel={() => setIsDatePickerVisible(false)}
                />

                <View style={{ margin: 5 }}>
                    <Text>{description}</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageModalHeader: {
        width,
        flexDirection: "row",
        marginTop: 10,
        paddingTop: 15,
        alignItems: "center",
    },
    titleModalImage: {
        flex: 1,
        marginHorizontal: 10,
        width: "100%",
    },
    closeModalImage: {
        backgroundColor: "black",
        marginHorizontal: 5,
    },
});

export default ObjectiveDetail;
