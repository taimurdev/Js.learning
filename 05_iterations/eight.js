const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// now in arrow function

// const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0 )



// console.log(myTotal);


const shoppingCart = [

    { itemName: 'java course',
      price: 6700  
    },
    { itemName: 'python course',
      price: 4678  
    },
    { itemName: 'mobile app course',
      price: 8900   
    },
    { itemName: 'js course',
      price: 4500  
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);