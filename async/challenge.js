const fetchData = require('../utils/fetchData.js')
const API_BASE = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api)
        const character = await fetchData(`${url_api}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url)

        console.log([
            'count: ' + data.info.count, 
            'name: ' + character.name, 
            'dimension: ' + origin.dimension
        ])
    } catch (err) {
        console.error(err)
    }
}

console.log('before')
anotherFunction(API_BASE)
console.log('after')