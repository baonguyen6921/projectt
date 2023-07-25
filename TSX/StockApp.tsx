import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    ScrollView,
    StyleSheet,
    Text, TextInput, TouchableOpacity, View
} from 'react-native';
import StockButton from './components/StockButton';
import getStockInfo from './apis/api';



function StockApp(): JSX.Element {
    const [stockName, setStockName] = useState('HELLO')
    const [stockCode, setStockCode] = useState('HI')
    const [price, setPrice] = useState('')
    const [changePercent, setChangePercent] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getStockInfo(stockCode).then(data => {
            setPrice(data.stockPrice)
            setChangePercent(data.changePercent)
            setIsLoading(false)
        }).catch(error =>{
            setIsLoading(false)
        })
     },[])
    
    useEffect(() => {
        setIsLoading(true)
        getStockInfo(stockCode).then(data => {
            setPrice(data.stockPrice)
            setChangePercent(data.changePercent)
            setIsLoading(false)
        }).catch(error =>{
            setIsLoading(false)
        })
     },[stockCode])

    const handleChooseStock = (stockName, stockCode) => {
        // // request api
        // // alert(stockName + '   ' + stockCode)
        setStockName(stockName)
        setStockCode(stockCode)
    
    }

    const array = [
        { stockCode: 'AAPL', stockName: 'Apple Inc.' },
        { stockCode: 'MSFT', stockName: 'Microsoft Corporation' },
        { stockCode: 'GOOG', stockName: 'Alphabet Inc.' },
        { stockCode: 'AMZN', stockName: 'Amazon.com, Inc.' },
        { stockCode: 'NVDA', stockName: 'NVIDIA Corporation' },
        { stockCode: 'PPT', stockName: 'CTCP Petro Times' },
        { stockCode: 'FLC', stockName: 'FLC' },
        { stockCode: 'BCC', stockName: 'CTCP Xi măng Bỉm Sơn' },
    ]

    const renderRow = (data: [Object]) => {
        let rows = [] // de chua so luong dong
        let screenW = Dimensions.get('window').width //set độ rộng của button
        let buttonW = (screenW - 4 * 10) / 3 // set tỉ lệ giữa các button
        for (let i = 0; i < data.length; i += 3) {
            let rowItems = []
            let j = 0
            while (i + j < data.length && j < 3) {
                rowItems.push(<StockButton
                    style={{width: buttonW}}
                    key={i+j} 
                    stockName={data[i + j].stockName} 
                    stockCode={data[i + j].stockCode} 
                    pressButton={handleChooseStock} />)
                j++
            }

            rows.push(<View  key={i}  style={styles.bottomItemView}>{rowItems}</View>)
        }

        return rows
    }

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.stockNameText}>{stockName}</Text>
                <Text style={styles.stockCodeText}>{stockCode}</Text>
                <Text style={styles.stockChangePercentText}>{price} </Text>
                <Text style={styles.stockChangePercentText}>{changePercent}</Text>
            </View>
            <View style={styles.bottomView}>
                <ScrollView>
                {
                    renderRow(array)
                }
                </ScrollView>
                
            </View>
            {
                isLoading ?(
                    <View style={{position:'absolute',top:0, left:0, right:0,bottom:0, justifyContent: 'center', alignContent:'center'}}>
                        <ActivityIndicator size='large' color='red' />
                    </View>
                ):null
            }
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topView: {
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    bottomView: {
        flex: 1,
        backgroundColor: 'pink',
        paddingHorizontal: 10,
    },
    bottomItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    stockNameText: {
        fontSize: 50,
    },
    stockCodeText: {
        fontSize: 80,
    },
    stockChangePercentText: {
        fontSize: 50,
        color: 'red',
        textAlign: 'center'
    },
});

export default StockApp;