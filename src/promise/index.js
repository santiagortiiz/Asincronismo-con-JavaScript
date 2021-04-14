const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("resolve somethingWillHappen")
        } else {
            reject("reject somethingWillHappen")
        }
    })
}

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("resolve somethingWillHappen2")
            }, 1000)
        } else {
            reject("reject somethingWillHappen2")
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err))

Promise.all([somethingWillHappen2(), somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log("Promise.all", response)
    })
    .catch(err => console.error(err))

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err))
