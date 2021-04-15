const fetchData = require("../utils/fetchData")
const API = 'https://rickandmortyapi.com/api/character/'

/* Requiere ser compilado con un "polify" como "bavel" para que el navegador lo interprete */
fetchData(API)                                              /* Llamado promesa 1 */
    .then(data => {                                         // Promesa 1 ejecutada
        console.log(data.info.count)
        return fetchData(`${API}${data.results[0].id}`)     /* Encadenando promesa 2 */
    })
    .then(data => {                                         // Promesa 2 ejecutada
        console.log(data.name)
        return fetchData(data.origin.url)        /* Encadenando promesa 3 */    
    })
    .then(data => {                                         // Promesa 3 ejecutada
        console.log(data.dimension)
    })
    .catch(err => console.log(err))
