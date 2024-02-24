const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


// const getFacts = async()=>{
//     console.log("gettig data..............");
//     let response = await fetch(URL);
//     console.log(response);//JSON format
//     let data = await response.json();
//     factPara.innerText = data(0).text;



// };
// btn.addEventListener('click', () => {
//     //console.log("Button Clicked!");
//     getFacts();
// });
function fetFacts(){
    fetch(URL).then((Response)=>{
        return Response.json();

    }).then((data)=>{
        console.log(data);
        factPara.innerText = data(0).text;
    })
}
// btn.addEventListener("click", getFacts);



























