// import fetch from "node-fetch";


const countryName = document.getElementById("country-name");
const countryPopulation = document.getElementById("country-population");
const countryRegion = document.getElementById("country-region");
const countryCapital = document.getElementById("country-capital");
const countryFlag = document.getElementById("flag");

async function allCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population")
    const allData = await response.json()
    return allData
}

function namedCountry(name) {
    fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,region,flags,population`)
        .then(response => response.json())
        .then(data => {
            countryFlag.setAttribute("alt", `${data[0].name.official}'s flag`)
            countryFlag.setAttribute("src", `${data[0].flags.svg}`)
            countryFlag.setAttribute("class", "flag-1")

            countryName.textContent = `${data[0].name.official}`
            countryPopulation.textContent = `${data[0].population}`
            countryRegion.textContent = `${data[0].region}`
            countryCapital.textContent = `${data[0].capital[0]}`
        })
}

window.onload = allCountries()