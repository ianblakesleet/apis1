const button = document.querySelector('button')

const logMe = () => {
  axios
    .get('https://swapi.dev/api/planets/?search=alderaan')
    .then((res) => {
      let residents = res.data.results[0].residents
      console.log(residents)

      for (let i = 0; i < residents.length; i++) {
        axios.get(residents[i]).then((res2) => {
          let newH = document.createElement('h2')
          newH.textContent = res2.data.name
          document.querySelector('body').appendChild(newH)
          console.log(newH)
        })
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

button.addEventListener('click', logMe)
// let newH = document.createElement('h2')
// newH.textContent = residents[i]
// document.querySelector('body').appendChild(newH)
// console.log(residents[i])
