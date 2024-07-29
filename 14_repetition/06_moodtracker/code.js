const weatherApi = 'af1eb7ff29c464bd26db09fc2c06ca09'
const aqiApi = '8a602c959fee444a88e80b91eda4dcbb9959d5e8'
let lat, lon
let air, weather
let moods = []

function setup () {
  // Remove Canvas
  noCanvas()
  // Capture video from webcam
  const video = createCapture(VIDEO)
  video.parent('main-container')
  video.size(320, 240)

  loadMoods()

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition( position => {
      lat = position.coords.latitude
      lon = position.coords.longitude
  
      getWeatherData()
      getAQIData()
    })
  } else {
    console.error('browser does not support geolocation')
  }

  document.querySelector('.submit-btn').addEventListener('click', e => {
    e.preventDefault()
    const mood = document.querySelector('#mood').value

    video.loadPixels()
    const image64 = video.canvas.toDataURL()

    const package = {
      aqi: air,
      weather: weather,
      mood: mood,
      image: image64
    }
    moods.push(package)
    localStorage.setItem('moods', JSON.stringify(moods))

    document.querySelector('.saved-moods').innerHTML = ''
    showMoods ()
  })
}


async function getWeatherData() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApi}&units=metric`)
  const weatherData = await response.json()

  // console.log(weatherData)
  const ul = document.createElement('ul')
  const template = `
    <li class="temp">${weatherData.main.temp}</li>
    <li class="description">${weatherData.weather[0].description}</li>
    <li class="icon">${weatherData.weather[0].icon}</li>
  `
  ul.innerHTML = template
  document.querySelector('#main-container').append(ul)

  weather = weatherData
}


async function getAQIData () {
  const response = await fetch(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=${aqiApi}`)
  const aqiData = await response.json()
  const aqi = aqiData.data.aqi
  // console.log(aqi)
  const div = document.createElement('div')
  
  if ( aqi < 51 ){
    div.classList.add('green')
  } else if ( aqi > 50 && aqi < 101 ){
    div.classList.add('yellow')
  } else if ( aqi > 100 && aqi < 151 ){
    div.classList.add('orange')
  } else if ( aqi > 150 && aqi < 201 ){
    div.classList.add('red')
  } else if ( aqi > 200 && aqi < 301 ){
    div.classList.add('purple')
  } else if ( aqi > 300 ){
    div.classList.add('brown')
  } else {
    div.classList.add('error')
    console.error('AQI not readable')
  }

  div.innerText = aqi
  document.querySelector('#main-container').append(div)
  air = aqi
}

function loadMoods () {
  if (localStorage.getItem('moods')) {
    moods = JSON.parse(localStorage.getItem('moods'))
  }

  showMoods ()
}

function showMoods () {

  moods.forEach(mood => {

    const moodContainer = document.createElement('div')
    const template = `
    <img src="${mood.image}" alt="">
    <h2 class="mood">${mood.mood}</h2>
    <ul>
      <li class="temp">${mood.weather.main.temp}</li>
      <li class="description">${mood.weather.weather[0].description}</li>
      <li class="icon">${mood.weather.weather[0].icon}</li>
    </ul>
    `
    
    moodContainer.innerHTML = template
    console.log(moodContainer)
    document.querySelector('.saved-moods').append(moodContainer)
  })
}