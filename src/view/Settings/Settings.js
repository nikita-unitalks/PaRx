
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
import { SettingBg, Logout, icCamera } from '@images';

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
                            <View
                                style={{ alignItems: 'center', padding: 15, borderRadius: 10, backgroundColor: 'white', flexDirection: 'row', margin: 20 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.imageView}>
                                        <Image style={styles.userImage}
                                            resizeMode='contain'
                                            source={icCamera} >
                                        </Image>
                                    </View>
                                    <View style={styles.GalleryView}>
                                        <View style={styles.galleryInnerView}>
                                            <Image style={styles.gallaryOptionView}
                                                resizeMode='contain'
                                                source={icCamera} >
                                            </Image>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={styles.profileTitle}>{Constants.APP_STRINGS.USER_NAME}</Text>
                                    <Text style={styles.profileText}>{Constants.APP_STRINGS.USER_NAME}</Text>
                                    <View style={{ backgroundColor: Constants.APP_COLOR.GREEN_COLOR, height: 1, marginTop: 10, marginBottom: 10, borderStyle: 'dashed' }} />
                                    <Text style={styles.profileTitle}>{Constants.APP_STRINGS.EMAIL}</Text>
                                    <Text style={styles.profileText}>{Constants.APP_STRINGS.EMAIL}</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("ChangePassword")
                            }}>
                                <View style={{ backgroundColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                                    <Text style={styles.options}>{Constants.APP_STRINGS.CHANGE_PASSWORD}</Text>
                                    <View style={{ backgroundColor: Constants.APP_COLOR.GREEN_COLOR, height: 1, marginTop: 10, borderStyle: 'dashed' }} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("UserPre")
                            }}>
                                <View style={{ backgroundColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                                    <Text style={styles.options}>{Constants.APP_STRINGS.USER_PREFRENCE}</Text>
                                    <View style={{ backgroundColor: Constants.APP_COLOR.GREEN_COLOR, height: 1, marginTop: 10, borderStyle: 'dashed' }} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                navigation.navigate("TermsCondition")
                            }}>
                                <View style={{ backgroundColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                                    <Text style={styles.options}>{Constants.APP_STRINGS.TERMS_OF_USE}</Text>
                                    <View style={{ backgroundColor: Constants.APP_COLOR.GREEN_COLOR, height: 1, marginTop: 10, borderStyle: 'dashed' }} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                navigation.navigate("TermsCondition")
                            }}>
                                <View style={{ backgroundColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                                    <Text style={styles.options}>{Constants.APP_STRINGS.PRIVACY_POLICY}</Text>
                                    <View style={{ backgroundColor: Constants.APP_COLOR.GREEN_COLOR, height: 1, marginTop: 10, borderStyle: 'dashed' }} />
                                </View>
                            </TouchableOpacity>

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
            </View >
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
    gallaryOptionView: {
        height: 15,
        width: 15,
        alignSelf: 'center'
    },
    galleryInnerView: {
        justifyContent: 'center', alignContent: 'center',
        backgroundColor: Constants.APP_COLOR.GREEN_COLOR,
        height: 30,
        width: 30,
        alignSelf: 'center',
        borderRadius: 15
    },
    GalleryView: { alignSelf: 'flex-end', marginLeft: -20, marginBottom: 20 },
    userImage: {
        backgroundColor: Constants.APP_COLOR.GRAY_BG, alignSelf: 'center'
    },
    imageView: {
        justifyContent: 'center', alignContent: 'center',
        height: 80,
        width: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: Constants.APP_COLOR.GRAY_BG

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
    profileTitle: {
        fontFamily: Constants.APP_FONTS.REGULAR,
        color: Constants.APP_COLOR.LIGHT_GRAY,
        fontSize: 12,
    },
    profileText: {
        fontFamily: Constants.APP_FONTS.C_BOLD,
        color: Constants.APP_COLOR.BALCK,
        fontSize: 14,
        marginTop: 5
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