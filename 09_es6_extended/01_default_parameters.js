// Default Parameters

function logActivity (name = 'Martin', activity = 'JS') {
  console.log(`${name} loves ${activity}`)
}

logActivity('Zelda', 'Archery')
logActivity('Mario', 'Jumping')
logActivity()

const defaultPerson = {
  name: 'Lori',
  activity: 'Painting'
}

function logActivity2 ( p = defaultPerson) {
  console.log(`${p.name} loves ${p.activity}`)
}