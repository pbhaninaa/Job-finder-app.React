import React, { useState } from 'react';
import { Image, TouchableOpacity, Modal, Text } from "react-native";
import { Linking } from 'react-native';

import QRCode from 'react-native-qrcode-svg';


import styles from "./screenheader.style";
import { SafeAreaView, View } from 'react-native-safe-area-context';

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress, navigation }) => {

  const [profileLink, setProfileLink] = useState("https://www.linkedin.com/in/mr-p-bhani/")
  const [isModalVisible, setModalVisible] = useState(false)
  // const profilePress = () => {
  //   // <Modal>
  //   //   <QRCode
  //   //     value={profileLink}
  //   //     size={200} // Adjust the size as needed
  //   //   />
  //   // </Modal>
  //   Linking.openURL(profileLink);
  // };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModalFalse = () => {
    setModalVisible(!isModalVisible);
  };
  return (<>
    <TouchableOpacity style={styles.btnContainer} onPress={toggleModal}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />

    </TouchableOpacity >
    <Modal style={styles.Container}
      visible={isModalVisible}
    >
      <TouchableOpacity onPress={toggleModalFalse} style={styles.btnContainer}>
        <Text style={styles.btnText}>Back </Text>
      </TouchableOpacity>
      <QRCode
        value={profileLink}
        size={200}
        style={{marginStart: 5, marginEnd:5}}

      />



    </Modal>
  </>);

};

export default ScreenHeaderBtn;
