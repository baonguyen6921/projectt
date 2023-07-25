import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    FlatList,
    StatusBar,
    Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import getMovieInfo from './apis/movieAPI';

function MovieDetail2({navigation}): JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.top} >

                <View style={{ }}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Movie List')}}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
                            Back
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{}}>
                    <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' , textAlign:'center'}}>
                        Movie Detail
                    </Text>
                </View>
                <View>
                    
                </View>

            </View>

            <View style={styles.bottom}>
                <View style={styles.bottomLeft}>
                    <View style={styles.bottomLeft1}>
                        <Image source={require('./image/imgSup.jpg')}
                            style={{ width: 150, height: 200, margin: 10, }}
                        />
                    </View>
                    <View style={styles.lineStyle}/>

                    <View style={[styles.bottomLeft2, { alignItems: 'center' }]}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold',color:'black' }}>Meta: 44 </Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold',color:'black' }}>imDb: 6.5</Text>

                    </View>
                </View>

                <View style={[styles.bottomRight,{alignItems:'center',margin:10}]}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold',color:'black' }}>
                        Batman v Superman: Dawn of Justice (2016){' '}
                    </Text>
                    <View style={styles.lineStyle}/>

                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                        Batman v Superman: Dawn of Justice is a 2016 superhero film based
                        on the DC Comics superheroes Batman and Superman. Co-produced by
                        Atlas Entertainment and Cruel and Unusual Films and distributed by
                        Warner Bros. Pictures, the film is a follow-up to Man of Steel and
                        the second installment in the DC Extended Universe. It was
                        released on March 25, 2016 in DCP, IMAX 15/70mm and 5/70mm
                        formats.
                    </Text>
                    <View style={styles.lineStyle}/>

                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                        Director(s) :Zack Snyder{' '}
                    </Text>
                    <View style={styles.lineStyle}/>

                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                        Producer(s) :Charles Roven, Deborah Snyder{' '}
                    </Text>
<View style={styles.lineStyle}/>

                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                        Writer(s): David S. Goyer, Chris Terrio
                    </Text>
                    <View style={styles.lineStyle}/>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                        Compose: Hans Zimmer , Junkie XL
                    </Text>

                </View>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({

    lineStyle:{
        borderWidth: 0.7,
        borderColor:'black',
        margin:10,
        width: '100%'
   },
    container: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    top: {
        flex:1,
        
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'red'

    },
    bottom: {
        // backgroundColor: 'blue',
        flex: 8,
        flexDirection: "row",

    },
    bottomLeft: {
        // backgroundColor: 'grey',
        flex: 3,
        flexDirection: 'column',
    },
    bottomLeft1: {
        flex: 2,
        // backgroundColor: 'white',

    },
    bottomLeft2: {
        flex: 4,
        // backgroundColor: 'pink',

    },
    bottomRight: {
        // backgroundColor: 'green',
        flex: 4,

    },


});

export default MovieDetail2;