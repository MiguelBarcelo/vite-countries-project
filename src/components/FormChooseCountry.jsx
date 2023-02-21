import { useState, useEffect, useContext } from 'react';
import CountryContext from '../context/CountryContext';
import * as API from '../api';

// MUI Components
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Paper
} from '@mui/material';

// Data
import regions from '../types/regions.json';

export default function ChooseCountry() {
  const [ selectedRegion, setSelectedRegion] = useState(regions[0].region);
  const [ selectedCountry, setSelectedCountry ] = useState(null);
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

  return (
      <Paper>
        <form onSubmit={handleSubmit}>      
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="region-label">Region</InputLabel>
                <Select
                  labelId='region-label'
                  id="region-select"
                  value={ selectedRegion }
                  label="Region"
                  onChange={ (e) => setSelectedRegion(e.target.value) }
                >
                  { regions.map(({ label, region }) => <MenuItem key={ region } value={ region }>{ label }</MenuItem>) }
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="country-label">Country</InputLabel>
                <Select
                  labelId='country-label'
                  id="country-select"
                  value={ selectedCountry }
                  label="Country"
                  onChange={ (e) => setSelectedCountry(e.target.value) }
                >
                  { countries.map(({ name, code }) => <MenuItem key={ code } value={ code }>{ name }</MenuItem>) }
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type='submit'>Search</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    
  )
}