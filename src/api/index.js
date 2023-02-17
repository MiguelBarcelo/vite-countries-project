import axios from "axios";

const client = axios.create({
  baseURL: "https://restcountries.com/v3.1"
});

/**
 * Get countries by region
 * @param {String} region
 * @returns
 */
const getCountriesByRegion = async (region) => {
  let dataCountries = { data: [], success: false };
  try {
    const response = await client.get(`/region/${region}`);
    dataCountries.data = response.data.map(country => ({
      region,
      label: country.name.official
    }));
    dataCountries.success = true;
  } catch (error) {
    console.log(error.message);
  }
  
  return dataCountries;
}

/**
 * Get country data
 * @param {String} code
 * @returns
 */
const getCountryData = async (code) => {
  let countryData = { data: {}, success: false };

  try {
    const response = await client.get(`/alpha/${code}`);
    countryData.data.name = Object.values(response.data[0].name).map(({common}) => common);
    countryData.data.capital = response.data[0].capital.join(', ');
    countryData.data.latLng = response.data[0].latlng.join(', ');
    countryData.data.currencies = Object.values(response.data[0]?.currencies).map(({name, symbol}) => `${''.concat(symbol, ' ', name)}`).join(', ');
    countryData.data.languages = Object.values(response.data[0]?.languages).map(lang => lang).join(', ');
    countryData.data.timezones = response.data[0]?.timezones.join(', ');
    countryData.data.flag = response.data[0].flags?.svg;
    countryData.success = true;
  } catch (error) {
    console.log(error.message);
  }

  return countryData;
}

export { getCountriesByRegion, getCountryData };