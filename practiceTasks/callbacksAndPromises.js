const axios = require('axios');

function testPromise() {
    console.log(new Date());
    const randNumber = Math.random();

    return new Promise((res, rej) => {
        console.log("We can access the number from here", randNumber);
        setTimeout(() => {
            if (randNumber < 0.9)
                res(randNumber);
            else 
                rej(randNumber);
        }, 1000);
    })
}

const consoleLog = () => {
    console.log("We can use this const");
}

/*testPromise()
    .then((data) => {
        console.log("SUCCESS", data)
        console.log(new Date())
        return testPromise()
    })
    .then(consoleLog)
    .catch((data) => console.log("FAIL", data))*/


const printData = (data) => {
    console.log(data.data.residents[0]);

    return axios.get(data.data.residents[0]);
}

const printResident = (data) => {
    console.log(data.data);
}

axios.get('https://swapi.dev/api/planets/1/')
    .then(printData)
    .then(printResident)