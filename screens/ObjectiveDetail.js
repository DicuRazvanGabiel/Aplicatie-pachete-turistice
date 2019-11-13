import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { AntDesign } from "@expo/vector-icons";
import DrawerButton from "../components/DrawerButton"

const { width, height } = Dimensions.get("screen");

const ObjectiveDetail = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const objectiv = navigation.getParam("objectiv");

  const images = [];
  objectiv.imageObiectiv.map(image => {
    images.push({ url: image.imageUrl });
  });

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
      <View>
        <TouchableOpacity onPress={toggleModal}>
          <Image
            style={{ width: width, height: height / 2 }}
            source={{ uri: objectiv.imageObiectiv[0].imageUrl }}
            resizeMode="contain"
          />
        </TouchableOpacity>
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
    alignItems: "center"
  },
  titleModalImage: {
    flex: 1,
    marginHorizontal: 10,
    width: "100%"
  },
  closeModalImage: {
      marginHorizontal: 5
  }
});

export default ObjectiveDetail;
