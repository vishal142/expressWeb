const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const data_hide = document.querySelector('.middle_layer');
const getInfo = async(event)=>{
   
event.preventDefault();
let cityVal = cityName.value;
//console.log(cityVal);
if(cityVal===""){
    city_name.innerText =`Plz write the city name before search`;
    data_hide.classList.add('data_hide');

}else{
    try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=cd26e448fa1837637747cd033df2763e`;
        const responce = await fetch(url);
        const data = await responce.json();
        const arrData = [data];
        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
        temp_real_val.innerText = arrData[0].main.temp;
        const tempMood = arrData[0].weather[0].main;
        if(tempMood=='Clear'){
            temp_status.innerHTML ="<i class='fas fa-sub' style='color:#eccc68'></li>";
        }else if(tempMood=='Clouds'){
            temp_status.innerHTML ="<i class='fas fa-cloud' style='color:#f1f2f6'></li>";
        }else if(tempMood=='Rain'){
            temp_status.innerHTML ="<i class='fas fa-cloud-rain' style='color:#a4b0be'></li>";
        }else{
            temp_status.innerHTML ="<i class='fas fa-cloud' style='color:#f1f2f6'></li>";
        }

        data_hide.classList.remove('data_hide');
        //console.log(arrData[0].weather[0].main);


    }catch{
        city_name.innerText = `Plz enter the city name properly`;
        data_hide.classList.add('data_hide');

    }
    


}

}
submitBtn.addEventListener('click',getInfo);