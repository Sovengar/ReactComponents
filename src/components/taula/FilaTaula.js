import * as React from 'react'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import ContingutFila from './ContingutFila'

export default function FilaTaula (props) {
  const { fila, gestioFormulariNou, gestioFormulariSuprimeix, gestioFormulariEdicio, columnes, plegable, columnesContingut } = props

  const [obert, setObert] = useState(false)

  // Devuelve una fila que permite desplegar contenido
  function obteFilasTablaPlegable () {
    return (
      <>
        <TableRow
          sx={{ '& > *': { borderBottom: 'unset' } }}
          style={{ cursor: 'pointer' }}
          hover
          tabIndex={-1}
          onClick={() => setObert(!obert)}
        >
          <TableCell>
            <IconButton size='small'>
              {obert ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            <span className='d-flex justify-content-between align-items-center'>
              {fila[columnes[0].id]}
            </span>
          </TableCell>
          {columnes.map((columna, index) => index !== 0 &&
            <TableCell key={index} component='th' scope='fila'>
              {fila[columna.id]}
            </TableCell>
          )}
        </TableRow>
        <TableRow style={{ backgroundColor: '#f2f2f2' }}>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={obert} timeout='auto' unmountOnExit>
              <ContingutFila
                filesContingut={fila.filesContingut}
                columnesContingut={columnesContingut}
                gestioFormulariNou={gestioFormulariNou}
                gestioFormulariSuprimeix={gestioFormulariSuprimeix}
                gestioFormulariEdicio={gestioFormulariEdicio}
              />
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    )
  }

  // Devuelve una fila normal
  function obteFilasTabla () {
    return (
      <TableRow hover>
        {columnes.map((columna, index) => {
          if (columna.id === 'botons') {
            return (
              <TableCell key={index} align='center'>
                <IconButton
                  aria-label='Edit'
                  size='small'
                  onClick={() => gestioFormulariEdicio(fila)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label='Delete'
                  size='small'
                  onClick={() => gestioFormulariSuprimeix(fila.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            )
          } else {
            return (
              <TableCell key={index} component='th' scope='fila' align={columna.numeric ? 'right' : 'left'}>
                {fila[columna.id]}
              </TableCell>
            )
          }
        })}
      </TableRow>
    )
  }

  return plegable ? obteFilasTablaPlegable() : obteFilasTabla()
}
