function getWeather(){

    
    var city = document.getElementById('city').value
    var ApiKey = '48f7ba588cd340af0085f94658a23385'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`)
    .then(response => response.json()).then((res)=>{

       console.log(res)
       if(res.cod==200)
        {
            document.getElementById('temperature').innerHTML = `Temperature ${res.main.temp}<sup>°C</sup>`
            document.getElementById('humidity').innerHTML = `Humidity ${res.main.humidity}%`  
            document.getElementById('wind').innerHTML = `Wind ${res.wind.speed}Km/h`
            document.getElementById("not-found").style.display='none';
            document.getElementById('temperature').style.display='block'
            document.getElementById('humidity').style.display='block'
            document.getElementById('wind').style.display='block'

            
        }
        else if(res.cod==404)
        {
            document.getElementById('temperature').style.display='none'
            document.getElementById('humidity').style.display='none'
            document.getElementById('wind').style.display='none'
            document.getElementById("not-found").style.display='block';
            document.getElementById("not-found-message").innerHTML = `${res.message}`;
        }
           
             
            
        
        
    })
}