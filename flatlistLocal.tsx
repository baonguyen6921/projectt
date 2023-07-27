import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';

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
];

type ItemProps = {
  title: string,
  thumbnail: string,
  address: string,
};

const Item = ({ title, thumbnail, address }: ItemProps) => (
  <View style={styles.item}>
    <Image
      style={styles.tinyLogo}
      source={{
        uri: thumbnail,
      }}
    />
    <View style={{flexDirection:'column', width:200}}>
      <Text style={[styles.title,{fontWeight:'bold'}]}>{title}</Text>
      <Text style={styles.title}>{address}</Text>
    </View>

  </View>
);

const flat = () => {
  return (
    <SafeAreaView style={styles.container}>

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

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'column'
  },
  title: {
    fontSize: 20,
    marginLeft:10,
  },
  tinyLogo: {
    width: 240,
    height: 180,

  },
});

export default flat;
