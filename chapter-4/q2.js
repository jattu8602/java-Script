//for a given array with prices of 5 items -> [250,645,300,900,50]
//all items have an offer of 10% off on them .
//change the array to store fianl price after applying offer
let items= [250,645,300,900,50];
console.log(items);
console.log("total number of items are");
console.log(items.length);
let i = 0;
for(let val of items){
    console.log('value at index',i+1, "=" ,val);
    let offer = val/10;
    items[i] = items[i]-offer;
    i++;


}
console.log("new offer price is:-");
console.log(items);

