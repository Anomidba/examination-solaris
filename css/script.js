
async function getApi(){
    let resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
        method: "GET",
        headers: { "x-zocom": "solaris-1Cqgm3S6nlMechWO" },
      }); 
      const data =  await resp.json();
      //console.log(data.bodies); 
      return data.bodies;
}


let data = [] ;
async function getData() {
  try {
    globalData = await getApi()
    // return globalData
    // console.log(globalData)
    globalData.forEach(e => {
      data.push(e)
    }) 
  } catch (error) {
    console.log(error)
  }
}

getData()

console.log(data)

const planets = document.querySelectorAll("#planet")

// information om planeterna
const name = document.querySelector('.name')
const latinName = document.querySelector('.latinName')
const description = document.querySelector('.description')
const permeter = document.querySelector('.permeter')
const distance = document.querySelector('.distance')
const max_temp = document.querySelector('.max_temp')
const min_temp = document.querySelector('.min_temp')
const moon = document.querySelector('.moon')

const infoBox = document.querySelector('.information')


planets.forEach(function(pl){
  pl.addEventListener('click', () => {

    const getClass = pl.classList[0]
    console.log(getClass)

    const pd = data.find(obj => obj.name.toLowerCase() === getClass)
    console.log(pd)
    name.innerText = pd.name
    latinName.innerText = pd.latinName
    description.innerText = pd.desc
    permeter.innerText = pd.circumference
    distance.innerText = pd.distance
    max_temp.innerText = pd.temp.day
    min_temp.innerText = pd.temp.night
    moon.innerText = pd.moons ? pd.moons[0] : "No Moon"

    infoBox.classList.add('active')
  })
})


