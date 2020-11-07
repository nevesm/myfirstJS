// Função responsável por criar o Card e mostrar os resultados
function createCard(respostaAPI) {
  card = `
      <div class="bandeira">
        <img src="${respostaAPI.flag}" alt="${countryName}">
      </div>
      <div class="country-info">
          <h1 class="name">${respostaAPI.name}</h1>
          <h3 class="languages">Idioma: ${respostaAPI.languages.nativeName}</h3>
          <h3 class="subregion">Região: ${respostaAPI.subregion}</h3>
          <h3 class="callingCodes">DDI: ${respostaAPI.callingCodes}</h3>
          <h3 class="population"> População: ${respostaAPI.population}</h3>
          <h3 class="latlng"> Latitude e Longitude: ${respostaAPI.latlng}</h3>
      </div>`;
  setTimeout(function () {
    const container = document.querySelector("#card");
    container.innerHTML = card;
  }, 500);
}

  setTimeout(function () {
    createCard();
  }, 500);