//ARRAY METHODS
//        concat()                //joins multiple arrays & returns result
//        unshifts()              //add to start                    works like push
//        shift()                 //delete form start & return      works like pop

let marvel_heroes = ["thor","spiderman","ironman"];
let dc_heroes = ["superman","batman"];
let indian_heroes = ["krish","saktiman"]


marvel_heroes.unshift("wonder woman");//pushed to marvel_heroes in front side




dc_heroes.shift();//pops from front side of dc_heroes





let heroes = marvel_heroes.concat(dc_heroes,indian_heroes);
console.log(heroes);





