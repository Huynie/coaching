import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Modal,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import b01 from '../images/b01.jpg'
import b02 from '../images/b02.jpg'
import b03 from '../images/b03.jpg'
import b04 from '../images/b04.jpg'
import b05 from '../images/b05.jpg'
import b06 from '../images/b06.jpg'
import b07 from '../images/b07.jpg'
import b08 from '../images/b08.jpg'
import b09 from '../images/b09.jpg'


const Profile = ({navigation}) => {

  const images = [b01, b02, b03, b04, b05, b06, b07, b08, b09];

  const [lightboxToggle, setLightboxToggle] = useState({modal: false, img: b01 });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Profile */}
        <View>
          <View style={centered}>
            <Image
              style={styles.image}
              source={{uri: 'https://randomuser.me/api/portraits/men/30.jpg'}}
              fadeDuration={1000}
            />
            <Text style={styles.name}>Gabe Lincoln</Text>
          </View>
          <View style={[styles.statsContainer, centered]}>
            <View style={styles.statSection}>
              <Text style={styles.stats}>Basketball</Text>
            </View>
            <View style={[styles.statSection, styles.statsDivider]}>
              <Text style={styles.stats}>10+ yrs</Text>
            </View>
            <View style={styles.statSection}>
              <Text style={styles.stats}>NY</Text>
            </View>
          </View>
        </View>
        {/* GALLERY */}
        <View style={styles.galleryContainer}>
          {images.map((image, idx) => {
            return(
              <TouchableOpacity
              onPress={() => setLightboxToggle({modal: true, img: image})}
              >
                <Image
                source={image}
                style={styles.galleryImage}
                resizeMode= 'cover'
                key={idx}
              />
              </TouchableOpacity>
            )
          })}
        </View>
        {/* BUTTON */}
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="schedule a session"
            onPress={() => {navigation.navigate('Calendar')}}
          />
        </View>
      </ScrollView>
      <Modal
          animationType="fade"
          visible={lightboxToggle.modal}
          transparent={true}
        >
          <View style={[centered, styles.lightbox]}>
            <Text
              style={styles.lightboxText}
              onPress={() => setLightboxToggle({modal: false})}
              >close
            </Text>
            <Image
              style={styles.lightboxImage}
              source={lightboxToggle.img}
              resizeMode={'cover'}
            />
          </View>
        </Modal>
    </SafeAreaView>
  );
}

const centered = {
  alignItems: 'center',
  justifyContent: 'center'
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    image: {
      height: 150,
      width: 150,
      borderRadius: 100,
      paddingVertical: 15,
      marginTop: 25
    },
    name: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      paddingVertical: 15
    },
    statsContainer:{
      flexDirection: 'row',
      padding: 15,
    },
    statSection:{
      paddingHorizontal: 30,
      paddingVertical: 10,
      flex: 1,
      flexGrow: 1
    },
    stats: {
      fontSize: 14,
      fontWeight: '100',
      textAlign: 'center',
    },
    statsDivider:{
      borderColor: 'lightgray',
      borderLeftWidth: 1,
      borderRightWidth: 1,
    },
    galleryContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1
    },
    galleryImage: {
      width: (Dimensions.get('window').width/3),
      height: (Dimensions.get('window').width/3),
      flexShrink: 1
    },
    buttonContainer:{
      flex: 1,
      justifyContent: 'flex-end',
    },
    button: {
      borderRadius: 20,
      padding: 20
    },
    lightbox:{
      backgroundColor: 'rgba(0,0,0,0.8)',
      flex:1,
      padding: 20,
    },
    lightboxText:{
      color: 'white',
      padding: 10,
      fontSize: 20
    },
    lightboxImage:{
      width: (Dimensions.get('window').width/1.2),
      height: (Dimensions.get('window').width/1.2),
    }
  });
  
export default Profile;
