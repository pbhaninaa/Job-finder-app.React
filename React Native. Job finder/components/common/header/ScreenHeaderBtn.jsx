import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity, Modal, Text, View } from "react-native";
import QRCode from 'react-native-qrcode-svg';
import styles from "./screenheader.style";
// import { SafeAreaView } from 'react-native-safe-area-context';

const ScreenHeaderBtn = ({ iconUrl, dimension }) => {
  const [profileLink, setProfileLink] = useState("https://www.linkedin.com/in/mr-p-bhani/");
  const [isModalVisible, setModalVisible] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const[showMenu, setMenu] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const setToFalse = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if(dimension === "100%")
    setShowProfile(true);
    if(dimension === "60%")
    setMenu(true);
  }, []);

  return (
    <>
      <TouchableOpacity style={styles.btnContainer} onPress={toggleModal}>
        <Image
          source={iconUrl}
          resizeMode='cover'
          style={styles.btnImg(dimension)}
        />
      </TouchableOpacity>

      {showProfile && (
        <Modal visible={isModalVisible} animationType="slide" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.headerText}>Scan this QR-Code</Text>
              <QRCode value={profileLink} size={200} />
              <TouchableOpacity onPress={setToFalse} style={styles.btnContainer}>
                <Text>Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
      {showMenu && (
        <Modal visible={isModalVisible} animationType="slide" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.headerText}>To be implemented</Text>
              
              <TouchableOpacity onPress={setToFalse} style={styles.btnContainer}>
                <Text>Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default ScreenHeaderBtn;
