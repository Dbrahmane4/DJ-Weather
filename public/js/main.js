 const cityName = document.getElementById('cityName');
 const submitBtn = document.getElementById('submitBtn');

 const city_name = document.getElementById('city_name');

 const tempRealData = document.getElementById('tempRealData');
 const temp_status = document.getElementById('temp_status');

 const dataHide = document.querySelector('.middle_layer')

 const getInfo = async(event) => {
     event.preventDefault();
     let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = `Plzz Enter the city name`;
        dataHide.classList.add('data_hide');
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

                city_name.innerText = `${arrData[0].name} ${arrData[0].sys.country}`
                tempRealData.innerText = arrData[0].main.temp;

                const tempMood = arrData[0].weather[0].main;

                if(tempMood == "Sunny"){
                    temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>";
                }else if(tempMood == "Clouds"){
                    temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #ecf0f1;'></i>";
                }else if(tempMood == "Haze"){
                    temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #ecf0f1'></i>";
                }
                else{
                    temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>";
                }

                dataHide.classList.remove('data_hide');


        }catch{
            city_name.innerText = `Plzz Enter the city name properly`;
            dataHide.classList.add('data_hide');
        }
    }

}

 submitBtn.addEventListener("click", getInfo);