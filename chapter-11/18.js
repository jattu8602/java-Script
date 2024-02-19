function api(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("weather data");
        resolve(200);
       },2000)
    });
};
async function getWeatherData(){
    await api();
    await api();
}