import { useState, useEffect, useContext } from 'react';
import CountryContext from '../context/CountryContext';
import { getCountriesByRegion, getCountryData } from '../api';

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
import countries from '../types/countries.json'

export default function ChooseCountry() {
  const [ selectedRegion, setSelectedRegion] = useState('');
  const [ selectedCountry, setSelectedCountry ] = useState('');
  const [ showCountryData, setShowCountryData ] = useState(false);
  const { setCountry } = useContext(CountryContext);

  useEffect(() => {
    const getData = async () => {
      const response = await getCountryData(selectedCountry);
      if (response.success == true) {
        setCountry(response.data);
      } else {
        console.error('Something happened wrong!')
      }
      setShowCountryData(false);
    };

    if (showCountryData) getData();

  }, [ showCountryData ])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit...')
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
                <InputLabel id="country-label">Region</InputLabel>
                <Select
                  labelId='country-label'
                  id="country-select"
                  value={ selectedCountry }
                  label="Region"
                  onChange={ (e) => setSelectedCountry(e.target.value) }
                >
                  { countries.map(({ label, code }) => <MenuItem key={ code } value={ code }>{ label }</MenuItem>) }
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