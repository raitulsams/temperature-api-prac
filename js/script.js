// const API_KEY = '46ad7457603b9b0104e633e78cd60e16'
let API_KEY = 'fb99466cce88adfaf9538b6008776c58'
const searchTemp = () => {
    const city = document.getElementById('city').value
    // console.log(city)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`


    fetch(url)
        .then(results => results.json())
        .then(data => displayTemp(data))

    const setInnerText = (id, text) => {
        document.getElementById(id).innerText = text
    }
    const displayTemp = displayData => {
        setInnerText('city-name', displayData.name)
        setInnerText('temperature', displayData.main.temp)
        setInnerText('condition', displayData.weather[0].main)

        const url = `http://openweathermap.org/img/wn/${displayData.weather[0].icon}@2x.png`

        const imgIcon = document.getElementById('img-icon')
        imgIcon.setAttribute('src', url)
    }
}