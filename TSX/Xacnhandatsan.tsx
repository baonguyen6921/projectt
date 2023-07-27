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
  SafeAreaView,
  Modal,
  // checkbox
} from 'react-native';


function Xacnhandatsan({ navigation }): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      {/* {Headers} */}
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Home') }}
          style={{
            flexDirection: 'row',
            // marginTop: 12,
          }}>
          <Image
            source={require('/FileOfBao/Mobile/BongDaProject/image/ic_back.png')}
            style={{ height: 30, width: 30 }}
          />

        </TouchableOpacity>

        <Text
          style={{

            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Xác nhận đặt sân
        </Text>

        <View style={{ padding: 10 }}></View>
      </View>

      {/* {body} */}
      <View style={styles.bottom}>
        <View style={{ backgroundColor: '#D9D9D9', height: 35 }}>
          <Text style={{ fontWeight: '800', marginLeft: 13, marginTop: 7 }}>
            ĐỊA ĐIỂM
          </Text>
        </View>
        <View style={{ height: 85 }}>
          <Text
            style={{
              fontWeight: 'normal',
              fontSize: 25,
              marginLeft: 10,
              marginTop: 10,
            }}>
            Old Trafford
          </Text>
          <Text style={{ marginLeft: 10, marginTop: 6 }}>
            1143 Binh Quoi , England
          </Text>
        </View>
        <View style={{ backgroundColor: '#D9D9D9', height: 35 }}>
          <Text style={{ fontWeight: '800', marginLeft: 13, marginTop: 7 }}>
            CHI TIẾT SÂN ĐẶT
          </Text>
        </View>

        <View style={{ marginTop: 10, height: 125, marginLeft: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 15 }}>MÔN THỂ THAO</Text>
            <Text style={styles.title}>Football</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, width: 110 }}>CỠ SÂN</Text>
            <Text style={styles.title}>5v5</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, width: 110 }}>NGÀY</Text>
            <Text style={styles.title}>August 27,2023</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, width: 110 }}>GIỜ</Text>
            <Text style={styles.title}>23:00-23:30</Text>
          </View>
        </View>

        <View style={{ backgroundColor: '#D9D9D9', height: 35 }}>
          <Text style={{ fontWeight: '800', marginLeft: 13, marginTop: 7 }}>
            THANH TOÁN
          </Text>
        </View>

        <View style={{ height: 350, flexDirection: 'row' }}>
          <Text style={{ fontWeight: '800', marginLeft: 13, marginTop: 18 }}>
            TIỀN CỌC
          </Text>
          <TextInput
            style={{
              height: 50,
              marginLeft: -70,
              marginTop: 40,
              width: 180,
              padding: 10,
              borderRadius: 25,
              fontWeight: 'bold',
              backgroundColor: '#D9D9D9',
            }}
            placeholder={'0 vnd'}
          />
          <Text style={{ fontWeight: '800', marginLeft: 13, marginTop: 18 }}>
            TỔNG PHÍ
          </Text>
          <TextInput
            style={{
              height: 50,
              marginLeft: -70,
              marginTop: 40,
              width: 180,
              padding: 10,
              borderRadius: 25,
              fontWeight: 'bold',
              backgroundColor: '#D9D9D9',
            }}
            placeholder={'0 vnd'}
          />
        </View>

      </View>

      <View style={styles.footer}>


        <TouchableOpacity
          onPress={() => { navigation.navigate('Lịch') }}
          style={styles.btnFooter}>

          <Text style={styles.txtFooter} > Xác nhận đặt sân </Text>

        </TouchableOpacity>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',

    width: '100%',
    height: '100%',
  },

  top: {
    backgroundColor: '#139A43',
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
  },
  bottom: {
    flex: 6,
    // backgroundColor: 'red',
    margin: 10
  },

  bottom1: {
    backgroundColor: '#D9D9D9',
    height: 40,
  },
  bottom2: {
    // backgroundColor : 'black' ,
    height: 100,
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    // backgroundColor: 'blue',
    marginLeft: 50,
    alignItems: 'center',
    fontSize: 18,
  },
  image: {
    height: 100,
  },
  input: {
    marginHorizontal: 35,
    marginVertical: 10,
    fontSize: 18,
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    fontWeight: 'bold',
    backgroundColor: '#D9D9D9',
  },
  buttonLogin: {
    height: 55,
    width: 370,
    marginHorizontal: 20,
    marinTop: 26,
    fontWeight: 'bold',
    backgroundColor: '#139A43',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  icon: {
    // backgroundColor : 'pink' ,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  footer: {
    flex: 1.5,
    // backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnFooter: {

    width: '80%',
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowOpacity: 5,
    elevation: 5,
    backgroundColor: 'green'
  },
  txtFooter: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
});

export default Xacnhandatsan;
