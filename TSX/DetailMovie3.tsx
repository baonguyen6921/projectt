aaaaimport React, { useEffect, useState } from 'react';
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

function MovieDetail3(): JSX.Element {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [nameMovie, setNameMovie] = useState('')
    const [year, setYear] = useState('')


    useEffect(() => {
        setIsLoading(true)
        getAPI('doraemon',1)
    },[])

 

    const getAPI = (a: string,b: number)=>{
        getMovieInfo(a,b).then(res => {
            if (res !== null || res !== undefined) {
                setData(res["Search"])
                setNameMovie(res["Stand by Me Doraemon"])
                setYear(res["2014"])
                setIsLoading(false);
            }
        }).catch(error =>{
           
            setIsLoading(false)
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.top} >

                <View style={{ }}>
                    <TouchableOpacity>
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
               
                {isLoading ? <ActivityIndicator /> : (
                <View style={[styles.bottomRight,{alignItems:'center',margin:10}]}>
                
                    <Text 
                    style={{ fontSize: 20, fontWeight: 'bold',color:'black' }}>
                        
                       
                        </Text>
                
               
                    <View style={styles.lineStyle}/>
                   

                    
                </View>
                )}

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

export default MovieDetail3;
