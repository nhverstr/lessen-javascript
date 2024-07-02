console.log("x");
// fetch wrapped alles in new promise daarom moet je hier niet letterlijk new promise zeggen
const mijnPromise = fetch("https://api.adviceslip.com/advice");
// console.log(mijnPromise);
// console.log("xx");

// fetch is een asynchrone functie en we handelen de promise met then(), die promise resolved met een Response (class) object als eerste argument.
// Response object heeft oa .json() als functie (en bytes), we voeren die uit en die heeft ook een promise die we dan handelen met de tweede then
fetch("https://api.adviceslip.com/advice")
  .then((result) => {
    return result
    
    .json();
  })
  .then((arg1) => {
    console.log(arg1);
  });

