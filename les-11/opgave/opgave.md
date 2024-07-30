# Les 11 - Opgave

## Inleiding

“Coding, it's an endless process of trial and error, of trying to get the right command in the right place, with sometimes just a semicolon making the difference between success and failure. Code breaks and then it falls apart, and it often takes many, many tries until that magical moment when what you're trying to build comes to life.” - Reshma Saujani, Entrepreneur, founder of Girls Who Code

Theorie is interessant, maar als je geen code kan schrijven ben je geen programmeur. Voor deze opgave ga je een spelletje tic-tac-toe (of boter kaas en eieren in het vlaamsch) maken.


## (Niet) zoals gewoonlijk

Je werkt deze keer in de terminal, met een script uitgevoerd door NodeJS. Je gaat geen html schrijven, en ook geen server. Gewoon input en output via de terminal.

## Vragen

### Prompt: How do I make a 'hello world' NodeJS app that reads terminal input? Make it concise, use es6 imports, do not use npm link.

Chatbot:

Initialize your project and create the necessary files:

Create a new directory for your project and navigate into it.
Create a package.json file by running npm init -y.
Create the index.mjs file:

Create a file named index.mjs in the project directory.
Write the NodeJS app:

Open index.mjs and write the following code:

// index.mjs
```javascript
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name: ', (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
});
```
Run the app:
In your terminal, navigate to your project directory and run the app using Node with the following command:
```javascript
node --experimental-modules index.mjs
```
Explanation:

`import readline from 'readline';`

This imports the readline module, which provides an interface for reading data from a Readable stream (such as process.stdin).

`const rl = readline.createInterface({...});`

This creates an instance of readline.Interface to handle input and output.

`rl.question('Enter your name: ', (name) => {...});`

This method displays a query to the user, waits for the user's input, and then invokes the callback function with the user's response.

`console.log(Hello, ${name}!);`

This logs the greeting message to the console using template literals.

`rl.close();`

This closes the readline interface after the input has been processed.
That's it! You now have a simple 'Hello World' NodeJS app that reads input from the terminal using ES6 imports.

### Start je terminal in de juiste directory
Met dit symbool ">" geef ik aan dat je in de terminal werkt.

Check zeker dat je in de juiste directory werkt.
> pwd
~/lessen-javascript/les-11

### Initialiseer een nieuwe package, je maakt gebruik van npm init.

> npm init -y
Je zal nu "package.json" zien verschijnen in de huidige directory.

### Maak duidelijk aan NodeJS dat je een JS module wilt bouwen
- Optie 1: zet "type": "module" in je package.json
- Optie 2: gebruik .mjs ipv .js als extensie voor je script

### Start een script en luister naar input vanop de terminal
(vanaf nu antwoord je niet in theorie, maar in code. Gebruik app.js of app.mjs)

Een voorbeeld van hoe je terminal er moet uitzien:
> node app.js
> <typ iets>

tip: CTRL + C om je script te beëindigen, zodat je kan herstarten.

### Ga verder met het script, maar log nu je input terug naar de terminal. Beëindig het script na het loggen.
Een voorbeeld van hoe je terminal er moet uitzien:
> node app.js
> <typ iets>
> <log hier de input>
> <exit the program>

### Maak een array die het 3x3 speelbord voorstelt. Initialiseer het speelbord met een x in de middenste cell. Maak een printBoard() functie die het bord (mooi gealigneerd!) print op de terminal. Zoek uit hoe je 'newlines' en 'whitespace' print op de terminal.

De output die ik wil zien:
> node app.js
> bord:
  | | | |
  | |x| |
  | | | |

Tip: langwerpige streep is Option + Shift + L op je toetsenbord