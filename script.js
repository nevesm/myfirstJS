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
  var corsapi = "https://production-corsapiprx.herokuapp.com/";
  fetch(corsapi + urlendpoint + countryName + endpointfields, {
    method: "GET",
  })
  .then(response => response.json())
  .then(data => {
    respostaAPI = data;
    console.log(respostaAPI.subregion);
    console.log(respostaAPI.callingCodes);
    console.log(respostaAPI.population);
    console.log(respostaAPI.latlng);
  })
  .catch(err => console.log(err));
}

// Função para startar tudo
function startFlow() {
  grabCountry();
}