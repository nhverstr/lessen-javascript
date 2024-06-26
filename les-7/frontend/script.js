console.log("x")
// we surfen naar vb api
// fetch geeft op zichzelf niets terug behalve een promise
// fetch is een library en een functie voor js

// we bellen naar de api, we krijgen bytes binnen die we als json lezen, endan zeggen we dat we de data willen uit die json
fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then(data => {
    console.log(data)
})

fetch("http://localhost:80/api")
.then(response => response.json())
.then(data => {
    console.log(data)
})
