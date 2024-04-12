import * as React from 'react'
import Taula from './Taula'

export default function ContingutFila (props) {
  const { filesContingut, gestioFormulariNou, gestioFormulariSuprimeix, gestioFormulariEdicio, columnesContingut } = props

  return (
    <div style={{ marginTop: '10px' }}>
      <Taula
        files={filesContingut}
        columnes={columnesContingut}
        gestioFormulariNou={gestioFormulariNou}
        gestioFormulariSuprimeix={gestioFormulariSuprimeix}
        gestioFormulariEdicio={gestioFormulariEdicio}
        plegable={false}
        filesPerPagina={5}
      />
    </div>
  )
}
