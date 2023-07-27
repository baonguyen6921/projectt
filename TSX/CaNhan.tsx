/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,

} from 'react-native/Libraries/NewAppScreen';



function CaNhan({navigation}): JSX.Element {


  return (
    <SafeAreaView style={styles.container} >
      {/* Phần header  */}
      <View style={styles.head}>


        <TouchableOpacity 
        onPress={()=>{navigation.navigate('Home')}} >
          <Image
            source={require('/FileOfBao/Mobile/BongDaProject/image/ic_back.png')}
            style={{ width: 40, height: 30 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Hồ sơ</Text>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('Sửa')}}>
          <Text style={{ fontSize: 20, color: 'red' }}>Sửa</Text>
          </TouchableOpacity>

      </View>
      {/* Phần body  */}
      <View style={styles.body}>
        <View style={styles.bodyOne}>
          <View style={styles.name}>

            <View><Text style={[styles.text, { fontWeight: '400', fontSize: 25 }]}>Tiến Trần</Text></View>

            <View style={{ flexDirection: 'row', paddingTop: 4 }}>

              <View >
                <Text style={{ color: 'red', fontSize: 20, marginLeft: 10 }}>0</Text>
                <Text style={{ color: 'black', fontSize: 20, }}>Đội</Text>
              </View>

              <View style={{ paddingLeft: 10 }}>
                <Text style={{ color: 'red', fontSize: 20, marginLeft: 25 }}>0</Text>
                <Text style={{ color: 'black', fontSize: 20 }}>Bạn bè</Text>
              </View>

            </View>




          </View>
          <View style={styles.ava}>
            <Image

              source={require('/FileOfBao/Mobile/BongDaProject/image/ic_avatar.png')}
              // source={{uri:'https://tse4.mm.bing.net/th?id=OIP.9g4dkKVAUyciOuDI9_vEYQHaHa&pid=Api&P=0&h=180'}}

              style={styles.icon}
            />
          </View>
        </View>

        <View style={[styles.body2]}>
          <View style={{ padding: 10 }}>
            <Text style={{ color: "black", fontSize: 12 }}>MÔN THỂ THAO YÊU THÍCH</Text>
            <View style={{
              backgroundColor: "white",
              width: 100,
              height: 55,
              borderWidth: 1,
              marginTop: 10,
              marginBottom: 10,



            }}>
              <View style={{justifyContent: 'center', alignItems:'center',padding: 10}}>
                <Image

                  source={require('/FileOfBao/Mobile/BongDaProject/image/ic_football.png')}
                  // source={{uri:'https://tse4.mm.bing.net/th?id=OIP.9g4dkKVAUyciOuDI9_vEYQHaHa&pid=Api&P=0&h=180'}}

                  style={styles.icon2}
                />
                <Text style={{color:'black'}}>Football</Text>
              </View>
            </View>
            <Text style={{ color: "black", fontSize: 12, marginTop: 30 }}>MÔN THỂ THAO YÊU THÍCH</Text>
          </View>

        </View>
        <TouchableOpacity style={styles.body3}>
          <View style={{ justifyContent: "center", padding: 10 }}>
            <Text style={{ color: 'black', fontSize: 15 }}>Lịch sử giao dịch</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.body4}>
          <View style={{ justifyContent: "center", padding: 10 }}>
            <Text style={{ color: 'black', fontSize: 15 }}>Cá nhân hóa</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.body5}>
          <View style={{ justifyContent: "center", padding: 10 }}>
            <Text style={{ color: 'black', fontSize: 15 }}>Chia sẻ</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.body6}>
          <View style={{ justifyContent: "center", padding: 10 }}>
            <Text style={{ color: 'black', fontSize: 15 }}>Ngôn ngữ</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.body7}>
          <View style={{ justifyContent: "center", padding: 10 }}>
            <Text style={{ color: 'black', fontSize: 15 }}>Đổi mật khẩu</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.body8}>
          <View style={{ justifyContent: "center", padding: 10 }}>
            <Text style={{ color: 'red', fontSize: 15 }}>Xóa tài khoản</Text>
          </View>
        </TouchableOpacity>

      </View>
      {/* Phần footer  */}
      <View style={styles.footer}>
        <View >
          <TouchableOpacity style={{ flexDirection: 'row', }}>
            <Image

              source={require('/FileOfBao/Mobile/BongDaProject/image/ic_exit.png')}
              // source={{uri:'https://tse4.mm.bing.net/th?id=OIP.9g4dkKVAUyciOuDI9_vEYQHaHa&pid=Api&P=0&h=180'}}

              style={{ width: 30, height: 30, }}
            />
            <Text style={{ color: 'black', fontSize: 20, paddingLeft: 10 }}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-between"
  },
  // Phần head 
  head: {
    flexDirection: "row",
    backgroundColor: "#139A43",
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  // phần body 
  body: {
    flexDirection: 'column',
    backgroundColor: "#D9D9D9",
    flex: 8,
  },
  icon: {
    width: 80,
    height: 80,

  },
  icon2: {
    width: 20,
    height: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'black',

  },

  bodyOne: {
    flex: 2.5,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,

  },
  name: {
    flex: 1,
    // backgroundColor: 'pink',
    flexDirection: 'column',



  },
  ava: {
    flex: 1,
    // backgroundColor: 'purple',
    flexDirection: 'row-reverse',
    margin: 1
  },

  body2: {
    flex: 3.5,
    backgroundColor: "#D9D9D9",
    margin: 1


  },
  body3: {
    flex: 1.4,
    backgroundColor: "white",
    flexDirection: "row",
    margin: 1


  },
  body4: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    margin: 1
  },
  body5: {
    flex: 1.4,
    backgroundColor: "white",
    flexDirection: "row",
    margin: 1
  },
  body6: {
    flex: 1.4,
    backgroundColor: "white",
    flexDirection: "row",
    margin: 1
  },
  body7: {
    flex: 1.4,
    backgroundColor: "white",
    flexDirection: "row",
    margin: 1
  },
  body8: {
    flex: 1.4,
    backgroundColor: "white",
    flexDirection: "row",
    margin: 1
  },
  // Phần footer 
  footer: {
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  }



});

export default CaNhan;
