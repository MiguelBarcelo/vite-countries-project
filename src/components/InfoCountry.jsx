import { useContext } from 'react';
import CountryContext from '../context/CountryContext';
// MUI Components
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia
} from '@mui/material';
import {
  Stars as StarsIcon,
  Translate as TranslateIcon,
  Paid as PaidIcon,
  LocationOn as LocationOnIcon,
  WatchLater as WatchLaterIcon
} from '@mui/icons-material';

export default function InfoCountry() {
  const { country } = useContext(CountryContext)

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={12}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="map.webp"
            alt="location"
          />
          <CardContent>
            <Typography gutterBottom variant='h4' component="div">
              { country?.name }
            </Typography>
            <Grid container direction="row" alignItems="center">
              <Grid item xs={1}>
                <StarsIcon />
              </Grid>
              <Grid item xs={11}>
                Capital: { country?.capital }
              </Grid>
              <Grid item xs={1}>
                <TranslateIcon />
              </Grid>
              <Grid item xs={11}>
                Language: { country?.languages }
              </Grid>
              <Grid item xs={1}>
                <PaidIcon />
              </Grid>
              <Grid item xs={11}>
                Currency: { country?.currencies }
              </Grid>
              <Grid item xs={1}>
                <LocationOnIcon />
              </Grid>
              <Grid item xs={11}>
                Location: { country?.latLng }
              </Grid>
              <Grid item xs={1}>
                <WatchLaterIcon />
              </Grid>
              <Grid item xs={11}>
                Time zone: { country?.timezones }
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}