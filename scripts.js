var countryName;

function grabCountry() {
countryName = document.getElementById('searchInput').value;
var urlendpoint = 'https://restcountries.eu/rest/v2/name/';
var endpointfields = '?fields=topLevelDomain;alpha3Code;callingCodes;altSpellings;subregion;population;latlng;languages;flag';
fetch(urlendpoint + countryName + endpointfields)
 .then(response => response.text())
 .then(data => console.log(data))
}
