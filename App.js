const body = document.querySelector("#one")
const city = document.querySelector("#city");
  const btnn = document.querySelector("#submit")
  let deg = document.querySelector(".temprature-degree")
  let desc = document.querySelector(".temprature-description")
  let na = document.querySelector(".name")
// search.addEventListener('click' , console.log(city.value));
 btnn.addEventListener('click' , function(){
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=30a7f816b8f54e91f591b1d4d7c77e39`
    
    fetch(api)
    .then( response => response.json())
    .then(data => {const  degg = data['main']['temp'] ;
                    const dessc =data['weather'][0]['description'];
                  const  naa = data['name']
                  
                  console.log(data);
                  
                 deg.innerText= Math.round(degg-273.15)
                 desc.innerText= dessc
                  na.innerText= naa
                  })
                })

                var today = new Date();
                const currenttime=today.getHours()
                // const currenttime=18
                if(currenttime>=6 && currenttime<18){
                  console.log('Morning')
                  // body.style.backgroundColor="white"
                  // document.body.style.backgroundColor = "red";
                  body.style.backgroundImage = "url('Morning.jpg')";
                  body.style.backgroundPosition = "center";
                  body.style.backgroundSize = "cover";
                  

                }else if(currenttime>=18 && currenttime<=19){
                  console.log("evening")
                  // body.style.backgroundColor="red"
                  body.style.backgroundImage = "url('evening.jpg')";
                  body.style.backgroundPosition = "center";
                  body.style.backgroundSize = "cover";
                  

                }else{
                  console.log("Night")
                  body.style.backgroundImage = "url('Night.jpg')";
                  body.style.backgroundPosition = "center";
                  body.style.backgroundSize = "cover";
                  // body.style.backgroundRepeat = "no-repeat";

                }
