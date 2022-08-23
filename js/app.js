pokemons.forEach(element => {
  let elHero = document.querySelector(".hero")

  let elFatherDiv = document.createElement("div");
  let elImg = document.createElement("img");
  let elCrdBody = document.createElement("div");
  let elTitle = document.createElement("p");
  let elText = document.createElement("p");
  let elTextWekk = document.createElement("p");



  elFatherDiv.setAttribute("class", " d-flex align-items-center justify-content-between card mb-5")
  elCrdBody.setAttribute("class", "text-center")
  elImg.setAttribute("src", element.img);
  elTitle.setAttribute("class", "fs-4 text-success")
  elText.setAttribute("class", "textAbilities-primary")
  elFatherDiv.style.width = "18rem";
  elImg.style.width = "150px"
  elImg.style.height = "150px"
  elTitle.textContent = `Name: ${element.name}`;
  elText.textContent = `Abilities: ${element.type}`
  elHero.appendChild(elFatherDiv);
  elFatherDiv.append(elImg, elCrdBody);
  elCrdBody.append(elTitle, elText)

});