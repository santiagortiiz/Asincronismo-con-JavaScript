/* Realizar consultas desencadenadas a la API de Rick y Morti */
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', url_api, true) // abrir una URL (method, url, async=true)
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4){
                // xhttp.readyState
                // 0: request not initialized
                // 1: server connection established
                // 2: request received
                // 3: processing request
                // 4: request finished and response is ready
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error("[ERROR IN fetchData.js]", url_api))
            }
        })
        xhttp.send()
    })
}

module.exports = fetchData