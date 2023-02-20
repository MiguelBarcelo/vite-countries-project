import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound404 () {
  return (
    <Container>
      <Typography variant="h1">Error 404!</Typography>
      <Typography variant="h5">Page Not Found</Typography>
      <Link to="/">Go Home</Link>
    </Container>
  )
}