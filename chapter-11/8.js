// nesting

for(let i = 0;i<5;i++){
    let str = "";
    for(let j = 0;j<5;j++){
        console.log(j);
        str  = str +j;
    }
    console.log(i,str);
}