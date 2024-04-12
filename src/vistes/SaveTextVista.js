import React from 'react'
import CodiBloc from '../components/codiBloc/CodiBloc'
import SaveText from './../components/saveText/SaveText'

export default function SaveTextVista (props) {
  const codi1 = `<SaveText 
    nomFitxer="SaveText"
    dades={dades}
    extensioFitxer="xml"
    textBtn="Descargar"
    colorBtn="primary"
    sizeBtn="small"
/>
`

  // State para datos del TextArea
  const dades = 'Hola, acabas de descargar el valor del State dades'

  return (

    <div style={{ textAlign: 'left' }}>

      <h1>SaveText</h1>
      <p>SaveText es un componente que nos permite descargar el texto que deseamos en el formato que queramos</p>
      <textarea
        defaultValue="Prueba de clicar el boton 'Descargar'"
        value={dades}
        rows='5'
        className='box-mensajes'
      >
        Prueba de clicar el boton 'Descargar'
      </textarea>
      <SaveText
        nomFitxer='SaveText'
        textBtn='Descargar'
        dades={dades}
        extensioFitxer='xml'
        colorBtn='primary'
      />
      <h2>Librerías utilizadas</h2>
      <p>MUI: npm install @mui/</p>
      <p>File-Saver: npm install file-saver --save</p>
      <h2>Propiedades ✅</h2>
      <p><strong>nomFitxer</strong>: Nombre del archivo el cual se va a guardar. <b>Obligatoria</b> ⚠️ </p>
      <p><strong>dades</strong>: State con el valor a descargar. <b>Obligatoria</b> ⚠️ </p>
      <p><strong>extensioFitxer</strong>: Extension con el que queremos descargar los datos. <b>Obligatoria</b> ⚠️ </p>
      <p><strong>textBtn</strong>: Texto a mostrar en el boton. Opcional</p>
      <p><strong>colorBtn</strong>: Color a mostrar en el boton. Opcional,  valor por defecto 'primary'</p>
      <p><u>Colores disponibles:</u></p>
      <ul>
        <li>Azul= "primary"</li>
        <li>Rojo= "error"</li>
        <li>Verde= "success"</li>
      </ul>
      <p><strong>sizeBtn</strong>: Tamaño del boton. Opcional, valor por defecto 'small'</p>

      <CodiBloc codi={codi1} />

    </div>
  )
}
