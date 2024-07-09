# Opgave

## Inleiding

Vandaag leer je over Classes. Een klasse is een concept dat in heel veel talen voorkomt. Je leert het ee

## Zoals gewoonlijk

Start hiervoor door de vraag te stellen aan ChatGPT. Stel je vragen in het Engels.

Lees de output van de chatbot, en leg daarna in eigen woorden uit wat het antwoord is op de vraag. Het antwoord in je eigen woorden, doe je in het Nederlands.

---

## Vragen

### 1. Classes as a concept
#### 1A Wat is een klasse, in the abstract sense of the word?

##### Chatbot: 

A class in programming or scripting languages is a blueprint for creating objects. It defines a set of attributes (data) and methods (functions) that the objects created from the class can have. Classes allow for the encapsulation of data and behavior, promoting modularity and reusability in code.

Key Concepts of Classes:
Attributes: These are variables that belong to the class. They represent the state or properties of an object.

Methods: These are functions defined within a class that describe the behaviors or actions the objects created from the class can perform.

Instantiation: The process of creating an object from a class is called instantiation. Each object created from a class is an instance of that class.

Inheritance: A class can inherit attributes and methods from another class. This allows for the creation of hierarchical relationships between classes, promoting code reuse.

Encapsulation: This is the bundling of data and methods that operate on the data within one unit, often a class, and restricting access to some of the object's components.

Polymorphism: This allows for methods to be used in different ways based on the object that is calling the method. It enables objects of different classes to be treated as objects of a common superclass.

##### Jouw antwoord: 
Een klasse (in programmeertalen) is een manier om objecten te groeperen. Objecten binnen een klasse hebben dezelfde attributen of variabelen en dezelfde set van functies of methoden die uitgevoerd kunnen worden op de objecten. Klassen zijn dus templates voor objecten, dit maakt code meer gestructureerd en herbruikbaar. 

#### 1B Hoe werkt de implementatie van een klasse in Java? Hoe werkt een klasse in Python?

##### Chatbot:
In JavaScript, classes are a syntactic sugar (Syntactic sugar refers to syntax within a programming language that is designed to make things easier to read or express. It doesn't add new functionality to the language but makes code easier to write and understand. In JavaScript, syntactic sugar often wraps more complex or verbose code patterns into simpler forms.) over the existing prototype-based inheritance. The class syntax was introduced in ECMAScript 6 (ES6) and provides a more intuitive and clean way to create and manage objects.

// Defining a class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Creating an instance of the class
const person1 = new Person('Alice', 30);
console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.

without syntactic sugar: 
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

const person1 = new Person('Alice', 30);
console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.


In Python, classes are fundamental to object-oriented programming. They provide a means of bundling data and functionality together.

// Defining a class
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    //Method
    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

// Creating an instance of the class
person1 = Person('Alice', 30)
print(person1.greet())  # Output: Hello, my name is Alice and I am 30 years old.

Class Definition:

JavaScript: Uses the class keyword and a constructor method named constructor.
Python: Uses the class keyword and a constructor method named __init__.
Methods:

JavaScript: Methods are defined inside the class body.
Python: Methods are defined inside the class body with the first parameter typically named self to refer to the instance.
Inheritance:

JavaScript: Uses the extends keyword and calls the parent class constructor with super().
Python: Uses parentheses after the class name to denote inheritance and calls the parent class constructor with super().
Instance Creation:

JavaScript: Instances are created using the new keyword.
Python: Instances are created by calling the class as if it were a function.
Encapsulation:

JavaScript: Uses conventions like underscores for private properties or the # syntax for private fields (introduced in recent ECMAScript versions).
Python: Uses conventions like underscores for private attributes (e.g., _attribute) and name mangling for strongly private attributes (e.g., __attribute).
Both JavaScript and Python provide powerful and flexible class mechanisms, each suited to the language's particular idioms and strengths.


##### Jouw antwoord: 
Python is object-oriented, waardoor classen echt een nieuwe en essentiële functionaliteit zijn. In JS was het al mogelijk hetzelfde te bereiken aan de hand van functies en prototypes, waardoor de class syntax een laag hierboven op is dit eigenlijk niet strict noodzakelijk is maar wel de user experience vergemakkelijkt (syntactic sugar).
=> javascript bootst na van java hoe een classe kan gedefinieerd worden

een paar verschillen:
- beiden: Class ClassA
- een nieuwe instance van een class maken in:
    - JS: let variablex = new ClassX(a,b)
    - python: variabelex = ClassX(a,b)
- attributten van een classe in:
    - JS: met constructor(attra, attrb) {this.attra = attra; this.attrb = attrb}
    - python: met def __init__(self, attra, attrb): self.attra = attra self.attrb = attrb
- methoden/functies van een classe in:
    - JS: methode() {return ...}
    - python: def greet(self): return

### 2. Classes in JS
#### 2A Leg mij classes uit, (in javascript vanaf nu!) aan de hand van geometrische vormen (gebruik Cirkel, Vierkant, en eventueel andere...)

##### Chatbot:

##### Jouw antwoord:
Je zou een klasse voor geometrische vormen kunnen hebben in javascript. De klasse heet Vorm, we geven Vorm twee attributten: de naam van de vorm en het aantal hoeken dat de vorm heeft. Dit doen we door de constructor functie te callen. De classe heeft ook een methode: omschrijving, die de vorm omschrijft. dit is gewoon een functie definitie, met een return waarde en de attributten kunnen gebruik worden in een string door ze te referencen als ${this.attr} in een string. Dit heet een **template string** (omgeven door backtics) en wordt gebruikt om dynamische strings te genereren, maw: strings die veranderen afhankelijk van wat this.attr is in de context. this. refereert in methoden naar het object waarin het gebruikt wordt.

class Vorm {
    constructor(naam, hoeken) {
        this.naam = naam;
        this.hoeken = hoeken;
    }

    omschrijving() {
        return `Een ${this.naam} is een geometrische vorm met ${this.hoeken} hoeken.`;
    }
}

Nu we een klasse Vorm hebben kunnen we objecten gaan aanmaken van deze klasse door een variabele te instantiëren en het woord "New" te gebruiken om een nieuwe classe instantie aan te duiden van Vorm. Je geeft de attributten van de classe mee (dus de naam en het aantal hoeken). Je kan nu de methode omschrijving gebruiken om een omschrijving van een cirkel of vierkant te console loggen zoals hier:

let cirkel = new Vorm("cirkel", 100000) <!--cirkel hebben oneindig aantal hoeken-->
let vierkant = new Vorm("vierkant", 4)

console.log(cirkel.omschrijving()) => "Een cirkel is een geometrische vorm met 100000 hoeken."
console.log(vierkant.omschrijving()) => "Een vierkant is een geometrische vorm met 4 hoeken."

Het zou ook kunnen dat we een subclasse maken van cirkel en vierkant, dan moet je de super classe aanroepen als volgt:

class Circle extends Vorm {
    constructor(naam, hoeken, straal) {
        super(naam, hoeken);
        this.straal = straal;
    }

    omschrijving() {
        return `Een ${this.naam} cirkel is een geometrische vorm met ${this.hoeken} hoeken. Deze cirkel heeft een straal van ${this.straal}`
    }
}

let cirkelA = new Circle("grote", 100000, "5km")
console.log(cirkelA.omschrijving()) => Een grote cirkel is een geometrische vorm met 100000 hoeken. Deze cirkel heeft een straal van 5km

#### 2B Wat is een constructor?

##### Chatbot:
In JavaScript, a constructor is a special function used to create and initialize objects created with a class. When a new object instance of the class is created, the constructor method is automatically called to set up the new object. It can initialize the object's properties and execute any setup required when the object is first created.

##### Jouw antwoord:
Een constructor is een functie die automatisch uitgevoerd wordt wanneer je een nieuw object van een bepaalde klasse definiëerd (e.g. cirkel = new Vorm("cirkel", 100000)). De constructor krijgt als argumenten de waarden mee van de attributen van die klasse ("cirkel", 100000). Je stelt de constructor functie op in de klasse definitie:
constructor(naam, hoeken) {
    this.naam = naam;
    this.hoeken = hoeken;
}

Eens je dan een object definiëerd wordt de functie dus uitgevoerd om het object met zijn attributten aan te maken:

cirkel = new Vorm("cirkel", 100000)

=> wat er gebeurd:

constructor("cirkel", 100000) {
    this.naam = "cirkel";
    this.hoeken = 100000;
}

#### 2C Wat is overerving?

##### Chatbot:
In JavaScript, inheritance is a concept where one class (child class) inherits properties and methods from another class (parent class). This allows for the creation of a hierarchy of classes that share common behavior and enables code reuse.

JavaScript supports inheritance primarily through two mechanisms: prototype-based inheritance and class-based inheritance (introduced in ES6). Here, we'll focus on class-based inheritance for clarity.

Class-Based Inheritance
Using the extends keyword, a child class can inherit from a parent class. The child class will have access to all the properties and methods of the parent class.

Example:
javascript
Copy code
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    // Call the parent class constructor
    super(name);
    this.breed = breed;
  }

  speak() {
    // Call the parent class method
    super.speak();
    console.log(`${this.name} barks.`);
  }
}

const dog1 = new Dog('Rex', 'Labrador');
dog1.speak();
// Output:
// Rex makes a sound.
// Rex barks.
Explanation:
Parent Class (Animal):

Animal class has a constructor that initializes the name property.
It has a method speak that logs a generic sound message.
Child Class (Dog):

Dog class extends the Animal class using the extends keyword.
The constructor method of Dog calls the parent class's constructor using super(name). The super function is used to call the constructor and methods of the parent class.
The speak method in Dog first calls the speak method of the Animal class using super.speak() and then logs an additional message specific to dogs.

##### Jouw antwoord:

Overerving in javascript classes is wanneer een klasse de attributten van een andere klasse overneemt en verder uitbreidt. Dit is een princiepe dat code hergebruikt stimuleert (je moet de eerste attributten niet meer gaan definiëren maar kan gewoon zeggen dat je ze overneemt van de parent class). De klasse waarvan je overneemt is de parent class, de klasse die overneemt is de child class.

je gebruikt het woord "extends", om aan te duiden dat het een child class is. En je gebruikt de super() functie om aan te duiden welke attributten je overneemt van de parent. voor de rest gebruik je de normale methode om extra attributten toe te voegen:

class Cirkel extends Vorm {
    constructor(naam, hoeken, straal) {
        super(naam, hoeken);
        this.straal = straal;
    }
}

#### 2D Hoe werken getters en setters?

##### Chatbot: 

In JavaScript classes, getters and setters are special methods that allow you to define how properties of an object are accessed and modified. They provide a way to control the access to an object's properties, adding encapsulation and abstraction.

Getters
A getter is a method that gets the value of a specific property. It allows you to run additional logic or validation when a property is accessed.

Setters
A setter is a method that sets the value of a specific property. It allows you to run additional logic, validation, or even transform the value before it is assigned to the property.

Example of Getters and Setters
javascript
Copy code
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter for fullName
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Setter for fullName
  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person('John', 'Doe');

console.log(person.fullName); // Output: John Doe

person.fullName = 'Jane Smith';

console.log(person.firstName); // Output: Jane
console.log(person.lastName);  // Output: Smith
Explanation
Constructor:

Initializes firstName and lastName.
Getter (fullName):

Defined using the get keyword.
Combines firstName and lastName to return the full name.
Setter (fullName):

Defined using the set keyword.
Takes a single string name, splits it into firstName and lastName, and assigns the values to the respective properties.
Benefits of Getters and Setters
Encapsulation: Control access to an object's properties, preventing direct modification.
Validation: Validate or transform data before setting a property.
Computed Properties: Create properties that are computed dynamically based on other properties.
Using Getters and Setters in Practice
Getters and setters are particularly useful in scenarios where you need to control how properties are accessed or modified, such as:

Validating user input.
Keeping related properties in sync.
Providing a clear API for object properties.
Example with Validation
javascript
Copy code
class User {
  constructor(username) {
    this._username = username;
  }

  get username() {
    return this._username;
  }

  set username(name) {
    if (name.length < 4) {
      console.log('Username must be at least 4 characters long.');
    } else {
      this._username = name;
    }
  }
}

const user = new User('admin');
console.log(user.username); // Output: admin

user.username = 'jo'; // Output: Username must be at least 4 characters long.
console.log(user.username); // Output: admin

user.username = 'john_doe';
console.log(user.username); // Output: john_doe
In this example, the setter for username includes validation logic to ensure the username is at least 4 characters long, demonstrating the practical utility of getters and setters.##

##### Jouw antwoord:
getters en setters zijn eigenlijk functies/methoden die je in klassen definiëert met de operator (?) woorden "get" en "set". As je dan een getter of setter van een object will oproepen gebruik je .naamgetter zonder haakjes omdat ze als properties worden gecalld en niet als functies of methoden.

Een getter vraagt properties van het object op en kan logica toevoegen maar geen properties toevoegen of veranderen
Een setter kan properties van een object gaan aanpassen, dit kan handig zijn om input op te vragen voor een bepaalde property


### 3. Oefening

Oefening over klasses met overerving...
Maak 3 bestanden aan. Een hoofdklasse "Vorm(breedte, hoogte)", met getters en setters voor breedte en hoogte. Geef de klasse een methode Vorm.getArea(), maar return niks. Maak een klasse Cirkel en Vierkant, met elk een eigen implementatie van getArea.


#### Concepten

##### Methoden

functies van klassen.

##### Scope

Afschermen van je variablelen

Scope van de properties/attributten is de klasse => name, age van Person bestaan ergens anders niet. (Je kan ze dus opnieuw gebruiken in een andere klasse)

##### getters en setters

niet get username => getUsername

oproepen niet Cirkel.username => Cirkel.getUsername()

setters: andere manier om properties te definiëren, als je bv geen meegeeft aan je constructor of als je ze wilt overschrijven