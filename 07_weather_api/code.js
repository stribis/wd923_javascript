const apiKey = 'af1eb7ff29c464bd26db09fc2c06ca09'

document.querySelector('#query-form').addEventListener('submit', e => {
  e.preventDefault()
  const userInput = document.querySelector('#city').value
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=metric`
  getData(apiUrl)
})

async function getData (url) {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  displayData (data)
}


function displayData (data) {
  console.log(data)

  // document.querySelector('.container').innerHTML = ``
  // Display Temperature
  if (document.querySelector('.weather-info') ) {
    document.querySelector('.weather-info').remove()
  }

  const weatherInfo = document.createElement('div')
  weatherInfo.classList.add('weather-info')
  const template = `
  <p class="plain top">It is:</p>
  <div class="display">${data.main.temp} °C</div>
  <p class="plain bottom">in ${data.name}</p>
  <p class="feels">Feels like ${data.main.feels_like}°C</p>
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">
  <p class="description">${data.weather[0].description}</p>
  <div class="misc">
    <span>
      <h6 class="bold">Visibility</h6>
      <i class="fa-regular fa-eye"></i>
      <p class="info">${ data.visibility < 2000 ? 'Bad' : 'Good' }</p>
    </span>
    <span>
      <h6 class="bold">Wind</h6>
      <i class="fa-solid fa-chevron-up"></i>
      <p class="info">${data.wind.speed}</p>
    </span>
    <span>
      <h6 class="bold">Humidity</h6>
      <i class="fa-solid fa-droplet"></i>
      <p class="info">${data.main.humidity}</p>
    </span>
    
    
  </div>
  `
  weatherInfo.innerHTML = template

  document.querySelector('.container').appendChild(weatherInfo)

}