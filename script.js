// Declarando variáveis
var countryName;
var respostaAPI;
var card;

// Função responsável por capturar o input do usuário, acessar a API e gravar o resultado na variável 'respostaAPI'
function grabCountry() {
  countryName = document.getElementById("searchInput").value;
  var urlendpoint = "https://restcountries.eu/rest/v2/name/";
  var endpointfields =
    "?fields=topLevelDomain;alpha3Code;callingCodes;subregion;population;latlng;languages;flag";
  var corsapi = "https://cors-anywhere.herokuapp.com/";
  fetch(corsapi + urlendpoint + countryName + endpointfields, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
        setTimeout(function () {
            console.log(json);
          }, 1000);
    });
}

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

// Função para startar tudo
function startFlow() {
  grabCountry();
  setTimeout(function () {
    createCard();
  }, 500);
}
