import { useState} from 'react';
import CountryContext from './CountryContext';

export default function CountryProvider({children}) {
  const [ country, setCountry ] = useState({});
  const [ darkTheme, setDarkTheme ] = useState(false);

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