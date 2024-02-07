//for a given array with prices of 5 items -> [250,645,300,900,50]
//all items have an offer of 10% off on them .
//change the array to store fianl price after applying offer
let items= [250,645,300,900,50];
console.log(items);
console.log("total number of items are");
console.log(items.length);

console.log("after final 10 % discount in all the products the pricing will be");
for(i= 0;i<5;i++){
    let offer = (items[i]*9)/10;
}
console.log(offer);

