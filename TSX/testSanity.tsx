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
import { getSanBongInfo } from '../apis/api';
import urlBuilder from '@sanity/image-url';
import { urlFor } from '../sanity';
import sanbong from '../bongda-project/schemas/sanbong';

function testSanity(): JSX.Element {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [refreshing, setRefreshing] = React.useState(false);
 

    

    useEffect(() => {
        getSanBongInfo().then(data=>
            setData(data))
    }, [])
   


    

    const renderItem = ({item}) => (
        <View >
            <TouchableOpacity 
            style={styles.item} 
            >
            <Image
                style={styles.image}
                
                source={{ uri: urlFor(item.image).url() }}
                resizeMode='contain' />
            <View style={styles.wrapText}>
                
                <Text>{item.name} </Text>
                
            </View>
            </TouchableOpacity>
            

        </View>
    );

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
            <View style={{}}>
                    <Text style={{ color: 'white', fontWeight: '900', fontSize: 40 }}>Movie Explorer</Text>
                </View>

            </View>

            <View style={styles.bottom}>
          
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    style={styles.list}
                    data={data}
                    // keyExtractor={item => `key-${item._id}`}
                    renderItem={renderItem}
                    // refreshing={this.state.refreshing}
                    // refreshControl={
                    // <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    // }

                />
            )}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'column',
        // backgroundColor: 'black',
        width: '100%',
        height: '100%',

    },

    top: {
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    bottom: {
        // backgroundColor: 'green',
        flex: 5,

    },

    list: {
        padding: 8,
        flex: 1,

    },
    item: {
        flexDirection: 'row',
        marginTop: 8,
        padding: 5,
        shadowColor: '#000',
        shadowRadius: 4,
        shadowOpacity: 0.25,


    },
    image: {
        width: 100,
        height: 150,

    },
    wrapText: {
        flex: 1,
        marginLeft: 8,
        justifyContent: 'center',
    }

});

export default testSanity
