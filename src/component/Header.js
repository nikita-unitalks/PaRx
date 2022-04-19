import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import constants from '../assets/constants';
import { Back } from '../images';


export default function Header({
  title,
  onPressButton,
  style,
  textSyle
}) {
  return (

    <View style={[styles.buttonHover, { flexDirection: 'row' }, style]}>
      <TouchableOpacity
        onPress={onPressButton}>
        <Image source={Back}></Image>
      </TouchableOpacity>
      <Text style={[styles.textStyle, textSyle]}>{title}</Text>
    </View>

  );
};



const styles = StyleSheet.create({
  buttonHover: {
    height: 50,
    width: Dimensions.get('window').width,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  textStyle: {
    color: '#5A8A4D',
    fontSize: 15,
    fontSize: 18,
    fontFamily: constants.APP_FONTS.C_BOLD,
    textAlign: 'center',
    alignSelf: 'center'
  },

  textAddressStyle: {
    color: 'white',
    fontSize: 14,
  },
  emptyDataSetStyle: {
    color: 'gray',
    fontSize: 13,

    position: 'absolute',
    alignSelf: 'center',
    elevation: 20,
    textAlign: 'center',
    marginHorizontal: 20,
    top: Dimensions.get('window').height / 2 - 40,
  },
});
