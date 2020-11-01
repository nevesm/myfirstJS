var countryName;

function grabCountry() {
countryName = document.getElementById('searchInput').value;
var urlendpoint = 'https://restcountries.eu/rest/v2/name/';
var endpointfields = '?fields=topLevelDomain;alpha3Code;callingCodes;altSpellings;subregion;population;latlng;languages;flag';
fetch(urlendpoint + countryName + endpointfields, { 
  method: 'GET'
})
.then(function(response) { return response.json(); })
.then(function(json) {
console.log(json)
});
}