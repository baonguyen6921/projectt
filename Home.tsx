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

function HomeSample(): JSX.Element {
    
    
    

    return (

        <SafeAreaView style={styles.container}>
            {/* Phần header  */}
            <View style={styles.header}>
                <View style={styles.icHeader}>
                <TouchableOpacity>
                    <Image 
                    style={styles.icon}
                    source={require('./image/ic_notice.png')} />
                    </TouchableOpacity>
                <TouchableOpacity>
                <Image 
                    style={styles.icon}
                    source={require('./image/ic_user.png')} />
                </TouchableOpacity>
                </View>
                
            </View>

            {/* Phần thân  */}
            <View style={styles.body}>
            
                <View style={styles.banner}>
                    

                </View>

                <Text>
                    SÂN BÓNG TỐT NHẤT
                </Text>

                <View style={styles.totNhat}>

                </View>

                <Text>
                    SÂN BÓNG GẦN NHẤT
                </Text>
                <View style={styles.ganNhat}>

                </View>
                <Text>
                    CÁC SỰ KIỆN GẦN ĐÂY
                </Text>
                

           
            </View>

            {/* Phần footer  */}
            <View style={styles.footer}>
            <TouchableOpacity>
                    <Image 
                    style={styles.icon}
                    source={require('./image/ic_home.png')} />
                    </TouchableOpacity>
                <TouchableOpacity>
                <Image 
                    style={styles.icon}
                    source={require('./image/ic_calendar.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image 
                    style={styles.icon}
                    source={require('./image/ic_add.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image 
                    style={styles.icon}
                    source={require('./image/ic_group.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image 
                    style={styles.icon}
                    source={require('./image/ic_cup.png')} />
                </TouchableOpacity>

            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'column',
        backgroundColor: 'red',
        width: '100%',
        height: '100%',

    },
    //Phần header
    header:{
        flexDirection:'column',
        flex: 1,
        backgroundColor:'#F9E900',
        justifyContent:'center'


    },
    icon:{
        width:30,
        height:30,
    },
    icHeader:{
        // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
    },

    //Phần thân
    body:{
        backgroundColor: 'white',
        flex: 8,
        flexDirection:'column',
    },
    banner:{
        flex: 2,
        backgroundColor:'green',
    },
    totNhat:{
        flex: 2,
        backgroundColor:'blue',

    },
    ganNhat:{
        flex: 2,
        backgroundColor:'purple',

    },
    //Phần footer
    footer:{
        backgroundColor:'#F9E900',
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        

    },


   
});

export default HomeSample
