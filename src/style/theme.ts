import { createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: ['Lora', '-apple-system', 'BlinkMacSystemFont', 'Arial', 'sans-serif'].join(','),
    body1: {
      fontSize: 20,
    },
  },
})

export default theme
