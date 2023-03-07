import { useFormChooseCountry } from '../hooks/useFormChooseCountry';
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

export default function ChooseCountry() {

  const { 
    selectedRegion,
    setSelectedRegion,
    selectedCountry, 
    setSelectedCountry, 
    regions,
    countries,
    handleSubmit 
  } = useFormChooseCountry();

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