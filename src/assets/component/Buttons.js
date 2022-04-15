import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import { Male } from '../images/male.png';
import Constants from '../SupportingClasses/Constants';


export const AppThemeButton = ({
  title,
  onPressButton,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonHover, { flexDirection: 'row' }, style]}
      onPress={onPressButton}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  buttonHover: {
    height: 50,
    width: Dimensions.get('window').width,
    borderRadius: 10,
    backgroundColor: 'rgba(25,140,251,1.0)',
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 5 },
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 15,
    fontFamily: Constants.APP_FONTS.SEMI_BOLD,
    fontSize: 18,
  },

  textAddressStyle: {
    color: 'white',
    fontSize: 14,
    fontFamily: Constants.APP_FONTS.ITALIC,
  },
  emptyDataSetStyle: {
    color: 'gray',
    fontSize: 13,
    fontFamily: Constants.APP_FONTS.MEDIUM,
    position: 'absolute',
    alignSelf: 'center',
    elevation: 20,
    textAlign: 'center',
    marginHorizontal: 20,
    top: Dimensions.get('window').height / 2 - 40,
  },
});
