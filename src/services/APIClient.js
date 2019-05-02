const baseUrl = 'https://gateway.marvel.com:443/v1/public/characters'
const fakeTs = 'thisisatimestamp123'
const apiKey = 'd93ec84333c5e6a64590b6c910b1a4a2'
const hash = '102418e30bc264ada769be9eda73106d'
const authQuery = `?ts=${fakeTs}&apikey=${apiKey}&hash=${hash}`

export function fetchSuperheroes (storeData) {
  fetch(`${baseUrl}${authQuery}`).then(res => {
    res.json().then(marvelRes => {
      storeData(marvelRes.data.results)
    })
  })
}

export function fetchSuperhero (id, storeData) {
  fetch(`${baseUrl}/${id}${authQuery}`).then(res => {
    res.json().then(marvelRes => {
      storeData(marvelRes.data.results)
    })
  })
}
