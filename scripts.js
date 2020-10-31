var countryName; // Nome passado na caixa de busca
var resultado; // Responsavel por receber o HTML

function grabCountry(urlendpoint, countryName, endpointfields) {
countryName = document.getElementById('searchInput').value;
var urlendpoint = 'https://restcountries.eu/rest/v2/name/'; // Url base
var endpointfields = '?fields=topLevelDomain;alpha3Code;callingCodes;altSpellings;subregion;population;latlng;languages;flag'; // Fields que eu quero que a API responda
fetch(urlendpoint + countryName + endpointfields)
.then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))
}