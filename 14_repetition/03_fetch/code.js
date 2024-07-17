

getUserData ()


async function getUserData () {
  try {
  const response = await fetch('https://jsonplaceholder.org/users')
  const data = await response.json()
    
  displayData(data)
  
  } catch (error) {
    console.error(error)
  }
}

function displayData(users) {
  const usersContainer = document.createElement('section')
  usersContainer.classList.add('users-container')

  users.forEach(user => {
    const template = `
    <div class="user">
      <img src="https://robohash.org/${user.login.username}?set=set4" alt="User profile image">
      <p>User Data:</p>
      <ul>
        <li>${user.firstname}</li>
        <li>${user.lastname}</li>
        <li><a href="">${user.email}</a></li>
        <li>${user.birthDate}</li>
      </ul>
      <p>Address:</p>
      <ul>
        <li>${user.address.street}</li>
        <li>${user.address.city}</li>
        <li>${user.address.zipcode}</li>
      </ul>
      <iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=${user.address.geo.lng}%2C${user.address.geo.lat}%2C${user.address.geo.lng}%2C${user.address.geo.lat}&amp;layer=mapnik" style="border: 1px solid black"></iframe>
      <br/><small><a href="https://www.openstreetmap.org/">View Larger Map</a></small>

      <a href="">${user.website}></a>
    </div>
    <hr>
    `

    usersContainer.innerHTML += template

  })

  document.querySelector('main').innerText = ''
  document.querySelector('main').appendChild(usersContainer)
}