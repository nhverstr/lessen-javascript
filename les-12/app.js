//zonder recursie

/*function fizzBuzz() {
    for (let number = 1; number < 101; number++) {
        if (number % 3 === 0) {
            if (number % 2 != 0) {
                console.log("Fizz");
            }
            else {
                console.log("Buzz");
            }
        }
        else {
            console.log(number);
        }
    }
    return;  
}

fizzBuzz();*/

// met recursie


function fizzBuzz(number) {
    if (number % 3 === 0) {
        if (number % 2 != 0) {
            console.log("Fizz");
        }
        else {
            console.log("Buzz");
        }
    }
    else {
        console.log(number);
    }
    if (number === 100) {
        return;
    }
    number += 1;
    fizzBuzz(number);
}


fizzBuzz(1);