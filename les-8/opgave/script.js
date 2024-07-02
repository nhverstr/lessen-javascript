// 2A
function timer() {
  return 1 + 2;
}

// definieer je functie maar ipv hem gewoon 1+2 te laten returnen, laat je hem een nieuwe promise returnen.
// Deze promise bevat een functie met als argumenten resolve en reject (reject niet nodig?), en resolved je opgave 1+2
// timerWithPromise() voert uit maar je ziet niet "3" omdat het opgeslaan wordt als belofte die je nog moet opvragen
function timerWithPromise1() {
  return new Promise((resolve) => {
    console.log("promise started");
    resolve(1 + 2);
  });
}

// nu zeg je ik vraag de promise op
// als de resolve gelukt is (then()), dan wil ik het resultaat van mijn promise: "3", loggen
//  als de resolve niet is gelukt (catch()), dan wil ik de error krijgen (was hier niet nuttig, we hadden geen reject maar zie below voor completeness)
// merk op dat "result" en "error" alles kunnen zijn, dit is geen vaste syntax van de promise ofzo, then en catch moeten gewoon een functie als argument hebben om te kunnen loggen
timerWithPromise1().then((result) => {
  console.log(result);
});

// In your specific example, reject is not needed because the operation you are performing (1 + 2) cannot fail
// it's a straightforward arithmetic operation that will always succeed.
// However, in real-world scenarios, especially with asynchronous operations, the reject function is crucial for handling errors or failures.
// for completeness, here is our function with reject

function timerWithPromise2() {
  return new Promise((resolve, reject) => {
    console.log("promise started");
    if (true) {
      resolve(1 + 2);
    } else {
      reject("error has occured");
    }
  });
}

timerWithPromise2()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// 2B, delay in ms outside callback function that is the first argument of setTimeout!!!

function timerWithPromise3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(1 + 2);
      } else {
        reject("error has occured");
      }
    }, 1000);
  });
}

timerWithPromise3()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// 2C
function timerWithPromise4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        resolve(1 + 2);
      } else {
        reject("error has occured");
      }
    }, 1000);
  });
}

timerWithPromise4()
  .then((result) => {
    console.log(result);
  })

  .catch((error) => {
    console.log(error);
  });

//uitvoering van resolve/reject functies, dit is om uit te leggen hoe de functie wordt ingevuld deze code zou niet echt werken
function timerWithPromise5() {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve(1 + 2);
    } else {
      reject();
    }
  });
}

// then en catch zijn functies waarin je anonieme functies definiëert, waardoor je dan de resolve functie vervangt door je anonieme functie met het argument van resolve (als dat er is)
timerWithPromise4()
  .then(mijnFunctie)
  .catch((error) => {
    console.log(error);
  });

function mijnFunctie(arg1) {
  console.log(arg1);
}

// vb lege resolve als je gwn wacht tot iets gelukt is endan bv ready loggen
function timerWithPromise6() {
  return new Promise((resolve, reject) => {
    if (false) {
      //..........
      resolve();
    } else {
      reject();
    }
  });
}

timerWithPromise6()
  .then(() => {
    console.log(('ready'))
  })
  .catch((error) => {
    console.log(error);
  });

function mijnFunctie(arg1) {
  console.log(arg1);
}


function timerWithPromise7() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(() => {
        console.log
      });
    } else {
      reject();
    }
  });
}

timerWithPromise7()
  .then(() => {
    console.log(('ready'))
  })
  .catch((error) => {
    console.log(error);
  });

function mijnFunctie(arg1) {
  console.log(arg1);
}