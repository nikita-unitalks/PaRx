
import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
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
import Slider from '@react-native-community/slider';


export default function UserPre({ navigation }) {

  const [isDaily, setIsDaily] = useState(true);
  const WeeKView = ({ title }) => {
    return (
      <View style={styles.daysView} >
        <Text style={styles.weekText}>{title}</Text>
      </View>
    )
  }

  const DailyView = () => {
    return (
      <>
        <View style={styles.headingView}>
          <View style={styles.lineView} />
          <Text style={styles.options}>{Constants.APP_STRINGS.ON_THESE_DAYS}</Text>
          <View style={styles.lineView} />
        </View>

        <View style={styles.headingView}>
          <WeeKView title={'S'} />

          <WeeKView title={'M'} />

          <WeeKView title={'T'} />
          <WeeKView title={'W'} />

          <WeeKView title={'T'} />

          <WeeKView title={'F'} />

          <WeeKView title={'S'} />

        </View>
        <View style={styles.headingView}>
          <View style={styles.lineView} />
          <Text style={styles.options}>{Constants.APP_STRINGS.AMOUNT_TIME}</Text>
          <View style={styles.lineView} />
        </View>

        <View style={styles.headingView}>

          <TextInput style={{ width: 80, borderRadius: 10, backgroundColor: 'white', textAlign: 'center' }}></TextInput>
          <Text style={styles.options}>{Constants.APP_STRINGS.HOURS_PER_DAY}</Text>
        </View>
      </>
    );
  }

  const WeeklyView = () => {
    return (
      <>
        <View style={styles.headingView}>
          <View style={styles.lineView} />
          <Text style={styles.options}>{Constants.APP_STRINGS.AMOUNT_TIME}</Text>
          <View style={styles.lineView} />
        </View>
        <Slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor={Constants.APP_COLOR.GREEN_COLOR}
          maximumTrackTintColor="#000000"
          step={1}
          value={1}
          onValueChange={() => { }}
          style={{ width: 300, height: 100, alignSelf: 'center' }}
        />
      </>
    )
  }

  return (

    <ImageBackground style={styles.container}
      resizeMode="stretch"
      source={PagerBg}>
      <View style={{ flex: 1, marginLeft: 15, marginRight: 15 }}>
        <Header />
        <ScrollView
          contentContianerStyle={{ backgroundColor: 'transaprent', }}
          showsVerticalScrollIndicator={false}>
          <View style={styles.scrollViewContainer}>
            <Text style={styles.title}>{Constants.APP_STRINGS.USER_PREFRENCE}</Text>
            <View style={styles.headingView}>
              <View style={styles.lineView} />
              <Text style={styles.options}>{Constants.APP_STRINGS.REPEAT_TIME_MSG}</Text>
              <View style={styles.lineView} />
            </View>
            <View style={styles.headingView}>
              <TouchableOpacity onPress={() => {
                setIsDaily(true);
              }}>
                <View style={styles.inActiveView} >
                  <Text style={styles.optionsText}>{Constants.APP_STRINGS.DAILY}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                setIsDaily(false);
              }}>
                <View style={styles.activeView} >
                  <Text style={styles.optionsTextA}>{Constants.APP_STRINGS.WEEKLY}</Text>
                </View>
              </TouchableOpacity>
            </View>
            {isDaily ? (<DailyView />) : <WeeklyView />}

          </View>
        </ScrollView>
      </View>
    </ImageBackground >

  );
}

const styles = StyleSheet.create({
  lineView: {
    alignSelf: 'center',
    backgroundColor: Constants.APP_COLOR.GREEN_COLOR,
    height: 1,
    flex: 1,
    borderStyle: 'solid'
  },
  headingView: {
    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inActiveView: {
    marginRight: 10,
    width: 120,
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10
  },
  daysView: {
    marginLeft: 10,
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 10
  },
  activeView: {
    marginLeft: 10,
    width: 120,
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: Constants.APP_COLOR.TEXT_GREEN,
    padding: 10,
    borderRadius: 10
  },
  options: {
    fontFamily: "Comfortaa-Bold",
    color: Constants.APP_COLOR.DARK_GREY,
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center'
  },
  weekText: {
    fontFamily: Constants.APP_FONTS.REGULAR,
    color: Constants.APP_COLOR.DARK_GREY,
    fontSize: 12,
    paddingLeft: 8,
    paddingRight: 8,
    textAlign: 'center'
  },
  optionsText: {
    fontFamily: Constants.APP_FONTS.REGULAR,
    color: Constants.APP_COLOR.DARK_GREY,
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center'
  },
  optionsTextA: {
    fontFamily: Constants.APP_FONTS.REGULAR,
    color: 'white',
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center'
  },
  buttonStyle: {
    color: 'black',
    borderColor: Constants.APP_COLOR.GREEN_COLOR,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 10,

    width: Dimensions.get('window').width - 50,
  },
  textPassword: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    marginTop: 20,
    paddingLeft: 10
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
    width: Dimensions.get('window').width - 50,
  },
  flex: {
    flex: 1,
  },
  scrollViewContainer: {
    backgroundColor: 'transaprent',
    flex: 1,
    //justifyContent: 'center',

  },
  root: {

    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'transaprent',
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
    marginTop: 10,
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