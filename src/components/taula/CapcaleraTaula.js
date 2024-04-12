import * as React from 'react'
import Box from '@mui/material/Box'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import Add from '@mui/icons-material/Add'
import { visuallyHidden } from '@mui/utils'
import TableSortLabel from '@mui/material/TableSortLabel'

export default function CapcaleraTaula (props) {
  const { ordre, gestioFormulariNou, ordenaPer, onPetiOrdenacio, columnes } = props

  const gestioSolicitudOrdenacio = (property) => (event) => {
    onPetiOrdenacio(event, property)
  }

  return (
    <TableHead>
      <TableRow style={{ height: '60px' }}>
        {columnes.map((columna, index) => {
          if (columna.id === 'botons') {
            return (
              <TableCell
                style={{ width: columna.width }}
                align='center'
                key={index}
              >
                <IconButton
                  size='small'
                  onClick={() => gestioFormulariNou()}
                >
                  <Add />
                </IconButton>
              </TableCell>
            )
          } else {
            return (
              <TableCell
                style={{ width: columna.width }}
                key={index}
                align={columna.numeric ? 'right' : 'left'}
                sortDirection={ordenaPer === columna.id ? ordre : false}
              >
                <TableSortLabel
                  active={ordenaPer === columna.id}
                  direction={ordenaPer === columna.id ? ordre : 'asc'}
                  onClick={gestioSolicitudOrdenacio(columna.id)}
                >
                  {columna.nom}
                  {ordenaPer === columna.id
                    ? (
                      <Box component='span' sx={visuallyHidden}>
                        {ordre === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </Box>
                      )
                    : null}
                </TableSortLabel>
              </TableCell>
            )
          }
        })}
      </TableRow>
    </TableHead>
  )
}
