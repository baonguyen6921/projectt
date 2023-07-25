const getStockInfo = (symbol) => {
return fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=J8771XZQAY2LT3GN.json`)
        .then(response => response.json())
        .then(json => {
            const globalQuote = json['Global Quote']
            const result = {
                'stockPrice': globalQuote['05. price'],
                'changePercent': globalQuote['10. change percent'],
            }
            return result;
        })
        .catch(error => {
            console.log(error);
        });
};

export default getStockInfo;