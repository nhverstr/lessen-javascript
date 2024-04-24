# Notities van de leraar

Eventueel herhaalles? of iets van toets om te herhalen voorzien?

Voor les 6: een goed uitgewerkte les zoals les 4
random quote generator: een lange array met woorden, (uit api halen?), en dan moet je die in willekeurige volgorde achter elkaar zetten.
Misschien met parameters uit html input fields
De input kan een lijst zijn van woorden die er zeker in moeten voorkomen, en dan met .join()
in een array steken

Een parameter kan het min of max aantal woorden in de quote zijn.

Misschien een lijst van voorwerpen, werkwoord, zoiets? Verbuigingen van werkwoorden?



bv [text](https://inspirobot.me/)
## Ideetjes
- Drag sorting?
Goede oefeningen op array bewerkingen, met indexOf() en splice(), en ondragstart enz

- Sorteer algoritme in browser
zo bubble sort ofzo

- een backend oefening
Expressjs API bouwen, en koppelen met frontend
get('api/')
en dan iets met post?

- to do list
zo met drag and drop
- random quote generator
- blad steen schaar spel
- 2d platformer
misschien wat ambitieus

- Weather App
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      locationName.textContent = data.name;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      description.textContent = `Description: ${data.weather[0].description}`;
    })
    .catch(error => {
      console.log("Error:", error);
    });