//                          FETCH API
// The Fetch API provides an interface for fetching (sending/receiving) resources.
// It uses Request and Response objects.
// The fetch() methods is used to fetch a resource (data).

//                 let promise = fetch(url,[option])

const URL = "https://cat-fact.herokuapp.com/facts";
let promise = fetch(URL);
console.log(promise);

const getFacts = async()=>{
    console.log("getting data..........");
    let response = await fetch(URL);
    console.log(response.status);//json 
};

















































