
import * as React from 'react'
import CodiBloc from '../../components/codiBloc/CodiBloc'
import Taula from '../../components/taula/Taula'

export default function TaulaVista () {
  const [evento, setEvento] = React.useState('')

  const columnesPermisosAmbBotons = [
    {
      id: 'serie',
      nom: 'Nom de la serie',
      width: '40%'
    },
    {
      id: 'agrupacio',
      nom: 'Agrupació documental serie',
      width: '50%'
    },
    {
      id: 'botons',
      nom: '',
      width: '10%'
    }
  ]

  const dadesPermisos = [
    {
      id: 1,
      serie: 'ED00142',
      agrupacio: "Activitats formatives adreçades als treballadors de l'administració de la Generalitat"
    },
    {
      id: 2,
      serie: 'ERREncaminament',
      agrupacio: "Documents amb error en l'encaminament"
    }, {
      id: 3,
      serie: 'G0302',
      agrupacio: 'Actes protocol·laris'
    },
    {
      id: 4,
      serie: 'G0311',
      agrupacio: 'Queixes i reclamacions'
    },
    {
      id: 5,
      serie: 'G0403',
      agrupacio: 'Selecció general de personal'
    },
    {
      id: 6,
      serie: 'G0611',
      agrupacio: 'Subvencions en règim de concurrència competitiva'
    },
    {
      id: 7,
      serie: 'G0632 Multes i sancions',
      agrupacio: 'Multes'
    },
    {
      id: 8,
      serie: 'G0832',
      agrupacio: 'Història clínica compartida a Catalunya (HC3)'
    },
    {
      id: 9,
      serie: 'G08323',
      agrupacio: 'Gestió dels certificats digitals'
    },
    {
      id: 10,
      serie: 'S0104',
      agrupacio: 'Gestió del tractament amb estupefaents'
    },
    {
      id: 11,
      serie: 'S0142',
      agrupacio: 'Comunicació de posada al mercat de productes alimentosos Comunicació de posada al mercat de productes alimentosos Comunicació de posada al mercat de productes alimentosos Comunicació de posada al mercat de productes alimentosos Comunicació de posada al mercat de productes alimentosos Comunicació de posada al mercat de productes alimentosos'
    },
    {
      id: 12,
      serie: 'ERREncaminament',
      agrupacio: "Documents amb error en l'encaminament"
    },
    {
      id: 13,
      serie: 'G0302',
      agrupacio: 'Actes protocol·laris'
    },
    {
      id: 14,
      serie: 'G0311',
      agrupacio: 'Queixes i reclamacions'
    },
    {
      id: 15,
      serie: 'G0403',
      agrupacio: 'Selecció general de personal'
    },
    {
      id: 16,
      serie: 'G0611',
      agrupacio: 'Subvencions en règim de concurrència competitiva'
    },
    {
      id: 17,
      serie: 'G0632 Multes i sancions',
      agrupacio: 'Multes'
    }
  ]

  const propFiles = `const dadesPermisos = [
        {
            id: 1,
            serie: "ED00142",
            agrupacio: "Activitats formatives adreçades als treballadors de l'administració de la Generalitat",
        },
        {
            id: 2,
            serie: "ERREncaminament",
            agrupacio: "Documents amb error en l'encaminament",
        }
    ];`

  const propColumnes = `const columnesPermisos = [
        {
            id: "serie",
            nom: "Nom de la serie",
            width: "40%"
        },
        {
            id: "agrupacio",
            nom: "Agrupació documental serie",
            width: "50%"
        },
        {
            id: "botons",
            nom: "",
            width: "10%"
        }
    ];

    const columnesPermisosSenseBotons = [
        {
            id: "serie",
            nom: "Nom de la serie",
            width: "40%"
        },
        {
            id: "agrupacio",
            nom: "Agrupació documental serie",
            width: "60%"
        }
    ];`

  function gestioFormulariNou () {
    setEvento('gestioFormulariNou()')
  }

  function gestioFormulariEdicio (fila) {
    setEvento(`gestioFormulariEdicio(fila) -> id: ${fila.id} | serie: ${fila.serie} | agrupacio: ${fila.agrupacio}`)
  }

  function gestioFormulariSuprimeix (filaId) {
    setEvento(`gestioFormulariSuprimeix(filaId) -> filaId: ${filaId}`)
  }

  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Taula normal</h1>
      <div style={{ height: '400px' }}>
        <Taula
          columnes={columnesPermisosAmbBotons}
          files={dadesPermisos}
          gestioFormulariNou={gestioFormulariNou}
          gestioFormulariSuprimeix={gestioFormulariSuprimeix}
          gestioFormulariEdicio={gestioFormulariEdicio}
          filesPerPagina={10}
        />
      </div>
      {evento && <p><strong>Evento</strong>: {evento}</p>}
      <h2>Librerías utilizadas</h2>
      <p>Las propias de MUI</p>
      <h2>Propiedades</h2>
      <p><strong>columnes</strong>: Datos de las columnas que se van a mostrar en la tabla. Si se necesita una columna con botones se le puede añadir una columna con id botons. Array de objetos. Obligatoria.</p>
      <CodiBloc codi={propColumnes} />
      <p><strong>files</strong>: Datos de las filas que se van a mostrar en la tabla. Es importante que los nombres de las propiedades de los objetos se correspondan con los IDs de las columnas. Array de objetos. Obligatoria.</p>
      <CodiBloc codi={propFiles} />
      <p><strong>gestioFormulariNou</strong>: Función a la que llama cuando se usa el botón añadir de la tabla. No obligatoria.</p>
      <p><strong>gestioFormulariSuprimeix</strong>: Función a la que llama cuando se usa el botón eliminar de una fila. No obligatoria.</p>
      <p><strong>gestioFormulariEdicio</strong>: Función a la que llama cuando se usa el botón editar de una fila. No obligatoria.</p>
      <p><strong>filesPerPagina</strong>: Número de filas que se mostrarán por página. Int. No obligatoria.</p>
      <h2>Componentes internos utilizados</h2>
      <p><strong>FilaTaula</strong>: Utilizado para generar cada fila de la tabla.</p>
      <p><strong>CapcaleraTaula</strong>: Es el encabezado de la tabla.</p>
    </div>
  )
}
