import { useState} from 'react';
import CountryContext from './CountryContext';

export default function CountryProvider({children}) {
  const [ country, setCountry ] = useState({});

  return (
    <CountryContext.Provider value={{country, setCountry}}>
      {children}
    </CountryContext.Provider>
  )
}