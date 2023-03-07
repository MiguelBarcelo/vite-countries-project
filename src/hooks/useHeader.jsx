import { useState, useEffect, useCallback, useContext } from 'react';
import { debounce } from '../utils/debounce';
import CountryContext from '../context/CountryContext';
import * as API from '../api';

const useHeader = () => {
  const { darkTheme, setDarkTheme } = useContext(CountryContext);

  const [ value, setValue ] = useState(null);
  const [ inputValue, setInputValue] = useState('')
  const [ open, setOpen ] = useState(false);
  const [ options, setOptions ] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    const getCountriesByRegion = async () => {
      const response = await API.searchCountries(inputValue);
      if (response.success === true) {
        setOptions(response.data);
      } else {
        console.error('Something happened wrong with getCountriesByRegion()')
      }
    }
    if (inputValue != "") 
      getCountriesByRegion();
    else
      setOptions([])
  }, [inputValue]);

  const selectChangeHandler = (event, newValue) => {
    setValue(newValue);
  }

  const inputChangeHandler = (event, newInputValue) => {
    setInputValue(newInputValue)
  }

  const debouncedInputChangeHandler = useCallback(
    debounce(inputChangeHandler, 400)
  , [])

  const handleThemeChange = () => {
    setDarkTheme(!darkTheme);
    localStorage.setItem('darkTheme', !darkTheme);
  }

  return {
    selectChangeHandler,
    inputChangeHandler,
    debouncedInputChangeHandler,
    handleThemeChange,
    options,
    value,
    loading
  }
}

export { useHeader };