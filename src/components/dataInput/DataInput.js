import React, { useState } from 'react'
import './EstilosDataInput.css'
import Alert from '@mui/material/Alert'

export default function DataInput (props) {
  const { delim = ';' } = props

  /*
        ✅ FORMATO VALIDO DEL CSV:

        Cabecera1;Cabecera2;Cabecera3
        dato1;datos2;dato3

    */

  const [csvFile, setCsvFile] = useState()

  const processarCSV = (str) => {
    // Separamos los nombre del ecabezado del CSV
    const headers = str.slice(0, str.indexOf('\r\n')).split(delim)

    // Datos del CSV
    const rows = str.slice(str.indexOf('\r\n')).split('\r\n')

    // Combinamos la cabecera con los datos
    const newArray = rows.map((row) => {
      const values = row.split(delim)
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i]
        return obj
      }, {})
      return eachObject
    })

    // Eliminamos la 1r y ultima posicion que estan vacias
    newArray.shift()
    newArray.pop()

    // Asignamos los nuevos valores al State
    setCsvFile(newArray)
    console.log(newArray)
  }

  const inserirArxiu = () => {
    const file = csvFile
    const reader = new window.FileReader()

    reader.onload = function (e) {
      const text = e.target.result
      processarCSV(text)
    }
    reader.readAsText(file)
  }

  return (
    <div className='dataInput'>
      <h2>Carrega de dades</h2>

      <input
        className='button-8'
        type='file'
        accept='.csv'
        multiple={false}
        onChange={(e) => setCsvFile(e.target.files[0])}
      />

      <br />
      <br />
      <button
        className='button-7'
        onClick={(e) => {
          e.preventDefault()
          if (csvFile) inserirArxiu()
        }}
      >
        Enviar arxiu
      </button>

      <Alert severity='info' style={{ marginTop: 50 }}>
        <code>Datos procesados: {JSON.stringify(csvFile)}</code>
      </Alert>
    </div>
  )
}
