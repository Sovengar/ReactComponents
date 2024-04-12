
import * as React from 'react'
import CodiBloc from '../../components/codiBloc/CodiBloc'
import Taula from '../../components/taula/Taula'

export default function TaulaVista () {
  const [evento, setEvento] = React.useState('')

  const columnesPermisos = [
    {
      id: 'serie',
      nom: 'Nom de la serie',
      width: '40%'
    },
    {
      id: 'agrupacio',
      nom: 'Agrupació documental serie',
      width: '60%'
    }
  ]

  const columnesContingut = [
    { id: 'usuari', nom: 'Usuari', width: '60%' },
    { id: 'permisos', nom: 'Permisos', width: '30%' },
    { id: 'botons', nom: '', width: '10%' }
  ]

  const dadesPermisos = [
    {
      id: 1,
      serie: 'ED00142',
      agrupacio: "Activitats formatives adreçades als treballadors de l'administració de la Generalitat",
      filesContingut: [
        { id: 1, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 2, usuari: 'Joel', permisos: 'Edita' },
        { id: 3, usuari: 'Sergio', permisos: 'Edita' },
        { id: 4, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 5, usuari: 'Joel', permisos: 'Edita' },
        { id: 6, usuari: 'Sergio', permisos: 'Edita' },
        { id: 7, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 8, usuari: 'Joel', permisos: 'Edita' },
        { id: 9, usuari: 'Sergio', permisos: 'Edita' },
        { id: 10, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 11, usuari: 'Joel', permisos: 'Edita' }
      ]
    },
    {
      id: 2,
      serie: 'ERREncaminament',
      agrupacio: "Documents amb error en l'encaminament",
      filesContingut: [
        { id: 1, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 2, usuari: 'Joel', permisos: 'Edita' },
        { id: 3, usuari: 'Sergio', permisos: 'Edita' },
        { id: 4, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 5, usuari: 'Joel', permisos: 'Edita' },
        { id: 6, usuari: 'Sergio', permisos: 'Edita' }
      ]
    },
    {
      id: 3,
      serie: 'G0302',
      agrupacio: 'Actes protocol·laris',
      filesContingut: [
        { id: 1, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 2, usuari: 'Joel', permisos: 'Edita' },
        { id: 3, usuari: 'Sergio', permisos: 'Edita' },
        { id: 4, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 5, usuari: 'Joel', permisos: 'Edita' },
        { id: 6, usuari: 'Sergio', permisos: 'Edita' }
      ]
    },
    {
      id: 4,
      serie: 'G0311',
      agrupacio: 'Queixes i reclamacions',
      filesContingut: [
        { id: 1, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 2, usuari: 'Joel', permisos: 'Edita' },
        { id: 3, usuari: 'Sergio', permisos: 'Edita' },
        { id: 4, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 5, usuari: 'Joel', permisos: 'Edita' },
        { id: 6, usuari: 'Sergio', permisos: 'Edita' }
      ]
    },
    {
      id: 5,
      serie: 'G0403',
      agrupacio: 'Selecció general de personal',
      filesContingut: [
        { id: 1, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 2, usuari: 'Joel', permisos: 'Edita' },
        { id: 3, usuari: 'Sergio', permisos: 'Edita' },
        { id: 4, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 5, usuari: 'Joel', permisos: 'Edita' },
        { id: 6, usuari: 'Sergio', permisos: 'Edita' }
      ]
    },
    {
      id: 6,
      serie: 'G0611',
      agrupacio: 'Subvencions en règim de concurrència competitiva',
      filesContingut: [
        { id: 1, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 2, usuari: 'Joel', permisos: 'Edita' },
        { id: 3, usuari: 'Sergio', permisos: 'Edita' },
        { id: 4, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 5, usuari: 'Joel', permisos: 'Edita' },
        { id: 6, usuari: 'Sergio', permisos: 'Edita' }
      ]
    },
    {
      id: 7,
      serie: 'G0632 Multes i sancions',
      agrupacio: 'Multes',
      filesContingut: [
        { id: 1, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 2, usuari: 'Joel', permisos: 'Edita' },
        { id: 3, usuari: 'Sergio', permisos: 'Edita' },
        { id: 4, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 5, usuari: 'Joel', permisos: 'Edita' },
        { id: 6, usuari: 'Sergio', permisos: 'Edita' }
      ]
    },
    {
      id: 8,
      serie: 'G0832',
      agrupacio: 'Història clínica compartida a Catalunya (HC3)',
      filesContingut: [
        { id: 1, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 2, usuari: 'Joel', permisos: 'Edita' },
        { id: 3, usuari: 'Sergio', permisos: 'Edita' },
        { id: 4, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 5, usuari: 'Joel', permisos: 'Edita' },
        { id: 6, usuari: 'Sergio', permisos: 'Edita' }
      ]
    },
    {
      id: 9,
      serie: 'G08323',
      agrupacio: 'Gestió dels certificats digitals',
      filesContingut: [
        { id: 1, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 2, usuari: 'Joel', permisos: 'Edita' },
        { id: 3, usuari: 'Sergio', permisos: 'Edita' },
        { id: 4, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 5, usuari: 'Joel', permisos: 'Edita' },
        { id: 6, usuari: 'Sergio', permisos: 'Edita' }
      ]
    },
    {
      id: 10,
      serie: 'S0104',
      agrupacio: 'Gestió del tractament amb estupefaents',
      filesContingut: [
        { id: 1, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 2, usuari: 'Joel', permisos: 'Edita' },
        { id: 3, usuari: 'Sergio', permisos: 'Edita' },
        { id: 4, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 5, usuari: 'Joel', permisos: 'Edita' },
        { id: 6, usuari: 'Sergio', permisos: 'Edita' }
      ]
    },
    {
      id: 11,
      serie: 'S0142',
      agrupacio: 'Comunicació de posada al mercat de productes alimentosos Comunicació de posada al mercat de productes alimentosos Comunicació de posada al mercat de productes alimentosos Comunicació de posada al mercat de productes alimentosos Comunicació de posada al mercat de productes alimentosos Comunicació de posada al mercat de productes alimentosos',
      filesContingut: [
        { id: 1, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 2, usuari: 'Joel', permisos: 'Edita' },
        { id: 3, usuari: 'Sergio', permisos: 'Edita' },
        { id: 4, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 5, usuari: 'Joel', permisos: 'Edita' },
        { id: 6, usuari: 'Sergio', permisos: 'Edita' }
      ]
    },
    {
      id: 12,
      serie: 'ERREncaminament',
      agrupacio: "Documents amb error en l'encaminament",
      filesContingut: [
        { id: 1, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 2, usuari: 'Joel', permisos: 'Edita' },
        { id: 3, usuari: 'Sergio', permisos: 'Edita' },
        { id: 4, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 5, usuari: 'Joel', permisos: 'Edita' },
        { id: 6, usuari: 'Sergio', permisos: 'Edita' }
      ]
    },
    {
      id: 13,
      serie: 'G0302',
      agrupacio: 'Actes protocol·laris',
      filesContingut: [
        { id: 1, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 2, usuari: 'Joel', permisos: 'Edita' },
        { id: 3, usuari: 'Sergio', permisos: 'Edita' },
        { id: 4, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 5, usuari: 'Joel', permisos: 'Edita' },
        { id: 6, usuari: 'Sergio', permisos: 'Edita' }
      ]
    },
    {
      id: 14,
      serie: 'G0311',
      agrupacio: 'Queixes i reclamacions',
      filesContingut: [
        { id: 1, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 2, usuari: 'Joel', permisos: 'Edita' },
        { id: 3, usuari: 'Sergio', permisos: 'Edita' },
        { id: 4, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 5, usuari: 'Joel', permisos: 'Edita' },
        { id: 6, usuari: 'Sergio', permisos: 'Edita' }
      ]
    },
    {
      id: 15,
      serie: 'G0403',
      agrupacio: 'Selecció general de personal',
      filesContingut: [
        { id: 1, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 2, usuari: 'Joel', permisos: 'Edita' },
        { id: 3, usuari: 'Sergio', permisos: 'Edita' },
        { id: 4, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 5, usuari: 'Joel', permisos: 'Edita' },
        { id: 6, usuari: 'Sergio', permisos: 'Edita' }
      ]
    },
    {
      id: 16,
      serie: 'G0611',
      agrupacio: 'Subvencions en règim de concurrència competitiva',
      filesContingut: [
        { id: 1, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 2, usuari: 'Joel', permisos: 'Edita' },
        { id: 3, usuari: 'Sergio', permisos: 'Edita' },
        { id: 4, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 5, usuari: 'Joel', permisos: 'Edita' },
        { id: 6, usuari: 'Sergio', permisos: 'Edita' }
      ]
    },
    {
      id: 17,
      serie: 'G0632 Multes i sancions',
      agrupacio: 'Multes',
      filesContingut: [
        { id: 1, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 2, usuari: 'Joel', permisos: 'Edita' },
        { id: 3, usuari: 'Sergio', permisos: 'Edita' },
        { id: 4, usuari: 'Eros', permisos: 'Visualitza' },
        { id: 5, usuari: 'Joel', permisos: 'Edita' },
        { id: 6, usuari: 'Sergio', permisos: 'Edita' }
      ]
    }
  ]

  const propFiles = `const dadesPermisos = [
        {
            id: 1,
            serie: "ED00142",
            agrupacio: "Activitats formatives adreçades als treballadors de l'administració de la Generalitat",
            filesContingut: [
                { id: 1, usuari: "Eros", permisos: "Visualitza" },
                { id: 2, usuari: "Joel", permisos: "Edita" },
            ]
        },
        {
            id: 2,
            serie: "ERREncaminament",
            agrupacio: "Documents amb error en l'encaminament",
            filesContingut: [
                { id: 2, usuari: "Joel", permisos: "Edita" },
                { id: 3, usuari: "Sergio", permisos: "Edita" },
            ]
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
            width: "60%"
        }
    ];`

  const propColumnesContingut = `const columnesContingut = [
        { id: "usuari", nom: "Usuari", width: "60%" },
        { id: "permisos", nom: "Permisos", width: "30%" },
        { id: "botons", nom: "", width: "10%" }
    ];`

  function gestioFormulariNou () {
    setEvento('gestioFormulariNou()')
  }

  function gestioFormulariEdicio (fila) {
    setEvento(`gestioFormulariEdicio(fila) -> id: ${fila.id} | usuari: ${fila.usuari} | permisos: ${fila.permisos}`)
  }

  function gestioFormulariSuprimeix (filaId) {
    setEvento(`gestioFormulariSuprimeix(filaId) -> filaId: ${filaId}`)
  }

  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Taula plegable</h1>
      <div style={{ height: '550px' }}>
        <Taula
          columnes={columnesPermisos}
          columnesContingut={columnesContingut}
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
      <p><strong>columnes</strong>: Datos de las columnas que se van a mostrar en la tabla. Array de objetos. Obligatoria.</p>
      <CodiBloc codi={propColumnes} />
      <p><strong>propColumnesContingut</strong>: Datos de las columnas que se van a mostrar en la tabla de cada desplegable. Si se necesita una columna con botones se le puede añadir una columna con id botons. Array de objetos. Obligatoria.</p>
      <CodiBloc codi={propColumnesContingut} />
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
