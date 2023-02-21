import { useContext } from 'react';
// Components
import Header from './components/Header';
import Home from './pages/Home';
import AppRouter from './AppRouter';
// Context
import CountryContext from './context/CountryContext';
// MUI Components
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles'
// Router
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  const { darkTheme } = useContext(CountryContext);

  const theme = createTheme({
    palette: {
      mode: darkTheme ? 'dark' : 'light'
    }
  })

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container>
          <AppRouter />  
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}