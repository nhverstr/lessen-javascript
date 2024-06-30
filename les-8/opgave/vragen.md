# Opgave

## Inleiding

Voor deze oefening ga je zelf moeten opzoeken hoe het werkt.

Start hiervoor door de vraag te stellen aan ChatGPT. Stel je vragen in het Engels.

Lees de output van de chatbot, en leg daarna in eigen woorden uit wat het antwoord is op de vraag. Het antwoord in je eigen woorden, doe je in het Nederlands.

---

## Vragen

## 1. Async/await

### 1A In mensentaal, wat is het verschil tussen een functie die asynchroon werkt, en een functie die syncroon werkt?

Chatbot:

In JavaScript, the main difference between synchronous and asynchronous functions lies in how they handle the execution of code, particularly when dealing with tasks that take time to complete, like fetching data from a server, reading files, or performing complex calculations. Let's break it down:

Synchronous Functions
Execution Flow: Synchronous functions execute one at a time, in the order they appear in the code. Each function must complete before the next one begins.
Blocking: If a function takes a long time to complete, it blocks the execution of subsequent code until it finishes.

Asynchronous Functions
Execution Flow: Asynchronous functions can start a task and then allow the program to continue executing other code while waiting for that task to complete. When the task is done, the asynchronous function typically uses callbacks, promises, or async/await to handle the result.

Non-Blocking: Asynchronous functions do not block the execution of subsequent code. This is particularly useful for tasks like network requests, where waiting for a response can take an unpredictable amount of time.

Jouw antwoord: 
Het verschil is dat een synchrone functie volledig uitgevoerd en afgerond moet zijn voordat de volgende functie/onderstaande code uitgevoerd kan worden. Het is een sequentieel process. Wanneer een bepaalde functie, zoals een netwerk request, lang duurt/onvoorspelbaar is in tijd, kan een synchrone functie de uitvoering van je script vertragen. Een asynchrone functie wordt uitgevoerd terwijl andere code ook gewoon verder uitgevoerd kan worden. Asynchrone functies worden als het ware even op de achtergrond geplaatst en blokkeren de uitvoering van het script niet. 

### 1B Hoe doe je dit in javascript?

Chatbot:
In JavaScript, you can write asynchronous functions using several techniques: callbacks, promises, and async/await. Each method has its own use cases and advantages. Here’s a brief overview of each approach:
- Callbacks are functions passed as arguments to other functions, to be executed once an asynchronous operation is complete.
- A promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to attach callbacks to handle the outcome of the operation.

How it works:

Creating a Promise: A promise is created and it starts in a pending state.
Resolving or Rejecting: The promise either resolves (completes successfully) or rejects (fails).
Attaching Handlers: You attach .then() for resolved cases and .catch() for rejected cases.
- async/await is syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code, which is easier to read and write.

How it works:

Async Function: You define an async function using the async keyword.
Await Keyword: Inside this function, you use the await keyword to pause the execution of the function until a promise is resolved or rejected.
Handling Results: You can use try/catch blocks to handle errors just like synchronous code.

In modern JavaScript, async/await is often preferred for its readability and ease of use. Promises are still essential, especially for APIs that return them. Callbacks are less commonly used in new code but are important to understand for working with legacy code or certain APIs.

Jouw antwoord:
Er zijn drie manieren in JS om asynchrone functies te coderen:
- callbacks (nu minst gebruikt)
- promises (gebruikt voor api's)
- async/await (meest gebruikt in JS, lijkt qua code meer op synchrone functie en is dus intuïtiever)


---

## 2. Promises
Test je antwoorden door script.js uit te voeren en te loggen in de terminal in vscode.
#> node script.js

### 2A. Je krijgt de gegeven functie, hoe maak je hiervan een Promise? (antwoord in script.js)
OK

### 2B. Gebruik "(resolve, reject)" als argumenten in je Promise. Wat doen resolve() en reject()

Chatbot: 
resolve(value): Marks the promise as fulfilled and passes the value to the .then() handler.
reject(reason): Marks the promise as rejected and passes the reason to the .catch() handler.
Promise States: Promises start as "pending" and transition to either "fulfilled" (using resolve) or "rejected" (using reject).

Jouw antwoord: OK, resolve() geeft als de operatie in resolve lukt, een argument(het resultaat van de operatie) mee voor then() en als het niet lukt zegt hij ga naar reject()
reject() geeft een argument mee voor catch()

### 2B. Zorg dat je Promise er 1000ms over doet om te resolven. (antwoord in script.js)
OK

### 2C. Kopieer je functie, zorg dat je Promise reject, en dus niet succesvol uitvoert. (antwoord in script.js)

### 2D. Waarvoor dient Promise.catch()?

Chatbot:

Jouw antwoord:
