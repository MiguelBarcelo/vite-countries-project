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
              México
            </Typography>
            
              <Grid container direction="row" alignItems="center">
                <Grid item xs={1}>
                  <StarsIcon />
                </Grid>
                <Grid item xs={11}>
                  Capital:
                </Grid>
                <Grid item xs={1}>
                  <TranslateIcon />
                </Grid>
                <Grid item xs={11}>
                  Language:
                </Grid>
                <Grid item xs={1}>
                  <PaidIcon />
                </Grid>
                <Grid item xs={11}>
                  Currency:
                </Grid>
                <Grid item xs={1}>
                  <LocationOnIcon />
                </Grid>
                <Grid item xs={11}>
                  Location:
                </Grid>
                <Grid item xs={1}>
                  <WatchLaterIcon />
                </Grid>
                <Grid item xs={11}>
                  Time zone:
                </Grid>
              </Grid>
            
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}