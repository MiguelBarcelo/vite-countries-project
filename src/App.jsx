// Components
import Header from './components/Header';
import Home from './pages/Home';
import AppRouter from './AppRouter';
// Context
import CountryProvider from './context/CountryProvider';
// MUI Components
import Container from '@mui/material/Container'

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <CountryProvider>
          <AppRouter />
        </CountryProvider>
      </Container>
    </>
  )
}