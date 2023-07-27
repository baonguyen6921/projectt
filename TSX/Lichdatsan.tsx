import React, {useEffect, useState} from 'react';
// import {createAppContainer} from 'react-navigation';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { Dropdown } from 'react-native-element-dropdown';
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
// import NavigationLogin from './NavigationLogin';

import CheckBox from '@react-native-community/checkbox';
// import CalendarPicker from 'react-native-calendar-picker';


function Lichdatsan({navigation}): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const [isSelected, setSelection] = useState(false);
  
  return (
    <View style={styles.container}>
      {/* {Headers} */}
      <View style={styles.top}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={()=>{navigation.navigate('Xem sân')}}>
          <Image
            source={require('/FileOfBao/Mobile/BongDaProject/image/ic_back.png')}
            style={{marginTop: 5, height: 30, width: 30}}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 19,
            marginLeft: 130,
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          Lịch
        </Text>
      </View>

      {/* {body} */}
      <View style={[styles.bottom,{flexDirection : 'row'}]}>

        {/* {'Lịch'} */}
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={{ 
          marginLeft : 5, width: 130 , 
          height : 46 , 
          marginTop : 10 , 
          flexDirection : 'row' ,
          backgroundColor: 'white', 
          borderRadius:25,
          shadowRadius: 10,
          shadowOpacity: 5,
          elevation: 5,
        }}>
          <Text style={{ fontWeight: '800', fontSize: 15 , marginTop : 13 , marginLeft :7 }}>
            27/07/2023
          </Text>
          <Image source={require('/FileOfBao/Mobile/BongDaProject/image/ic_calendar.png')}
          style={{height: 17, width: 18 , marginLeft : 12 , marginTop : 14 }}/>
          
        </TouchableOpacity>
        <Modal visible={showModal} animationType="fade">
          <Calendar
            style={{borderRadius: 10, elevation: 4, margin: 40}}
            onDayPress={date => {
              console.log(date);
              setShowModal(false);
            }}
            onMonthChange={() => {}}
            initialDate="2023-07-27"
            minDate="2023-01-01"
            maxDate="2023-12-31"
            hideExtraDays={true}
            //    disableArrowLeft={true}
            //    disableArrowRight={true}

            markingType={'multi-dot'}
            markedDates={{
              '2023-07-27': {
                dots: [{color: 'red'}, {color: 'green'}],
                selected: true,
                selectedColor: 'lightblue',
                selectedTextColor: 'black',
              },
              '2023-07-30': {dots: [{color: 'orange'}]},
            }}
          />
        </Modal>

        {/* {Choose list Football} */}
<TouchableOpacity
          
          style={{
           
            marginLeft : 5,
            width: 130 , 
            height : 46 , 
            marginTop : 10,
            backgroundColor: 'white', 
          borderRadius:25,
          shadowRadius: 10,
          shadowOpacity: 5,
          elevation: 5,
            }}>
          <Text style={{ fontWeight: '800', fontSize: 18 , marginTop : 11 , marginLeft :12 }}>
            Football
          </Text>
          <Image source={require('/FileOfBao/Mobile/BongDaProject/image/ic_down-arrow.png')}
          style={{height: 18, width: 18 , marginLeft : 98 , marginTop : -20 }}/>
        </TouchableOpacity>

        {/* {Choose 5v5} */}
        <TouchableOpacity          
          style={{
          marginLeft : 5, 
          width: 120 , 
          height : 46 , 
          marginTop : 10,
          backgroundColor: 'white', 
          borderRadius:25,
          shadowRadius: 10,
          shadowOpacity: 5,
          elevation: 5,}}>
          <Text style={{ fontWeight: 'bold', fontSize: 18  , marginTop : 11 , marginLeft :12 }}>
            5v5
          </Text>
          <Image source={require('/FileOfBao/Mobile/BongDaProject/image/ic_down-arrow.png')}
          style={{height: 18, width: 18 , marginLeft : 98 , marginTop : -20 }}/>
        </TouchableOpacity>
        
      </View>
      

      <View style={{
        height:50,
        backgroundColor: 'white', 
          borderRadius:25,
          shadowRadius: 10,
          shadowOpacity: 5,
          elevation: 5,
          alignItems:'center',
             justifyContent:'center',}}>
            <Text style={{ 
             
             fontWeight : '600',
             textAlign:'center'
             
            }}>
              Sân MU
            </Text>

      </View>
      
      <View style={{height : 500 }}>
          
      </View>
      {/* {End} */}
      <View style={styles.bottom2}>
      <TouchableOpacity 
      onPress={()=>{navigation.navigate('Xác nhận')}} 
      style={styles.buttonLogin}>
            <Text style={{textAlign: 'center',
        fontWeight: 'bold',
        fontSize:20,   
        color:'white'   }}>
              Đặt ngay 
            </Text>
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
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 70,
  },
  bottom: {
    // backgroundColor: 'red',
    height: 60,
    
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
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '80%',
    height: 40,
    borderRadius: 25,
    alignItems:'center',
    justifyContent:'center',
    shadowRadius: 10,
    shadowOpacity: 5,
    elevation: 5,
    backgroundColor:'green'
  },
  icon: {
    // backgroundColor : 'pink' ,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

});

export default Lichdatsan;