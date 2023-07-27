import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    ScrollView,
    StyleSheet,
    Text, TextInput, TouchableOpacity, View,
    FlatList,
    StatusBar,
    Image,
    SafeAreaView,
    RefreshControl,

} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function XemSan({ navigation }): JSX.Element {

    return (

        <SafeAreaView style={styles.container}>
            {/* Phần header  */}
            <View style={styles.header}>


                <TouchableOpacity
                    onPress={() => { navigation.navigate('Home') }}>

                    <Image
                        style={styles.icon}
                        source={require('/FileOfBao/Mobile/BongDaProject/image/ic_back.png')} />
                </TouchableOpacity>

                <Text style={[styles.text,{color:'black'}]}>Chi tiết sân</Text>
                <View style={{ padding: 10 }}></View>
            </View>
            {/* Phần body  */}
            <View style={styles.body}>
                <ScrollView>

                    <Image
                        style={{ width: '100%', height: 250 }}
                        source={{ uri: 'https://baothainguyen.vn/file/oldimage/baothainguyen/UserFiles/images/news/26.3.2009_8h52_stadium26309.jpg' }} />

                    <View style={styles.body1}>
                        <Text style={{ fontSize: 30, padding: 5, fontWeight:'bold' }}>Sân MU</Text>
                        <View style={styles.body1Icon}>
                            <Image
                                style={{ width: 20, height: 20, marginHorizontal: 5 }}
                                source={require('/FileOfBao/Mobile/BongDaProject/image/ic_star.png')}
                            />
                            <Text style={{ marginHorizontal: 5 }}> 5 </Text>
                            <Text style={{ marginHorizontal: 5 }}> | </Text>
                            <Image
                                style={{ width: 20, height: 20, marginHorizontal: 5 }}
                                source={require('/FileOfBao/Mobile/BongDaProject/image/ic_football.png')}
                            />
                        </View>
                        <View style={styles.body1Icon}>
                            <Image
                                style={{ width: 20, height: 20, marginHorizontal: 5 }}
                                source={require('/FileOfBao/Mobile/BongDaProject/image/ic_location.png')}
                            />
                            <Text> United Kingdom </Text>

                        </View>
                    </View>
                   
                    <View style={styles.body2}>

                        <Text style={{
                            margin: 5,
                            fontSize: 15,
                            fontWeight: 'bold',
                        }}>
                            DỊCH VỤ TẠI ĐỊA ĐIỂM
                        </Text>


                        <View style={{ flexDirection: 'row', margin: 5 }}>
                            <Image
                                style={{ width: 20, height: 20, marginHorizontal: 5 }}
                                source={require('/FileOfBao/Mobile/BongDaProject/image/ic_eatt.png')}
                            />
                            <Text style={{ marginHorizontal: 5 }}>Canteen</Text>
                        </View>

                        <View style={{ flexDirection: 'row', margin: 5 }}>
                            <Image
                                style={{ width: 20, height: 20, marginHorizontal: 5 }}
                                source={require('/FileOfBao/Mobile/BongDaProject/image/ic_wifi.png')}
                            />
                            <Text style={{ marginHorizontal: 5 }}>Free wifi</Text>
                        </View>

                        <View style={{ flexDirection: 'row', margin: 5 }}>
                            <Image
                                style={{ width: 20, height: 20, marginHorizontal: 5 }}
                                source={require('/FileOfBao/Mobile/BongDaProject/image/ic_shower.png')}
                            />
                            <Text style={{ marginHorizontal: 5 }}>Showers available</Text>
                        </View>

                        <View style={{ flexDirection: 'row', margin: 5 }}>
                            <Image
                                style={{ width: 20, height: 20, marginHorizontal: 5 }}
                                source={require('/FileOfBao/Mobile/BongDaProject/image/ic_toilet.png')}
                            />
                            <Text style={{ marginHorizontal: 5 }}>Toilet</Text>
                        </View>


                    </View>
                    

                    <View style={styles.body3}>

                        <Text style={{
                            margin: 5,
                            fontSize: 15,
                            fontWeight: 'bold',
                        }}>ĐÁNH GIÁ (1)</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={{ width: 20, height: 20, marginHorizontal: 5 }}
                                source={require('/FileOfBao/Mobile/BongDaProject/image/ic_star.png')}
                            />
                            <Text style={{ marginHorizontal: 5 }}> 5 </Text>
                        </View>




                    </View>

                    
                </ScrollView>
            </View>

            {/* Phần foot  */}

            <View style={styles.footer}>
            

                <TouchableOpacity 
                onPress={()=>{navigation.navigate('Lịch')}}
                style={styles.btnFooter}>

                    <Text style={styles.txtFooter} > Đặt ngay </Text>

                </TouchableOpacity>


            </View>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
    },
    // Phần header 
    header: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#139A43',
        width: '100%',
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
    },
    // Phần body 
    body: {
        flex: 9,
        backgroundColor: 'white',
    },
    body1: {

        // backgroundColor: 'red',
        margin: 5,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,

    },
    body1Icon: {
        margin: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom:10,

    },
    body2: {
        margin: 5,
        flex: 4,
        // backgroundColor: 'blue',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,
        paddingBottom:10,

    },
    body3: {
        flex: 1,
        // backgroundColor: 'green',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: "space-between",
        margin: 5,
        paddingBottom:10,

    },
    
    text: {
        fontSize: 20,
    },

    // Phần footer 
    footer: {
        flex: 1.5,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    btnFooter:{
                    
        width: '80%',
        height: 40,
        borderRadius: 25,
        alignItems:'center',
        justifyContent:'center',
        shadowRadius: 10,
        shadowOpacity: 5,
        elevation: 5,
        backgroundColor:'green'
    },
    txtFooter:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:20,   
        color:'white'                 
    },
});

export default XemSan
