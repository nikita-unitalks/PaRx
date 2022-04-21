
import React, { useRef } from 'react';
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
import { SettingBg, Logout } from '@images';

import Constants from '../../assets/constants';
import { TextInput } from 'react-native-gesture-handler';
import Header from '../../component/Header';
import { AppThemeButton } from '../../component/Buttons';


export default function Home({ navigation }) {

    return (

        <ImageBackground style={styles.container}
            resizeMode="stretch"
            source={SettingBg}>
            <View style={styles.container}>
                <Header />
                <View style={styles.root}>
                    <ScrollView
                        contentContianerStyle={styles.SectionStyle}
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.scrollViewContainer}>

                            <Text style={styles.title}>{Constants.APP_STRINGS.SETTINGS}</Text>

                            <TouchableOpacity onPress={() => {
                                navigation.navigate("ChangePassword")
                            }}>
                                <View style={{ backgroundColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                                    <Text style={styles.options}>{Constants.APP_STRINGS.CHANGE_PASSWORD}</Text>
                                    <View style={{ backgroundColor: Constants.APP_COLOR.GREEN_COLOR, height: 1, marginTop: 10, borderStyle: 'dashed' }} />
                                </View>
                            </TouchableOpacity>

                            <View style={{ backgroundColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                                <Text style={styles.options}>{Constants.APP_STRINGS.USER_PREFRENCE}</Text>
                                <View style={{ backgroundColor: Constants.APP_COLOR.GREEN_COLOR, height: 1, marginTop: 10, borderStyle: 'dashed' }} />
                            </View>

                            <View style={{ backgroundColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                                <Text style={styles.options}>{Constants.APP_STRINGS.TERMS_OF_USE}</Text>
                                <View style={{ backgroundColor: Constants.APP_COLOR.GREEN_COLOR, height: 1, marginTop: 10, borderStyle: 'dashed' }} />
                            </View>

                            <View style={{ backgroundColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                                <Text style={styles.options}>{Constants.APP_STRINGS.PRIVACY_POLICY}</Text>
                                <View style={{ backgroundColor: Constants.APP_COLOR.GREEN_COLOR, height: 1, marginTop: 10, borderStyle: 'dashed' }} />
                            </View>

                            <View style={{ backgroundColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                                <Text style={styles.options}>{Constants.APP_STRINGS.ABOUT_APP}</Text>
                                <View style={{ backgroundColor: Constants.APP_COLOR.GREEN_COLOR, height: 1.5, marginTop: 10, borderStyle: 'dashed' }} />
                            </View>

                        </View>
                    </ScrollView>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Signin")
                    }}>
                        <View style={{ flex: 1, backgroundColor: 'transparent', marginLeft: 20, marginRight: 20, position: 'absolute', bottom: 20, flexDirection: 'row' }}>
                            <Text style={styles.logoutText}>{Constants.APP_STRINGS.LOGOUT}</Text>
                            <Image style={{ alignSelf: 'flex-end' }} source={Logout}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    SectionStyle: {
        height: Dimensions.get('window').height,
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
    logoutText: {
        fontFamily: Constants.APP_FONTS.REGULAR,
        color: Constants.APP_COLOR.BALCK,
        fontSize: 14,
        flex: 1
    },
    options: {
        fontFamily: "Comfortaa-Bold",
        color: 'black',
        fontSize: 14,
        marginTop: 20,

    },
    scrollViewContainer: {
        backgroundColor: 'transparent',
        flex: 1,
        height: Dimensions.get('window').height,
        //justifyContent: 'center',

    },
    root: {
        height: Dimensions.get('window').height - 100,
        flex: 1,
        backgroundColor: 'transaprent',
    },

});