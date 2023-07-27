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





function NoticePage({navigation}): JSX.Element {

    return (

        <SafeAreaView style={styles.container}>
            {/* Phần header  */}
            <View style={styles.header}>

                <View style={styles.itemHeader}>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('Home')}>
                        <Image
                            style={styles.icon}
                            source={require('/FileOfBao/Mobile/BongDaProject/image/ic_back.png')} />
                    </TouchableOpacity>

                    <Text style={[styles.text]}>Thông báo</Text>

                <View style={{paddingLeft:25}}></View>
                </View>

                

            </View>

            {/* Phần thân  */}


            <View style={styles.body}>
                <View style={styles.bodyText}>
                   <Text style={{fontSize:15}}>CẬP NHẬT THÔNG BÁO</Text> 
                </View>
                <View style={styles.bodyContent}>
                    <Image
                        style={styles.imageNews}
                        source={require('/FileOfBao/Mobile/BongDaProject/image/ic_news.png')} />
                    <Text style={styles.text}>Không có thông báo</Text>
                </View>
               
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        // backgroundColor: 'red',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',

    },
    item1: {

        borderWidth:0.5,
        borderRadius:8,
        flexDirection: 'column',
        margin:7, 
        padding:10,
        
    },
    item2: {
        padding: 5,
        flexDirection: 'column',
        marginRight:5,
        height: 180,
       
        
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

    },
    //Phần header
    header: {
        
        flex: 1,
        backgroundColor: '#139A43',
        width: '100%',
        height: 100,
        justifyContent:'center'
        
    },
    itemHeader:{
        // backgroundColor:'red',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    icon: {
        width: 30,
        height: 30,
    },

    //Phần thân
    body: {
        backgroundColor: 'white',
        flex: 8,
        flexDirection: 'column',
        padding:5,
        // alignItems:'center',
        // justifyContent:'center',
    },
    text: {
        fontSize: 20,
        color: 'black'
    },
    imageNews:{
        width:150,
        height:150,
    },
    bodyText:{
        padding:5,
        // backgroundColor:'blue'

    },
    bodyContent:{
        flex:8,
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'red',
    },
    
    

});

export default NoticePage
