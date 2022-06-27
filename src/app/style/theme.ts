import { createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: ['Lora', '-apple-system', 'BlinkMacSystemFont', 'Arial', 'sans-serif'].join(','),
    body1: {
      fontSize: 20,
    },
    h5: {
      color: 'black',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 991,
      lg: 1200,
      xl: 1400,
    },
  },
})

export default theme
