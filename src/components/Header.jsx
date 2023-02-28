import { useState, useEffect, useCallback, useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { createUseStyles } from "react-jss";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Autocomplete,
  CircularProgress,
  TextField
} from '@mui/material';
import {
  WbSunny as WbSunnyIcon,
  ModeNight as ModeNightIcon,
  Search as SearchIcon,
  Menu as MenuIcon
} from '@mui/icons-material'
import CountryContext from '../context/CountryContext';
import { throttle } from '../utils/throttle';
import { debounce } from '../utils/debounce';
import * as API from '../api';

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
  const [ value, setValue ] = useState(null);
  const [ inputValue, setInputValue] = useState('')
  const [ open, setOpen ] = useState(false);
  const [ options, setOptions ] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    const getCountriesByRegion = async () => {
      const response = await API.searchCountries(inputValue);
      if (response.success === true) {
        setOptions(response.data);
      } else {
        console.error('Something happened wrong with getCountriesByRegion()')
      }
    }
    if (inputValue != "") 
      getCountriesByRegion();
    else
      setOptions([])
  }, [inputValue]);

  const inputChangeHandler = (event, newInputValue) => {
    setInputValue(newInputValue)
  }

  const debouncedInputChangeHandler = useCallback(
    debounce(inputChangeHandler, 400)
  , [])

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

          <Autocomplete
            id="asynchronous-demo"
            sx={{ width: 300 }}
            isOptionEqualToValue={ (option, value) => option.name === value.name }
            getOptionLabel={ (option) => option.name }
            filterOptions={(x) => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            noOptionsText="No countries"
            onChange={(event, newValue) => setValue(newValue)}
            onInputChange={debouncedInputChangeHandler}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
          <IconButton sx={{ml : 2}} aria-label='modo' onClick={handleThemeChange}>
            {darkTheme ? <ModeNightIcon /> : <WbSunnyIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    
  )
}