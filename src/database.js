/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// The categories are Doraemon, FRobo, JPets, and KHeart


// List of product objects
export const products = [
    {
        id: 1,
        series: "Doraemon",
        name: "Doraemon Plush Toy Nobita - 25cm",
        salePrice: "$25.00",
        image: "./assets/Nobita.png",
        description: "A cute Doraemon plush toy featuring Nobita, 25cm in size.",
    },
   
    {
        id: 2,
        series: "Doraemon",
        name: "Doraemon Plush Toy Doraemi - 25cm",
        salePrice: "$25.00",
        image: "./assets/Doraemi.png",
        description: "Adorable Doraemi plush toy, 25cm in size.",
    },
    {
        id: 3,
        series: "Doraemon",
        name: "Shizuka Plushie - 20cm",
        salePrice: "$25.00",
        image: "./assets/Xuka.png",
        description: "A soft plushie of Shizuka, 20cm in size.",
    },
    {
        id: 4,
        series: "Doraemon",
        name: "Suneo Plushie - 20cm",
        salePrice: "$20.00",
        image: "./assets/Suneo.png",
        description: "A plush toy of Suneo, 20cm in size, perfect for fans.",
        regularPrice: "$30.00", // Sale price
    },
    {
        id: 5,
        series: "Doraemon",
        name: "Doraemon Plushie - 20cm",
        salePrice: "$25.00",
        image: "./assets/Doraemon.png",
        description: "A cuddly Doraemon plushie, 20cm in size.",
        regularPrice: "$50.00", // Sale price
    },
    {
        id: 6,
        series: "Doraemon",
        name: "Jaian Plushie - 20cm",
        salePrice: "$20.00",
        image: "./assets/Jaian.png",
        description: "A plush toy of Jaian, 20cm in size.",
    },
    {
        id: 7,
        series: "FRobo",
        name: "PineApple FruitRobo - 15cm",
        salePrice: "$25.00",
        image: "./assets/Pineapple.png",
        description: "A cute PineApple FruitRobo plush toy, 15cm in size.",
        reviews: 5 // 5-star reviews
    },
    {
        id: 8,
        series: "FRobo",
        name: "Mini Orange FruitRobo - 20cm",
        salePrice: "$25.00",
        image: "./assets/Orange.png",
        description: "A mini Orange FruitRobo plush toy, 20cm in size.",
        reviews: 5 // 5-star reviews
    },
    {
        id: 9,
        series: "FRobo",
        name: "Baby Grape FruitRobo - 15cm",
        salePrice: "$25.00",
        image: "./assets/Grape.png",
        description: "A baby Grape FruitRobo plush toy, 15cm in size.",
        reviews: 5 // 5-star reviews
    },
    {
        id: 10,
        series: "FRobo",
        name: "Baby Strawberry FruitRobo - 15cm",
        salePrice: "$25.00",
        image: "./assets/Strawberry.png",
        description: "A baby Strawberry FruitRobo plush toy, 15cm in size.",
        reviews: 5 // 5-star reviews
    },
    {
        id: 11,
        series: "FRobo",
        name: "Baby Peach FruitRobo - 15cm",
        salePrice: "$25.00",
        image: "./assets/Peach.png",
        description: "A baby Peach FruitRobo plush toy, 15cm in size.",
        reviews: 5 // 5-star reviews
    },
    {
        id: 12,
        series: "JPets",
        name: "Ruby Plushie - 25cm",
        salePrice: "$25.00",
        image: "./assets/Ruby.png",
        description: "A cute and cuddly Ruby Plushie, 25cm in size.",
    },
    {
        id: 13,
        series: "JPets",
        name: "Greenbear Plushie - 25cm",
        salePrice: "$25.00",
        image: "./assets/Green.png",
        description: "Adorable Greenbear Plushie, 25cm in size.",
    },
    {
        id: 14,
        series: "JPets",
        name: "White Bear - 20cm",
        salePrice: "$25.00",
        image: "./assets/White.png",
        description: "A soft and fluffy White Bear plushie, 20cm in size.",
    },
    {
        id: 15,
        series: "JPets",
        name: "Pink Bear - 17cm",
        salePrice: "$20.00",
        regularPrice: "$40.00",  // Sale price
        image: "./assets/Pink.png",
        description: "A cute Pink Bear plushie, 17cm in size.",
        reviews: 5 // 5-star reviews
    },
    {
        id: 16,
        series: "JPets",
        name: "Jewelpet Adorable Mimi - 20cm",
        salePrice: "$25.00",
        regularPrice: "$50.00",  // Sale price
        image: "./assets/cat.png",
        description: "Adorable Jewelpet Mimi, 20cm in size.",
    },
    {
        id: 17,
        series: "JPets",
        name: "BlackFox Plushie - 20cm",
        salePrice: "$20.00",
        image: "./assets/BlackFox.png",
        description: "A sleek and cute BlackFox plushie, 20cm in size.",
        reviews: 5 // 5-star reviews
    },
    {
        id: 18,
        series: "KHeart",
        name: "Donald Duck Plushie - 25cm",
        salePrice: "$25.00",
        image: "./assets/Donald.png",
        description: "A cute and cuddly Donald Duck Plushie, 25cm in size.",
    },
    {
        id: 19,
        series: "KHeart",
        name: "Mickey Plushie - 25cm",
        salePrice: "$25.00",
        image: "./assets/mickey.png",
        description: "A soft and adorable Mickey Mouse Plushie, 25cm in size.",
    },
    {
        id: 20,
        series: "KHeart",
        name: "Goofy - Kingdom Hearts - 20cm",
        salePrice: "$25.00",
        image: "./assets/Goofy.png",
        description: "A charming Goofy plush toy from Kingdom Hearts, 20cm in size.",
    },
    {
        id: 21,
        series: "KHeart",
        name: "Kairi Kingdom Hearts - 17cm",
        salePrice: "$25.00",
        regularPrice: "$50.00",  // Sale price
        image: "./assets/Kairi.png",
        description: "A cute Kairi plush toy from Kingdom Hearts, 17cm in size.",
        reviews: 5 // 5-star reviews
    },
    {
        id: 22,
        series: "KHeart",
        name: "Aqua Kingdom Hearts - 20cm",
        salePrice: "$25.00",
        regularPrice: "$50.00",  // Sale price
        image: "./assets/Aqua.png",
        description: "A stylish Aqua plush toy from Kingdom Hearts, 20cm in size.",
    },
    {
        id: 23,
        series: "KHeart",
        name: "Sora Kingdom Hearts - 20cm",
        salePrice: "$25.00",
        regularPrice: "$50.00",  // Sale price
        image: "./assets/Sora.png",
        description: "A heroic Sora plush toy from Kingdom Hearts, 20cm in size.",
    },
    {
        id: 24,
        series: "FRobo",
        name: "Fruit Robo Yellow - 17cm",
        salePrice: "$20.00",
        regularPrice: "$25.00",  // Sale price
        image: "./assets/yellow.jpeg",
        description: "A bright and cheerful Fruit Robo Yellow plush toy, 17cm in size.",
        reviews: 5 // 5-star reviews
    }
];


// feedback database that holds the feedbacks sent through index.html form
export let ctm_feedback = [
    {
        name: "Josh",
        email: "joshkun@gamil.com",
        message: "The website is great!"
    },
    {
        name: "Gordino",
        email: "Gogo@gmail.com",
        message: "I think you guys can add more merchandise on modern anime series."
    },
    {
        name: "Jolyne",
        email: "jojo@gmail.com",
        message: "Hope you guys can deliver to prison"
    }
];

export let DoraemonS = [

];


export let JewelpetS = [

];
  
export let KingdomHeartS = [

];
  
export let FruitRoboS = [

];
  

const findObjectByValue = (obj) => {
    for (let index = 0; index < obj.length; index++) {
        if (obj[index].series == 'Doraemon') {
            DoraemonS.push(obj[index]);
        }
        else if (obj[index].series == 'JPets') {
            JewelpetS.push(obj[index]);
        }
        else if (obj[index].series == 'KHeart') {
            KingdomHeartS.push(obj[index]);
        }
        else if (obj[index].series == 'FRobo') {
            FruitRoboS.push(obj[index]);
        }
    };
  };
  findObjectByValue(products)
//   console.log(FruitRoboS); 

// Add functionL Add the item with corresponding ID to the cart
// var cart = [];
// function addToCart(Id) {
//     cart.push(products.find((products) => products.id === Id));
// }




