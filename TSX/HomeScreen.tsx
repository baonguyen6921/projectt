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
import navigate from './Navigation';



function HomeScreen({navigation}): JSX.Element {

    const DATA = [
        {
            id: 'h1',
            title: 'First Item',
            thumbnail: 'https://baothainguyen.vn/file/oldimage/baothainguyen/UserFiles/images/news/26.3.2009_8h52_stadium26309.jpg',
            address: 'Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA, United Kingdom'
        },
        {
            id: 'h2',
            title: 'Second Item',
            thumbnail: 'https://baothainguyen.vn/file/oldimage/baothainguyen/UserFiles/images/news/26.3.2009_8h52_stadium26309.jpg',
            address: 'Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA, United Kingdom'
        },
        {
            id: 'h3',
            title: 'Third Item',
            thumbnail: 'https://baothainguyen.vn/file/oldimage/baothainguyen/UserFiles/images/news/26.3.2009_8h52_stadium26309.jpg',
            address: 'Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA, United Kingdom'
        },
        {
            id: 'h4',
            title: 'Four Item',
            thumbnail: 'https://baothainguyen.vn/file/oldimage/baothainguyen/UserFiles/images/news/26.3.2009_8h52_stadium26309.jpg',
            address: 'Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA, United Kingdom'
        },
        {
            id: 'h5',
            title: 'Fifth Item',
            thumbnail: 'https://baothainguyen.vn/file/oldimage/baothainguyen/UserFiles/images/news/26.3.2009_8h52_stadium26309.jpg',
            address: 'Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA, United Kingdom'
        },
    ];
    
    type ItemProps = {
        title: string,
        thumbnail: string,
        address: string,
    };
    
    const Item = ({ title, thumbnail, address }: ItemProps) => (
        <View style={styles.item1}>
            <TouchableOpacity
            onPress={()=>{navigation.navigate('Xem sân')}}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: thumbnail,
                }}
            />
            <View style={{ flexDirection: 'column', width: 200 }}>
                <Text style={[styles.title, { fontWeight: 'bold',fontSize:20 }]}>{title}</Text>
                <Text style={styles.title}>{address}</Text>
            </View>
            </TouchableOpacity>
            
    
        </View>
    );
    
    const ItemTwo = ({ thumbnail}: ItemProps) => (
        <View style={styles.item2}>
            <Image
                style={styles.bannerImg}
                source={{
                    uri: thumbnail,
                }}
            />
            
        </View>
    );

    return (

        <SafeAreaView style={styles.container}>
            {/* Phần header  */}
            <View style={styles.header}>
                <View style={styles.icHeader}>
                    <TouchableOpacity
                    onPress={()=>{navigation.navigate('Thông báo')}}>
                    
                        <Image
                            style={styles.icon}
                            source={require('/FileOfBao/Mobile/BongDaProject/image/ic_notice.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>{navigation.navigate('Cá nhân')}}>
                        <Image
                            style={styles.icon}
                            source={require('/FileOfBao/Mobile/BongDaProject/image/ic_user.png')} />
                    </TouchableOpacity>
                </View>

            </View>

            {/* Phần thân  */}


            <View style={styles.body}>
                <ScrollView >


                    <View style={styles.banner}>
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) =>
                            <ItemTwo thumbnail={item.thumbnail} />}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            contentContainerStyle={{

                                flexWrap: 'wrap'
                            }}
                        />



                    </View>

                    <Text style={[styles.text,{margin:5}]}>
                        SÂN BÓNG TỐT NHẤT
                    </Text>

                    <View style={styles.totNhat}>
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) =>
                                <Item title={item.title} thumbnail={item.thumbnail} address={item.address} />}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            contentContainerStyle={{

                                flexWrap: 'wrap'
                            }}
                        />


                    </View>

                    <Text style={styles.text}>
                        SÂN BÓNG GẦN NHẤT
                    </Text>
                    <View style={styles.ganNhat}>
                    <FlatList
                            data={DATA}
                            renderItem={({ item }) =>
                                <Item title={item.title} thumbnail={item.thumbnail} address={item.address} />}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            contentContainerStyle={{

                                flexWrap: 'wrap'
                            }}
                        />

                    </View>
                    <Text style={styles.text}>
                        CÁC SỰ KIỆN GẦN ĐÂY
                    </Text>

                </ScrollView>
            </View>

    
            {/* Phần footer  */}
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={require('/FileOfBao/Mobile/BongDaProject/image/ic_home.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={require('/FileOfBao/Mobile/BongDaProject/image/ic_calendar.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={require('/FileOfBao/Mobile/BongDaProject/image/ic_add.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={require('/FileOfBao/Mobile/BongDaProject/image/ic_group.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={require('/FileOfBao/Mobile/BongDaProject/image/ic_cup.png')} />
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',

    },
    item1: {

        borderRadius:8,
        flexDirection: 'column',
        margin:7, 
        padding:10,
        shadowRadius: 10,
        shadowOpacity: 5,
        elevation: 5
        
    },
    item2: {
        padding: 5,
        flexDirection: 'column',
        marginRight:5,
        height: 200,
        // borderWidth:1,
        
    },
    title: {
        fontSize: 15,
        padding:10,

        
        
    },
    tinyLogo: {
        width: 240,
        height: 180,
    },
    bannerImg:{
        width: 300,
        height: 200,
        shadowRadius: 10,
        shadowOpacity: 5,
        elevation: 5
    },
    //Phần header
    header: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#139A43',
        justifyContent: 'center',
        width: '100%',
        height: 100,
    },
    icon: {
        width: 30,
        height: 30,
    },

    icHeader: {
        // backgroundColor:'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },

    //Phần thân
    body: {
        backgroundColor: 'white',
        flex: 8,
        flexDirection: 'column',
        padding:5,
    },
    text: {
        fontSize: 20,
       paddingLeft:10,
       paddingBottom:10,
        color: 'black',
    },
    banner: {

        // flex: 3,
        // backgroundColor: 'green',
    },
    totNhat: {

        // backgroundColor: 'blue',

    },
    ganNhat: {
        flex: 2.5,
        // backgroundColor: 'purple',

    },
    suKien:{

    },
    //Phần footer
    footer: {
        backgroundColor: '#139A43',
        // backgroundColor:'red',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 100,


    },



});

export default HomeScreen
