window.addEventListener("load",()=>{

    var timezonediv=document.querySelector('.location-timezone');
    var description =document.querySelector('.description')
    var degree=document.querySelector('.degree')
    var imgitem=document.querySelector('img')
    var temperaturesection =document.querySelector('.temperature')
    var temperatureSpan=document.querySelector('.degree-section span')
    let lat;
    let long;
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position=>{
            console.log(position.coords.latitude);
            lat=position.coords.latitude;
            long=position.coords.longitude;
            // const api=`https://api.ambeedata.com/weather/latest/by-lat-lng?lat=${lat}&lng=${long}`
            const api=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&units=metric&appid=387a338f72ddc3cc2e11dba9234edfc5`

            console.log(api);
/*-------------------------------*/
fetch(api)
.then(response=>{
    return response.json();
})
.then(data=>{
    console.log(data.current.temp);
    timezonediv.innerHTML=data.timezone;
    description.innerHTML= data.current.weather[0].description;
    degree.textContent=data.current.temp
    imgitem.src=`http://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;

    temperaturesection.addEventListener("click",()=>{
        if(temperatureSpan.textContent==="F")
        {
            temperatureSpan.textContent="C"
            degree.textContent=((degree.textContent -32)*(5/9)).toFixed(2);

        }
        else{
            temperatureSpan.textContent="F"
            degree.textContent=((data.current.temp *(9/5))+32).toFixed(2);

        }
        
    });
})

            /*-----------------------*/
        })
    }

});