// This is a fake timestamp to make the test app work
// In a real project I would call fetch from a backend for frontend,
// storing the apiKey there and generating a new hash on each call
const fakeTs = 'thisisatimestamp123'
const apiKey = 'd93ec84333c5e6a64590b6c910b1a4a2'
// This is a fixed hash, it should be regenerated on each call
const hash = '102418e30bc264ada769be9eda73106d'

// This base url could be improved by making the endpoint "characters" variable
export const baseUrl = 'https://gateway.marvel.com:443/v1/public/characters'
export const authQuery = `?ts=${fakeTs}&apikey=${apiKey}&hash=${hash}`
