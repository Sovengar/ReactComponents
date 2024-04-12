import * as React from 'react'
import { useState } from 'react'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Box, Tab } from '@mui/material'

export default function Pestanyes (props) {
  const { dataPestanyes, pestanyaSeleccionada, setPestanyaSeleccionada } = props

  const [valor, setValor] = useState('1')

  function gestionarCanvi (event, nouValor) {
    if (setPestanyaSeleccionada) { setPestanyaSeleccionada(nouValor) } else { setValor(nouValor) }
  }

  function obteValor () {
    return pestanyaSeleccionada || valor
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={obteValor()}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={gestionarCanvi}
            indicatorColor='primary'
            textColor='primary'
            variant='scrollable'
            scrollButtons='auto'
            aria-label='panel pestanyes'
          >
            {
                            dataPestanyes.map((dataPestanya, index) => {
                              return (
                                <Tab key={index} label={dataPestanya.titol} value={dataPestanya.id} />
                              )
                            })
                        }
          </TabList>
        </Box>
        {
                    dataPestanyes.map((dataPestanya, index) => {
                      return (
                        <TabPanel key={index} value={dataPestanya.id}>{dataPestanya.data}</TabPanel>
                      )
                    })
                }
      </TabContext>
    </Box>
  )
}
