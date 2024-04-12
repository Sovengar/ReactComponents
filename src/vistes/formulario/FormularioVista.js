
import * as React from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Divider from '@mui/material/Divider'

import { CampAutocompleteVirtualizat, CampCheckbox, CampData, CampDataHora, CampNumeric, CampSelect, CampText } from '../../components/formulario'
import GrupBotons from './../../components/formulario/GrupBotons'

export default function FormularioVista () {
  const esquemaValidacio = Yup.object().shape({
    campCheckbox: Yup.boolean().default(true),
    campData: Yup.date().default(undefined),
    campDataHora: Yup.date().default(undefined),
    campNumeric: Yup.number().default(undefined),
    campSelect: Yup.string().default(''),
    campAutocompleteVirtualizat: Yup.string().default(''),
    campText: Yup.string().default(''),
    grupBotons: Yup.number().default(undefined)
  })

  const { control, formState: { errors } } = useForm({ resolver: yupResolver(esquemaValidacio), defaultValues: esquemaValidacio.cast() })

  const opcionsVirtualized = Array.from(Array(10000)).map((_, index) => {
    return { id: index.toString(), descripcio: index.toString() }
  })
  const opcions = Array.from(Array(20)).map((_, index) => {
    return { id: index.toString(), descripcio: index.toString() }
  })

  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Formulario</h1>
      <p>En este apartado se engloban los distintos tipos de campos de formulario que se han ido desarrollando hasta el momento.</p>
      <h2>Librerías utilizadas por todos los componentes</h2>
      <ul>
        <li>Para gestionar los estados de los campos del formulario: <strong>react-hook-form</strong></li>
        <li>Para gestionar las validaciones del formulario: <strong>yup <em>(no obligatoria)</em></strong></li>
        <li>Para integrar Yup y react-hook-form: <strong>@hookform/resolvers <em>(no obligatoria)</em></strong></li>
      </ul>
      <h2>Propiedades comunes a todos los componentes</h2>
      <ul>
        <li><strong>control</strong>: Objeto necesario de la librería react-hook-form para controlar el estado.</li>
        <li><strong>nom</strong>: Nombre interno del campo.</li>
        <li><strong>label</strong>: Nombre del campo que se mostrará.</li>
        <li><strong>errors</strong>: Objeto necesario de la librería react-hook-form para mostrar los errores.</li>
        <li><strong>...altres</strong>: Todos los componentes recojen las propiedades añadidas a mayores y se las añaden internamente.</li>
      </ul>
      <Divider />
      <h1>CampText</h1>
      <div style={{ display: 'flex', justifyContent: 'center', border: '1px solid gray', borderRadius: 4, padding: 24 }}>
        <div style={{ width: 300 }}>
          <CampText
            control={control}
            errors={errors}
            nom='campText'
            label='Camp text'
          />
        </div>
      </div>
      <h3>Librerías utilizadas</h3>
      <ul>
        <li>Las comunes explicadas al principio.</li>
      </ul>
      <h3>Propiedades</h3>
      <ul>
        <li>Las comunes explicadas al principio.</li>
      </ul>
      <Divider />
      <h1>CampCheckbox</h1>
      <div style={{ display: 'flex', justifyContent: 'center', border: '1px solid gray', borderRadius: 4, padding: 24 }}>
        <CampCheckbox
          control={control}
          errors={errors}
          nom='campCheckbox'
          label='Checkbox'
        />
      </div>
      <h3>Librerías utilizadas</h3>
      <ul>
        <li>Las comunes explicadas al principio.</li>
      </ul>
      <h3>Propiedades</h3>
      <ul>
        <li>Las comunes explicadas al principio.</li>
        <li><strong>customOnChange</strong>: Función que ejecutará al seleccionar un valor, por si queremos que haga algo a mayores.</li>
      </ul>
      <Divider />
      <h1>CampData</h1>
      <div style={{ display: 'flex', justifyContent: 'center', border: '1px solid gray', borderRadius: 4, padding: 24 }}>
        <div style={{ width: 300 }}>
          <CampData
            control={control}
            errors={errors}
            nom='campData'
            label='Camp data'
          />
        </div>
      </div>
      <p>El propio componente utiliza una función que se encuentra en <strong>utils/customDateAdapter</strong> para mostrar las iniciales de los días de la semana en Catalán.</p>
      <h3>Librerías utilizadas</h3>
      <ul>
        <li>Las comunes explicadas al principio.</li>
        <li><strong>@mui/x-date-pickers</strong></li>
        <li><strong>date-fns</strong></li>
      </ul>
      <h3>Propiedades</h3>
      <ul>
        <li>Las comunes explicadas al principio.</li>
      </ul>
      <Divider />
      <h1>CampDataHora</h1>
      <div style={{ display: 'flex', justifyContent: 'center', border: '1px solid gray', borderRadius: 4, padding: 24 }}>
        <div style={{ width: 300 }}>
          <CampDataHora
            control={control}
            errors={errors}
            nom='campDataHora'
            label='Camp data hora'
          />
        </div>
      </div>
      <p>El propio componente utiliza una función que se encuentra en <strong>utils/customDateAdapter</strong> para mostrar las iniciales de los días de la semana en Catalán.</p>
      <h3>Librerías utilizadas</h3>
      <ul>
        <li>Las comunes explicadas al principio.</li>
        <li><strong>@mui/x-date-pickers</strong></li>
        <li><strong>date-fns</strong></li>
      </ul>
      <h3>Propiedades</h3>
      <ul>
        <li>Las comunes explicadas al principio.</li>
      </ul>
      <Divider />
      <h1>CampNumeric</h1>
      <div style={{ display: 'flex', justifyContent: 'center', border: '1px solid gray', borderRadius: 4, padding: 24 }}>
        <div style={{ width: 300 }}>
          <CampNumeric
            control={control}
            errors={errors}
            nom='campNumeric'
            label='Camp numeric'
            disableIncrement
          />
        </div>
      </div>
      <p>Utiliza un fichero <strong>css</strong> que se encuentra junto al componente</p>
      <h3>Librerías utilizadas</h3>
      <ul>
        <li>Las comunes explicadas al principio.</li>
      </ul>
      <h3>Propiedades</h3>
      <ul>
        <li><strong>disableIncrement</strong>: Deshabilita las flechas para aumentar o disminuir el valor</li>
      </ul>
      <Divider />
      <h1>CampSelect</h1>
      <div style={{ display: 'flex', justifyContent: 'center', border: '1px solid gray', borderRadius: 4, padding: 24 }}>
        <div style={{ width: 300 }}>
          <CampSelect
            control={control}
            errors={errors}
            opcions={opcions}
            nom='campSelect'
            label='Camp select'
          />
        </div>
      </div>
      <h3>Librerías utilizadas</h3>
      <ul>
        <li>Las comunes explicadas al principio.</li>
      </ul>
      <h3>Propiedades</h3>
      <ul>
        <li>Las comunes explicadas al principio.</li>
      </ul>
      <Divider />
      <h1>CampAutocompleteVirtualizat</h1>
      <div style={{ display: 'flex', justifyContent: 'center', border: '1px solid gray', borderRadius: 4, padding: 24 }}>
        <div style={{ width: 300 }}>
          <CampAutocompleteVirtualizat
            control={control}
            errors={errors}
            opcions={opcionsVirtualized}
            nom='campAutocompleteVirtualizat'
            label='Autocomplete Virtualizat'
          />
        </div>
      </div>
      <p>Desplegable que permite buscar entre la lista de opciones. La gracia de este componente es que la lista de opciones está virtualizada, por lo que se le pueden pasar grandes cantidades de datos sin que afecte al rendimiento.</p>
      <p>Utiliza un fichero <strong>css</strong> que se encuentra junto al componente</p>
      <h3>Librerías utilizadas</h3>
      <ul>
        <li>Las comunes explicadas al principio.</li>
        <li>Encargado de la virtualización: react-window</li>
      </ul>
      <h3>Propiedades</h3>
      <ul>
        <li>Las comunes explicadas al principio.</li>
        <li><strong>opcions</strong>: Opciones del desplegable.</li>
        <li><strong>customOnChange</strong>: Función que ejecutará al seleccionar un valor, por si queremos que haga algo a mayores.</li>
      </ul>
      <Divider />
      <h1>GrupBotons</h1>
      <div style={{ display: 'flex', justifyContent: 'center', border: '1px solid gray', borderRadius: 4, padding: 24 }}>
        <div style={{ width: 300 }}>
          <GrupBotons
            control={control}
            errors={errors}
            nom='grupBotons'
          />
        </div>
      </div>
      <p>Grupo de botones que permite seleccionar entre ellos. La gracia de este componente es funciona como un checkbox, con texto personalizables, devolverá siempre un valor dependiendo del botón pulsado o null si no pulsas ninguno.</p>
      <p>Utiliza un fichero <strong>css</strong> que se encuentra junto al componente</p>
      <h3>Librerías utilizadas</h3>
      <ul>
        <li>Las comunes explicadas al principio.</li>
      </ul>
      <h3>Propiedades</h3>
      <ul>
        <li>Las comunes explicadas al principio.</li>
        <li><strong>changeValor</strong>: Función que ejecutará al clickar de nuevo sobre el botón seleccionado, para desmarcarlo.</li>
      </ul>
    </div>
  )
}
