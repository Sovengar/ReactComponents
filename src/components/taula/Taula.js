import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import TablePagination from '@mui/material/TablePagination'
import CapcaleraTaula from './CapcaleraTaula'
import FilaTaula from './FilaTaula'

function comparadorDescendent (a, b, ordenaPer) {
  if (b[ordenaPer] < a[ordenaPer]) {
    return -1
  }
  if (b[ordenaPer] > a[ordenaPer]) {
    return 1
  }
  return 0
}

function obteComparador (ordre, ordenaPer) {
  return ordre === 'desc'
    ? (a, b) => comparadorDescendent(a, b, ordenaPer)
    : (a, b) => -comparadorDescendent(a, b, ordenaPer)
}

// Necesario para IE11, sino usar Array.prototype.sort()
function ordenacio (dades, comparador) {
  const stabilizedThis = dades.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const ordre = comparador(a[0], b[0])
    if (ordre !== 0) {
      return ordre
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

export default function Taula (props) {
  const { columnes, files, gestioFormulariNou, gestioFormulariSuprimeix, gestioFormulariEdicio, filesPerPagina = 15, columnesContingut } = props

  const [pagina, setPagina] = React.useState(0)
  const [ordre, setOrdre] = React.useState('')
  const [ordenaPer, setOrdenaPer] = React.useState('')

  const gestioCanviPagina = (novaPagina) => {
    setPagina(novaPagina)
  }

  const gestioSolicitudOrdenacio = (prop) => {
    const isAsc = ordenaPer === prop && ordre === 'asc'
    setOrdre(isAsc ? 'desc' : 'asc')
    setOrdenaPer(prop)
  }

  return (
    <>
      <TableContainer
        style={{ height: '90%', boxShadow: 'none' }}
        component={Paper}
      >
        <Table
          stickyHeader
          size='small'
        >
          <CapcaleraTaula
            ordre={ordre}
            ordenaPer={ordenaPer}
            onPetiOrdenacio={(event, prop) => gestioSolicitudOrdenacio(prop)}
            columnes={columnes}
            gestioFormulariNou={gestioFormulariNou}
          />
          <TableBody>
            {
                            ordenacio(files, obteComparador(ordre, ordenaPer)).slice(pagina * filesPerPagina, pagina * filesPerPagina + filesPerPagina).map((fila, index) => (
                              <FilaTaula
                                key={index}
                                fila={fila}
                                gestioFormulariNou={gestioFormulariNou}
                                gestioFormulariEdicio={gestioFormulariEdicio}
                                gestioFormulariSuprimeix={gestioFormulariSuprimeix}
                                columnes={columnes}
                                columnesContingut={columnesContingut}
                                plegable={!!fila.filesContingut}
                              />
                            ))
                        }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component='div'
        count={files.length}
        rowsPerPage={filesPerPagina}
        page={pagina}
        onPageChange={(event, novaPagina) => gestioCanviPagina(novaPagina)}
      />
    </>
  )
}
