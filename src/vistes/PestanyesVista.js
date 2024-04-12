
import * as React from 'react'
import CodiBloc from '../components/codiBloc/CodiBloc'
import Pestanyes from '../components/pestanyes/Pestanyes'

export default function PestanyesVista () {
  const dataPestanyes = [
    {
      id: '1',
      titol: 'Pestaña 1',
      data: 'Datos pestaña 1'
    }, {
      id: '2',
      titol: 'Pestaña 2',
      data: 'Datos pestaña 2'
    }, {
      id: '3',
      titol: 'Pestaña 3',
      data: 'Datos pestaña 3'
    }
  ]

  const propDataPestanyes = `const dataPestanyes = [
        {
            id: "1",
            titol: "Pestaña 1",
            data: "Datos pestaña 1",
        }, {
            id: "2",
            titol: "Pestaña 2",
            data: "Datos pestaña 2",
        }, {
            id: "3",
            titol: "Pestaña 3",
            data: "Datos pestaña 3",
        }
    ];`

  const propPestanyaSeleccionada = 'const [valorPestanya, setValorPestanya] = useState("1");'

  const propSetPestanyaSeleccionada = `function gestionarCanviPestanya(nouValor) {
        setValorPestanya(nouValor);
    }`

  const exemplePestanyes = '<Pestanyes dataPestanyes={dataPestanyes} pestanyaSeleccionada={valorPestanya} setPestanyaSeleccionada={gestionarCanviPestanya} />'

  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Pestañas</h1>
      <Pestanyes dataPestanyes={dataPestanyes} />
      <h2>Librerías utilizadas</h2>
      <p>MUI lab: npm install @mui/lab</p>
      <h2>Propiedades</h2>
      <p><strong>dataPestanyes</strong>: Contiene los datos para generar las pestañas, es decir, el id de la pestaña (string), el título de la pestaña (string) y lo que se tiene que mostrar dentro de la misma. Array de objetos. Obligatoria.</p>
      <CodiBloc codi={propDataPestanyes} />
      <p><strong>pestanyaSeleccionada</strong>: Estado en el que se almacena la pestaña seleccionada. Estado de react, string. No obligatoria.</p>
      <CodiBloc codi={propPestanyaSeleccionada} />
      <p><strong>setPestanyaSeleccionada</strong>: Encargado de actualizar la pestaña seleccionada. Función. No obligatoria.</p>
      <CodiBloc codi={propSetPestanyaSeleccionada} />
      <p>Ejemplo uso componente:</p>
      <CodiBloc idioma='html' codi={exemplePestanyes} />
      <h2>Componentes internos utilizados</h2>
      <p>No utiliza ningún componente internamente.</p>
    </div>
  )
}
