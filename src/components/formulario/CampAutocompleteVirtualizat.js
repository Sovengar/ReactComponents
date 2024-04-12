import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { VariableSizeList } from 'react-window'
import Typography from '@mui/material/Typography'
import { Controller } from 'react-hook-form'

import './styles.css'

const LISTBOX_PADDING = 8 // px

function renderRow (props) {
  const { data, index, style } = props

  const dataSet = data[index]
  const inlineStyle = {
    ...style,
    top: style.top + LISTBOX_PADDING
  }

  // Devuelve la clase según si está seleccionado o no
  const getClassName = () => {
    if (data.filter(x => x[0]['aria-selected']).length > 1) {
      // Si hay más de uno como seleccionado, no marcar ninguno
      return 'MuiAutocomplete-option-edited'
    } else {
      // Si hay solo uno, marcarlo o no según si está seleccionado
      return data[index][0]['aria-selected'] ? 'MuiAutocomplete-option-edited-selected' : 'MuiAutocomplete-option-edited'
    }
  }

  return (
    <Typography
      component='li'
      {...dataSet[0]}
      noWrap style={inlineStyle}
      className={getClassName()}
    >
      {dataSet[1]}
    </Typography>
  )
}

const OuterElementContext = React.createContext({})

const OuterElementType = React.forwardRef((props, ref) => {
  const outerProps = React.useContext(OuterElementContext)
  return <div ref={ref} {...props} {...outerProps} />
})

function useResetCache (data) {
  const ref = React.useRef(null)
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true)
    }
  }, [data])
  return ref
}

// Adapter for react-window
const ListboxComponent = React.forwardRef(function ListboxComponent (props, ref) {
  const { children, ...other } = props
  const itemData = children

  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
    noSsr: true
  })

  const itemCount = itemData.length ?? 0
  const itemSize = smUp ? 36 : 48

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize
    }
    return itemData.map(() => itemSize).reduce((a, b) => a + b, 0)
  }

  const gridRef = useResetCache(itemCount)

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width='100%'
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType='ul'
          itemSize={(index) => itemSize}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  )
})

function VirtualizedAutocomplete (props) {
  const { nom, label, opcions = [], errors, value, onChange, customOnChange, ...altres } = props

  return (
    <Autocomplete
      id='virtualized-autocomplete'
      size='small'
      noOptionsText="No s'ha trobat cap coincidencia"
      disableClearable // Desactiva la "x" para limpiar el contenido seleccionado
      sx={{
        width: '100%',
        '& + .MuiAutocomplete-popper .MuiAutocomplete-option':
                {
                  backgroundColor: 'white'
                }
      }}
      value={value || ''}
      isOptionEqualToValue={(option, value) => value === '' || option.id === value} // Elimina el warning del valor por defecto
      onChange={(e, data) => {
        // Necesario definir explicitamente la propiedad que queremos definir en el form
        onChange(data.id)
        if (customOnChange) { customOnChange(data.id) }
      }}
      disableListWrap
      ListboxComponent={ListboxComponent}
      options={opcions}
      handleHomeEndKeys={false} // permite el uso de las teclas "Home" (Inicio) y "End" sobre el TextField
      renderInput={
                (params) => (
                  <TextField
                    error={!!errors[nom]}
                    helperText={errors[nom]?.message}
                    {...params}
                    label={label}
                  />
                )
            }
      getOptionLabel={(option) => {
        if (option.descripcio) {
          return option.descripcio
        } else {
          // Para que cargue el valor seleccionado
          const selectedByDefault = opcions?.find(opcion => opcion.id === value?.toString())?.descripcio ?? ''
          if (selectedByDefault) {
            return selectedByDefault
          } else {
            return ''
          }
        }
      }}
      renderOption={(props, option) => [props, option.descripcio]}
      renderGroup={(params) => params}
      {...altres}
    />
  )
}

export default function CampSelectCercador (props) {
  const { control, nom, label, opcions = [], errors, customOnChange, ...altres } = props
  return (
    <Controller
      control={control}
      name={nom}
      render={({ field: { onChange, value } }) => (
        <VirtualizedAutocomplete
          value={value}
          onChange={onChange}
          customOnChange={customOnChange}
          nom={nom}
          label={label}
          opcions={opcions}
          errors={errors}
          {...altres}
        />
      )}
    />
  )
}
