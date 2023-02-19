import React from 'react'
import './index.css'
import App from './App'
import {createRoot} from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import {sendToVercelAnalytics} from './vitals'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors: {
    dew: {
      100: '#40FC79',
      200: '#40FC79',
      300: '#40FC79',
      400: '#40FC79',
      500: '#40FC79',
      600: '#40FC79',
      700: '#40FC79',
      800: '#40FC79',
      900: '#40FC79',
    },
    dd: {
      100: '#FF47D2',
      200: '#FF47D250',
      300: '#FF47D2',
      400: '#FF47D2',
      500: '#FF47D2',
      600: '#FF47D2',
      700: '#FF47D2',
      800: '#FF47D2',
      900: '#FF47D2',
    },
  },
  components: {
    Heading: {
      variants: {
        dew: {
          fontFamily: 'bely-display',
          fontSize: '40px',
          fontWeight: '400',
        },
        dd: {
          fontFamily: 'Poppins',
          fontSize: '40px',
          fontWeight: '800',
        },
      },
    },
  },
})
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

reportWebVitals(sendToVercelAnalytics)
