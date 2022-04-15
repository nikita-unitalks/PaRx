
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
import PagerView from 'react-native-pager-view';
import pagebg from '../../assets/images/pager_bg.png';

import {
  ScalingDot,
  SlidingBorder,
  ExpandingDot,
  SlidingDot,
} from 'react-native-animated-pagination-dots';
import Constants from '../../assets/constants';
import AppIntroSlider from 'react-native-app-intro-slider';



export default function Splash() {

  let slider = useRef()
  const INTRO_DATA = [
    {
      key: 1,
      title: Constants.APP_STRINGS.PAGER_1_HEADING,
      text: Constants.APP_STRINGS.PAGER_1_TITLE,
      image: require('../../assets/images/pager_map_icon.png'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 2,
      title: Constants.APP_STRINGS.PAGER_2_HEADING,
      text: Constants.APP_STRINGS.PAGER_2_TITLE,
      image: require('../../assets/images/pager_2.png'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 3,
      title: Constants.APP_STRINGS.PAGER_3_HEADING,
      text: Constants.APP_STRINGS.PAGER_3_TITLE,
      image: require('../../assets/images/pager_3.png'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 4,
      title:Constants.APP_STRINGS.PAGER_4_HEADING,
      text: Constants.APP_STRINGS.PAGER_4_TITLE,
      image: require('../../assets/images/pager_4.png'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 5,
      title: Constants.APP_STRINGS.PAGER_5_HEADING,
      text: Constants.APP_STRINGS.PAGER_5_TITLE,
      image: require('../../assets/images/pager_5.png'),
      backgroundColor: '#22bcb5',
    }
  ];

  const _renderPagination = (activeIndex: number) => (
    <View style={styles.paginationContainer}>
      <SafeAreaView>
        <View style={styles.paginationDots}>
          {INTRO_DATA.length > 1 &&
            INTRO_DATA.map((_, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.dot,
                  i === activeIndex
                    ? { backgroundColor: '#5A8A4D' }
                    : { backgroundColor: '#E4E4E4' },
                ]}
                onPress={() => slider?.goToSlide(i, true)} />
            ))}
        </View>

      </SafeAreaView>
    </View>
  );
  const _renderNextButton = () => {
    return (
      <View style={{
        alignSelf: 'flex-end'
      }}>
        <Text style={styles.textRight}>Next</Text>
      </View>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View style={{
        alignSelf: 'flex-start'
      }}>
        <Text style={styles.textLeft}>Skip</Text>
      </View>
    );
  };


  const _renderItem = ({ item }) => {
    return (

      <View style={styles.container}>
        <Image
          style={styles.imageView}
          resizeMode="contain"
          source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>

    );
  }



  return (
    <ImageBackground style={styles.container} source={pagebg}>
      <AppIntroSlider
        style={{ flex: 1 }}

        ref={(ref) => (slider = ref)}

        renderItem={_renderItem}

        data={INTRO_DATA}
        showDoneButton={false}
        showSkipButton={true}
        activeDotStyle={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#5A8A4D' }}
        dotStyle={styles.dot}
        paginationStyle={{ color: '#121767', backgroundColor: 'red' }}
        renderNextButton={_renderNextButton}
        renderSkipButton={_renderSkipButton}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
    justifyContent: 'center'
  },
  progressContainer: { flex: 0.1, backgroundColor: '#63a4ff' },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    marginTop: 10,
    paddingLeft: 30,
    textAlign: 'center',
    paddingRight: 30
  },
  textRight: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    marginTop: 10,
    paddingLeft: 30,
    alignSelf: 'flex-end',
    paddingRight: 30,
    fontFamily: 'OpenSans-Bold',
    color: Constants.APP_COLOR.TEXT_GREEN
  }, textLeft: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    marginTop: 10,
    paddingLeft: 30,
    alignSelf: 'flex-start',
    paddingRight: 30,
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
    bottom: 16,

  },
  paginationDots: {
    width: 'auto',
    height: 16,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,

    backgroundColor: '#E4E4E4'
  },
});