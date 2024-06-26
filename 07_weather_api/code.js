
const apiKey = 'af1eb7ff29c464bd26db09fc2c06ca09'



document.querySelector('#submit').addEventListener('click', e => {
  e.preventDefault()
  const userInput = document.querySelector('#city').value
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=metric`
  getData(url)
})


async function getData (url) {
  const response = await fetch(url)
  const data = await response.json()

  console.log(data)
  console.log(data.main.temp + '°C')
  console.log('Description: ', data.weather[0].description)
  console.log('icon: ',`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
}


getData()