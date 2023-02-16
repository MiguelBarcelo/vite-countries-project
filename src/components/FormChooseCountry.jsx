import { useState } from 'react';

// MUI Components
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Autocomplete,
  TextField,
  Grid,
  Box, 
  Paper
} from '@mui/material';

// Data
import regions from '../types/regions.json';
import countries from '../types/countries.json'

export default function ChooseCountry() {
  const [region, setRegion] = useState('');
  const [countryValue, setCountryValue] = useState(null)
  const [countryName, setCountryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
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
                  value={region}
                  label="Region"
                  onChange={(e) => setRegion(e.target.value)}
                >
                  {regions.map(({name}) => <MenuItem key={name} value={name}>{name}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                value={countryValue}
                onChange={(e, newValue) => setCountryValue(newValue)}
                inputValue={countryName}
                onInputChange={(e, newCountry) => setCountryName(newCountry)}
                disablePortal
                id="combo-box-countryName"
                options={countries}
                renderInput={(params) => <TextField {...params} label="Country name" />}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" sx={{ flexGrow: 1 }} fullWidth>Search</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    
  )
}