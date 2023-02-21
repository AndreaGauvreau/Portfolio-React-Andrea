import React from 'react'
import './index.css'
import App from './App'
import {createRoot} from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import {sendToVercelAnalytics} from './vitals'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {colorsDD} from './components/ui/colors/colors'
import {BrowserRouter} from 'react-router-dom'

const theme = extendTheme({
  colors: {
    dew: {
      100: colorsDD.green20,
      200: colorsDD.green20,
      300: colorsDD.green20,
      400: colorsDD.green20,
      500: colorsDD.green20,
      600: colorsDD.green,
      700: colorsDD.green,
      800: colorsDD.green,
      900: colorsDD.green,
    },
    dd: {
      100: colorsDD.pink20,
      200: colorsDD.pink20,
      300: colorsDD.pink20,
      400: colorsDD.pink20,
      500: colorsDD.pink20,
      600: colorsDD.pink,
      700: colorsDD.pink,
      800: colorsDD.pink,
      900: colorsDD.pink,
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
          fontWeight: '600',
        },
      },
    },
  },
})
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>,
)

reportWebVitals(sendToVercelAnalytics)
