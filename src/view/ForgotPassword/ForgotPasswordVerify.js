
import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Dimensions, ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import { PagerBg } from '@images';

import Constants from '../../assets/constants';
import { TextInput } from 'react-native-gesture-handler';
import Header from '../../component/Header';
import { AppThemeButton } from '../../component/Buttons';


export default function ForgotPasswordVerify({ navigation }) {

  return (

    <ImageBackground style={styles.container}
      resizeMode="stretch"
      source={PagerBg}>
      <View style={{ flex: 1, }}>
        <Header />
        <Text style={styles.title}>{Constants.APP_STRINGS.CHECK_YOUR_EMAIL}</Text>
        <Text style={styles.text}>{Constants.APP_STRINGS.FORGOT_OTP_MSG}</Text>
        <View
          style={{ flex: 1, padding: 10 }}>
          <View
            style={styles.textVIew}>
            <Text style={styles.textEmail}>{Constants.APP_STRINGS.OTP}</Text>
            <TextInput style={styles.buttonStyle}
              placeholder="Otp"></TextInput>

            <Text style={styles.text}>{Constants.APP_STRINGS.FORGOT_BOTTOM_MSG}</Text>
          </View>
          <AppThemeButton title={Constants.APP_STRINGS.VERIFY}
            onPressButton={() => {
              navigation.navigate("ForgotPasswordSet")
            }}
            style={styles.buttonCStyle}
            textSyle={{ color: 'white' }} />

        </View>
      </View>
    </ImageBackground >

  );
}

const styles = StyleSheet.create({
  textVIew: {
    marginLeft: 10,
    marginRight: 10,
  },
  textBottom: {
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
    fontFamily: Constants.APP_FONTS.O_BOLD,
    fontSize: 16
  },
  buttonCStyle: {
    color: 'white',
    backgroundColor: Constants.APP_COLOR.TEXT_GREEN,
    alignSelf: 'center',
    marginLeft: 20,
    position: 'absolute',
    bottom: 100,
    width: Dimensions.get('window').width - 50,
  },
  buttonStyle: {
    color: 'black',
    borderColor: Constants.APP_COLOR.GREEN_COLOR,
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 10,
    marginBottom:10,
    width: Dimensions.get('window').width - 50,
  },
  flex: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
    backgroundColor: 'trasnparent'
  },
  container: {
    alignContent: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0
  },
  progressContainer: { flex: 0.1, backgroundColor: '#63a4ff' },

  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    marginTop: 10,
    paddingLeft: 30,
    textAlign: 'center',
    paddingRight: 30
  },
  textEmail: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    marginTop: 60,
    paddingLeft: 10
  },
  textPassword: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    marginTop: 20,
    paddingLeft: 10
  },
  textRight: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    alignSelf: 'flex-end',
    paddingRight: 10,
    fontFamily: 'OpenSans-Bold',
    color: Constants.APP_COLOR.TEXT_GREEN
  },
  textLeft: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    alignSelf: 'flex-start',
    paddingLeft: 10,
    fontFamily: 'OpenSans-Bold',
    color: Constants.APP_COLOR.TEXT_GREEN
  },
  imageView: {
    height: 180,
    width: 350
  },
  title: {
    fontFamily: "Comfortaa-Bold",
    color: Constants.APP_COLOR.TEXT_GREEN,
    fontSize: 24,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center'
  },
  paginationContainer: {
    bottom: 30,
    flex: 1,
    alignItems: 'center', justifyContent: 'center'
  },
  paginationDots: {
    height: 16,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#E4E4E4',
    marginLeft: 5, marginRight: 5
  },
});