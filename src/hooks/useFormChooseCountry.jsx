import { useState, useEffect, useContext } from 'react';
import CountryContext from '../context/CountryContext';
import * as API from '../api';
// Data
import regions from '../types/regions.json';

const useFormChooseCountry = () => {
  const [ selectedRegion, setSelectedRegion] = useState(regions[0].region);
  const [ selectedCountry, setSelectedCountry ] = useState('');
  const [ showCountryData, setShowCountryData ] = useState(false);
  const [ countries, setCountries ] = useState([]);
  const { setCountry } = useContext(CountryContext);

  useEffect(() => {
    const getCountriesByRegion = async () => {
      const response = await API.getCountriesByRegion(selectedRegion);
      if (response.success == true) {
        setCountries(response.data);
      } else {
        console.error('Something happened wrong with getCountriesByRegion()')
      }
    }

    getCountriesByRegion();
  }, [selectedRegion])

  useEffect(() => {
    const getCountry = async () => {
      const response = await API.getCountry(selectedCountry);
      if (response.success == true) {
        setCountry(response.data);
      } else {
        console.error('Something happened wrong with getCountry(')
      }
      setShowCountryData(false);
    };

    if (showCountryData) getCountry();

  }, [ showCountryData ])

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowCountryData(true);
  }

  return {
    selectedRegion,
    setSelectedRegion,
    selectedCountry,
    setSelectedCountry,
    regions,
    countries,
    handleSubmit
  }
}

export { useFormChooseCountry };