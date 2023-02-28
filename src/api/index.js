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
      name: country.name.official,
      code: country.cca3,
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
const getCountry = async (code) => {
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


const ame = {
  data: [
    {
      name: {
        official: 'American Samoa'
      },
      cca3: 'ASM'
    },
    {
      name: {
        official: 'United States of America'
      },
      cca3: 'USA'
    },
    {
      name: {
        official: 'Republic of Suriname'
      },
      cca3: 'SUR'
    },    
    {
      name: {
        official: 'Republic of Cameroon'
      },
      cca3: 'CMR'
    },  
  ]
}

/**
 * Get countries that contains part of their name
 * @param {String} name
 * @returns
 */
const searchCountries = async (name) => {
  let result = { data: [], success: false };

  try {
    const response = await client.get(`/name/${name}`);
    //const response = await new Promise((resolve) => setTimeout(resolve(ame), 1000));
    result.data = response.data.map(country => ({
      name: country.name.official,
      code: country.cca3
    }));
    result.success = true;
  } catch (error) {
    console.error(error.message);
  }

  return result;
}

export { getCountriesByRegion, getCountry, searchCountries };