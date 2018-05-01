angular.module('crypto',['ngRoute'])
    .controller('firstCtrl',firstCtrl)


function firstCtrl($http)
{
    var first=this;

        url=" https://api.coinmarketcap.com/v1/ticker/"
        $http.get(url).then(function(results)
        {   
            first.crypto = []
            console.log(results.data)
            for(var i=0;i<results.data.length;i++)
            {
                first.crypto.push(results.data[i])
            }
            console.log(first.crypto)

            first.market = ["All","$1 Billion","$100 Million - $1 Billion","$10 Million - $100 Million","$1 Million - $10 Million","100k - $1 Million","0 - 100k"]
            first.price = ["$100+","$1 - $100","0.01 - $1","$0.0001 - $0.01","$0 - $0.0001"]
            first.volume = ["10M+","1M+","100k+","10k+","1k+"]
           
        })

        first.changeSort = function(type){
            first.sorttype = type
        }
        first.bill = function(val)
        {   first.changeSort(market_cap_usd);
            return (val>=100000000 && val<1000000000)
        }
        first.fun = function(name){
            return function(item){ 
            
            // if(name && name != ""){
            //   var arr = name.split("-"); 
            //    if(parseInt(arr[0]) <= item.size &&  parseInt(arr[1]) >= item.size){
            //         return item;
            //     }
            //  }else{
            //     return item
            //  }

                if(name=="a")
                {   
                   
                    return (item>=1000000000);
                }
                else if(name=="b")
                {
                    return (item<1000000000 && item>=100000000)
                }
                else if(name=="c")
                {
                    return (item<100000000 && item>=10000000)
                }
                else if(name=="d")
                {
                    return (item<10000000 && item>=1000000)
                }

            
            }
          }
}