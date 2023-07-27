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

import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'



function sanity(): JSX.Element {
    const sanity = createClient({

    })

   
    return (

        <SafeAreaView style={styles.container}>
          

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',

    },
   

});

export default sanity
