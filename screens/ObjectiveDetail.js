import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { AntDesign } from "@expo/vector-icons";
import DrawerButton from "../components/DrawerButton";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("screen");

const ObjectiveDetail = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const objectiv = navigation.getParam("objectiv");
  const lang = useSelector(state => state.language.language);
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
    objectiv.imageObiectiv.map(image => {
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
          <Text style={{ color: "white", fontSize: 20 }}>{objectiv.title}</Text>
        </View>
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.closeModalImage}>
            <AntDesign name="closecircleo" size={32} color="red" />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <DrawerButton navigation={navigation} backButton={true} />
      {images.length !== 0 ? (
        <View>
          <ScrollView>
            <View style={{ paddingBottom: 60 }}>
              <View>
                <TouchableOpacity onPress={toggleModal}>
                  <Image
                    style={{ width: width, height: height / 2 }}
                    source={{ uri: objectiv.imageObiectiv[0].imageUrl }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View style={{ margin: 5 }}>
                <Text>{description}</Text>
              </View>
            </View>
          </ScrollView>

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
        <Text>No image</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageModalHeader: {
    width,
    flexDirection: "row",
    marginTop: 10,
    paddingTop: 15,
    alignItems: "center"
  },
  titleModalImage: {
    flex: 1,
    marginHorizontal: 10,
    width: "100%"
  },
  closeModalImage: {
    backgroundColor: "black",
    marginHorizontal: 5
  }
});

export default ObjectiveDetail;
