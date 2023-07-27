/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,

} from 'react-native/Libraries/NewAppScreen';



function ChinhSua({navigation}): JSX.Element {
  const [text, setText] = useState('');


  return (
    <SafeAreaView style={styles.container}>
      {/* Phần header  */}
      <View style={styles.head}>


        <TouchableOpacity  
        onPress={()=>{navigation.navigate('Cá nhân')}}>
          <Image
            source={require('/FileOfBao/Mobile/BongDaProject/image/ic_back.png')}
            style={{ width: 40, height: 30 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Hồ sơ</Text>
        <TouchableOpacity><Text style={{ fontSize: 20, color: '#139A43' }}>Sửa</Text></TouchableOpacity>
      </View>

      {/* Phần thân  */}
      <View style={styles.bodyContent}>
        <View style={styles.ava}>
          <Image

            source={require('/FileOfBao/Mobile/BongDaProject/image/ic_avatar.png')}
            // source={{uri:'https://tse4.mm.bing.net/th?id=OIP.9g4dkKVAUyciOuDI9_vEYQHaHa&pid=Api&P=0&h=180'}}

            style={styles.icon}
          />
        </View>
        <ScrollView>
        <View style={styles.body}>

          <View style={styles.body1}>
            <Text style={styles.text}>
              Họ và tên
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Nhập"
              onChangeText={newText => setText(newText)}
              defaultValue={text}
            />

          </View>
          <View style={styles.body2}>
            <Text style={styles.text}>
              Giới tính
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Nhập"
              onChangeText={newText => setText(newText)}
              defaultValue={text}
            />

          </View>
          <View style={styles.body3}>
            <Text style={styles.text}>
              Ngày Sinh
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Nhập"
              onChangeText={newText => setText(newText)}
              defaultValue={text}
            />

          </View>
          <View style={styles.body4}>
            <Text style={styles.text}>
              Tên đăng nhập
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Nhập"
              onChangeText={newText => setText(newText)}
              defaultValue={text}
            />

          </View>
          <View style={styles.body5}>
            <Text style={styles.text}>
              Email
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Nhập"
              onChangeText={newText => setText(newText)}
              defaultValue={text}
            />

          </View>
          <View style={styles.body6}>
            <Text style={styles.text}>
              Số điện thoại
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Nhập"
              onChangeText={newText => setText(newText)}
              defaultValue={text}
            />
          </View>


        </View>
        </ScrollView>

      </View>


      {/* Phần footer  */}

      <View style={styles.footer}>
        <TouchableOpacity 
        onPress={()=>{navigation.navigate('Cá nhân')}}
        style={{
          borderWidth: 2,
          width: '70%',
          height: 50,
          borderRadius: 25,
          borderColor: 'brown',
          backgroundColor: 'brown',
          justifyContent: 'center'
        }}>

          <Text style={{
            textAlign: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: 'white'
          }} > Cập nhật </Text>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    width: "100%",
    height: "100%",

    backgroundColor: 'white'
  },
  // Phần đầu 
  head: {
    flexDirection: "row",
    backgroundColor: "#139A43",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height: '8%'
  },
  // phần giữa 
  ava: {
    backgroundColor: 'white',
    flexDirection: 'row-reverse',
    margin: 5
  },
  icon: {
    width: 70,
    height: 70,

  },
  textInput:{
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOpacity: 5,
    shadowRadius: 10,
    elevation: 5
  },
  bodyContent: {
    flex: 10,

  },
  body: {
    flexDirection: 'column',

  },
  body1: {
    flexDirection: 'column',
    backgroundColor: "white",


  },
  body2: {
    flexDirection: 'column',
    backgroundColor: "white",


  },
  body3: {
    flexDirection: 'column',
    backgroundColor: "white",


  },
  body4: {
    flexDirection: 'column',
    backgroundColor: "white",


  },
  body5: {
    flexDirection: 'column',
    backgroundColor: "white",


  },
  body6: {
    flexDirection: 'column',
    backgroundColor: "white",

  },

  text: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black'
  },


  // Phần đít 
  footer: {
    // backgroundColor: "red",
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20
  },



})


export default ChinhSua;
