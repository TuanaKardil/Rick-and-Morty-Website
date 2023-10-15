


var x = new URLSearchParams(window.location.search)
var y = String( x.get("id"))



fetch('https://rickandmortyapi.com/api/episode/'+y)
  .then(response => {
    // Check if the response status is OK (status code 200)
    if (!response.ok) {
 

      throw new Error("Network response was not ok");
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then(data => {

    // Now you can work with the JSON data
    const name=data.name;
    const episode=data.episode
    const air_date=data.air_date
    document.getElementById("name").innerHTML=name;
    document.getElementById("episode").innerHTML=episode;
    document.getElementById("air_date").innerHTML=air_date;
    characters(data.characters);
  })

  function characters(array){
    const characters=document.getElementById("characters");
    for(var i=0;i<array.length;i++){
      var url=array[i]; //arraydeki linkleri tek tek tuttuk
      fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        const { name, image: img_url, status, species, gender, location } = data;
        const character_box = createElementWithId("div", "character-box");
        characters.appendChild(character_box);

        const character_img = createElementWithId("div", "character-img");
        character_box.appendChild(character_img);

        const img = createElementWithId("img", "character-image");
        img.src = img_url;
        character_img.appendChild(img);

        const character_info = createElementWithId("div", "character-info");
        character_box.appendChild(character_info);

        character_info.innerHTML = `
        <h2>${name}</h2>
        <p>${status} - ${species}</p>
        <span>Last known location:</span>
        <p>${data.origin.name}</p>
        <span>First seen in:</span>
        <p>${location.name}</p>
        `;
      })
    }
  }

  function createElementWithId(tag, id) {
    const element = document.createElement(tag);
    element.setAttribute("id", id);
    return element;
  }

