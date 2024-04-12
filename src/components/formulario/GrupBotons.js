import * as React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import { Button } from '@mui/material'
import './styles.css'
import { Controller } from 'react-hook-form'

export default function GrupBotons (props) {
  const { textBotoEsquerra = 'Sí', textBotoDreta = 'No', deshabilitat = false, obligatori = false, control, nom, defaultValue } = props
  const [valor, setValor] = React.useState(defaultValue)
  React.useEffect(() => {
    if (typeof control._formValues[nom] !== 'undefined') {
      setValor(control._formValues[nom])
    }
  }, [control._formValues])

  function changeValor (num, onChange) {
    if (valor !== num) { onChange(num); setValor(num) } else { onChange(null); setValor(null) }
  }

  return (
    <>
      <Controller
        name={nom}
        control={control}
        defaultValue={defaultValue}
        rules={{ required: obligatori }}
        render={({ field: { onChange, value } }) => (
          <ButtonGroup color='primary' size='large' aria-label='large contained primary button group'>
            <Button
              className='GrupBotons-Size GrupBotons-Position'
              variant={value === 1 ? 'contained' : 'outlined'}
              disabled={deshabilitat}
            //   sx={{ textTransform: 'none', fontWeight: theme.typography.fontWeightRegular, fontSize: theme.typography.pxToRem(15) }}
              onClick={e => { changeValor(1, onChange) }}
            >{textBotoEsquerra}
            </Button>
            <Button
              className='GrupBotons-Size GrupBotons-Position'
              variant={value === 0 ? 'contained' : 'outlined'}
              disabled={deshabilitat}
            //   sx={{ textTransform: 'none', fontWeight: theme.typography.fontWeightRegular, fontSize: theme.typography.pxToRem(15) }}
              onClick={e => { changeValor(0, onChange) }}
            >{textBotoDreta}
            </Button>
          </ButtonGroup>
        )}
      />

    </>

  )
}
