import { useEffect, useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { createUseStyles } from "react-jss";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase
} from '@mui/material';
import {
  WbSunny as WbSunnyIcon,
  ModeNight as ModeNightIcon,
  Search as SearchIcon,
  Menu as MenuIcon
} from '@mui/icons-material'
import CountryContext from '../context/CountryContext';

const useStyles = createUseStyles({
  root: {
    marginBottom: 20
  }
})

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header() {
  const { darkTheme, setDarkTheme } = useContext(CountryContext);
  const classes = useStyles()

  const handleThemeChange = () => {
    setDarkTheme(!darkTheme);
    localStorage.setItem('darkTheme', !darkTheme);
  }

  return (
      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Countries
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton sx={{ml : 2}} aria-label='modo' onClick={handleThemeChange}>
            {darkTheme ? <ModeNightIcon /> : <WbSunnyIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    
  )
}