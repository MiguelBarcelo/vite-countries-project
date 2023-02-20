// Components
import ChooseCountry from "../components/FormChooseCountry"
import InfoCountry from "../components/InfoCountry"
import Flag from "../components/Flag"
// MUI Components
import Grid from '@mui/material/Grid'

export default function Home() {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={12} md={4} lg={4}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
            <ChooseCountry />
          </Grid>
          <Grid item xs={12}>
            <InfoCountry />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Flag />
      </Grid>
    </Grid>
  )
}