
import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Image,
  Dimensions, ImageBackground,
  TouchableOpacity,

} from 'react-native';
import { PagerBg, icBackWARDArrow, icForwardArrow } from '@images';

import Constants from '../../assets/constants';
import { TextInput } from 'react-native-gesture-handler';
import Header from '../../component/Header';
import { AppThemeButton } from '../../component/Buttons';
import Collapsible from 'react-native-collapsible';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Calendar } from 'react-native-calendars';
import moment from 'moment'

export default function Home({ navigation }) {
  const minDate = new Date();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [isCollaps, setIsCollaps] = useState(true)
  let startdate = moment().format("YYYY-MM-DD");
  const ITEMS = () => {
    [
      {
        title: dates[0],
        data: [{ hour: '12am', duration: '1h', title: 'First Yoga' }]
      },
      {
        title: dates[1],
        data: [
          { hour: '4pm', duration: '1h', title: 'Pilates ABC' },
          { hour: '5pm', duration: '1h', title: 'Vinyasa Yoga' }
        ]
      },
      {
        title: dates[2],
        data: [
          { hour: '1pm', duration: '1h', title: 'Ashtanga Yoga' },
          { hour: '2pm', duration: '1h', title: 'Deep Stretches' },
          { hour: '3pm', duration: '1h', title: 'Private Yoga' }
        ]
      },
      {
        title: dates[3],
        data: [{ hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }]
      },
      {
        title: dates[4],
        data: [{}]
      },
      {
        title: dates[5],
        data: [
          { hour: '9pm', duration: '1h', title: 'Middle Yoga' },
          { hour: '10pm', duration: '1h', title: 'Ashtanga' },
          { hour: '11pm', duration: '1h', title: 'TRX' },
          { hour: '12pm', duration: '1h', title: 'Running Group' }
        ]
      },
      {
        title: dates[6],
        data: [
          { hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }
        ]
      },
      {
        title: dates[7],
        data: [{}]
      },
      {
        title: dates[8],
        data: [
          { hour: '9pm', duration: '1h', title: 'Pilates Reformer' },
          { hour: '10pm', duration: '1h', title: 'Ashtanga' },
          { hour: '11pm', duration: '1h', title: 'TRX' },
          { hour: '12pm', duration: '1h', title: 'Running Group' }
        ]
      },
      {
        title: dates[9],
        data: [
          { hour: '1pm', duration: '1h', title: 'Ashtanga Yoga' },
          { hour: '2pm', duration: '1h', title: 'Deep Stretches' },
          { hour: '3pm', duration: '1h', title: 'Private Yoga' }
        ]
      },
      {
        title: dates[10],
        data: [
          { hour: '12am', duration: '1h', title: 'Last Yoga' }
        ]
      }
    ];
  }

  return (

    <ImageBackground style={styles.container}
      resizeMode="stretch"
      source={PagerBg}>
      <View style={{ flex: 1, }}>

        <Text style={styles.title}>{Constants.APP_STRINGS.HOME}</Text>
        <Collapsible collapsed={isCollaps}
          align="top"
          style={{ elevation: 10 }}
          collapsedHeight={130}>
          <Calendar
            style={{ width: Dimensions.get('window').width, color: Constants.APP_COLOR.BALCK }}
            // Initially visible month. Default = now
            current={startdate}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2012-05-10'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2024-05-30'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={day => {
              console.log('selected day', day);
            }}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={day => {
              console.log('selected day', day);
            }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'yyyy MM'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={month => {
              console.log('month changed', month);
            }}
            // Hide month navigation arrows. Default = false
            hideArrows={false}
            // Replace default arrows with custom ones (direction can be 'left' or 'right')

            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            leftArrowImageSource={icBackWARDArrow}
            rightArrowImageSource={icForwardArrow}
            // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={false}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
            firstDay={1}
            // Hide day names. Default = false
            hideDayNames={false}
            // Show week numbers to the left. Default = false
            showWeekNumbers={false}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={subtractMonth => subtractMonth()}
            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
            // Disable left arrow. Default = false
            disableArrowLeft={false}
            // Disable right arrow. Default = false
            disableArrowRight={false}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={false}

            // Replace default month and year title with custom one. the function receive a date as parameter
            renderHeader={date => {
              /*Return JSX*/
            }}
            // Enable the option to swipe between months. Default = false
            enableSwipeMonths={true}
            theme={{
              todayTextColor: '#00adf5',
              monthTextColor:Constants.APP_COLOR.BALCK,
              dayTextColor: '#2d4150',
              'stylesheet.calendar.header': {
                color: Constants.APP_COLOR.BALCK,
                dayTextAtIndex0: {
                  color: 'red'
                },
                dayTextAtIndex6: {
                  color: 'blue'
                }
              }
            }}
          />
        </Collapsible>
        <TouchableOpacity
          style={{ marginTop: 10 }}
          onPress={() => {
            if (isCollaps)
              setIsCollaps(false)
            else setIsCollaps(true)
          }}>
          <Image source={icForwardArrow}
            style={{ alignSelf: 'center', transform: [{ rotate: '90deg' }] }}></Image>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontFamily: Constants.APP_FONTS.REGULAR, fontSize: 16, marginRight: 5 ,textAlign:'center'}}>
            {'Complete' + "\n" + '80%'}
          </Text>
          <AnimatedCircularProgress
            style={{ alignSelf: 'center', marginTop: 20 }}
            align='center'
            size={150}
            width={15}
            fill={50}
            rotation={180}
            tintColor={Constants.APP_COLOR.GRAY_BG}
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor={Constants.APP_COLOR.GREEN_COLOR} >
            {
              (fill) => (
                <Text style={{ fontFamily: Constants.APP_FONTS.C_BOLD, fontSize: 16 }}>
                  3 Hr
                </Text>
              )
            }
          </AnimatedCircularProgress>
          <Text style={{ fontFamily: Constants.APP_FONTS.REGULAR, fontSize: 16, marginLeft: 5,textAlign:'center' }}>
            {'Goal' + "\n" + '3 Hr'}
          </Text>
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