import React, { useCallback, useState, createContext } from 'react'
import { Box, CircularProgress } from '@mui/material'

export const SpinnerContext = createContext(null)

export default function Spinner (props) {
  const { children } = props

  const [comptador, setComptador] = useState(0)

  const augmentar = useCallback(() => {
    setComptador(c => c + 1)
  }, [])

  const disminuir = useCallback(() => {
    setComptador(c => c - 1)
  }, [])

  return (
    <SpinnerContext.Provider value={{ augmentarSpinner: augmentar, disminuirSpinner: disminuir }}>
      {comptador > 0 &&
        <Box sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: 'rgba(0,0,0,0.4)',
          position: 'fixed',
          zIndex: 'tooltip',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        >
          <CircularProgress />
        </Box>}
      {children}
    </SpinnerContext.Provider>
  )
}
