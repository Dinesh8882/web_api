let tempr = document.querySelector("#box")
let weatherQu = document.querySelector("#weatherClear")
let input = document.querySelector("#input")
let search = document.querySelector(".ri-search-2-line")
let getName = document.querySelector("#city-name")

search.addEventListener("click", function () {
    const promis = async () => {
        let tem;
        let searchValue = input.value;
        const apiKey = "2efbf657e604341399565f5961b19fb1";

        try {
            let respons = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=metric`);
            let data = await respons.json();
            tem = "Temp : " + data.main.temp + "°c";
            weatherQu.innerHTML = data.weather[0].main;
            getName.innerHTML = "City Name : " + input.value;
            tempr.innerHTML = tem;
            input.value = ""
        } catch (err) {
            if (input.value === "") {
                tempr.innerHTML = "Enter City Name"
                getName.innerHTML = ""
                weatherQu.innerHTML = ""
            }
            else {
                tempr.innerHTML = "Wrong search.."
                getName.innerHTML = ""
                weatherQu.innerHTML = ""
                input.value =""
            }
        }
    }
    promis();
})

