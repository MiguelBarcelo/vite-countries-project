import { useEffect, useState} from 'react';
import CountryContext from './CountryContext';

export default function CountryProvider({children}) {
  const [ country, setCountry ] = useState({});
  const [ darkTheme, setDarkTheme ] = useState(false);

  useEffect(() => {
    if (localStorage) {
        const dark = localStorage.getItem('darkTheme');
        setDarkTheme(dark)
    }
  }, [])

  const context = {
    country,
    setCountry,
    darkTheme, 
    setDarkTheme
  }

  return (
    <CountryContext.Provider value={context}>
      {children}
    </CountryContext.Provider>
  )
}