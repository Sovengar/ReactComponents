import * as React from 'react'
import CodiBloc from '../components/codiBloc/CodiBloc'
import DataInput from './../components/dataInput/DataInput'

export default function DataInputVista (props) {
  const codi = `const processarCSV = (str, delim=";") => {

        //Separamos los nombre del ecabezado del CSV 
        const headers = str.slice(0, str.indexOf("/r/n}")).split(delim);

        //Datos del CSV
        const rows = str.slice(str.indexOf("/r/n")).split("/r/n");

        //Combinamos la cabecera con los datos 
        const newArray = rows.map (row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {})
            return eachObject;
        })

        //Eliminamos la 1r y ultima posicion que estan vacias 
        newArray.shift();
        newArray.pop();

        //Asignamos los nuevos valores al State
        setCsvFile(newArray);
        console.log(newArray)
}
`
  const codi2 = `
    const inserirArxiu= () => {
        const file = csvFile;
        const reader = new FileReader;
    
    reader.onload = function(e){
        const text = e.target.result;
        processarCSV(text)
    }
    reader.readAsText(file);
}
`
  const formatoCSV = `Cabecera1;Cabecera2;Cabecera3
dato1;datos2;dato3 
dato1;datos2;dato3 
dato1;datos2;dato3 
`

  return (

    <div style={{ textAlign: 'left' }}>

      <h1>DataInput</h1>
      <p>DataInput es un componente que nos permite convertir un documento CSV a JSON</p>
      <DataInput />
      <h2>Formato válido del CSV ✅ </h2>
      <CodiBloc codi={formatoCSV} />
      <h2>Propiedades</h2>
      <p><strong>str</strong>:Datos procesados previamente en la funcion inserirArxiu. Obligatoria ⚠️ </p>
      <p><strong>delim</strong>: Variable con el tipo de delimitador que queremos usar. Opcional</p>
      <CodiBloc codi={codi} />
      <p><strong>inserirArxiu</strong>:Funcion que es llamada una vez hacen submit y empieza a procesar el CSV </p>
      <p><strong> processarCSV(text)</strong>: Llamamos a la funcion y le pasamos por parametro el texto procesado a texto normal</p>
      <CodiBloc codi={codi2} />

    </div>
  )
}
