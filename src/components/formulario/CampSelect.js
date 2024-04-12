import * as React from 'react'
import { MenuItem, Select, InputLabel, FormControl, FormHelperText } from '@mui/material'
import { Controller } from 'react-hook-form'

export default function CampSelect (props) {
  const { control, nom, label, opcions, errors, ...altres } = props

  const obteOpcions = () => opcions
    ? (
        opcions.map((option) =>
          <MenuItem key={option.id} value={option.id}>
            {option.descripcio}
          </MenuItem>
        )
      )
    : null

  return (
    <>
      <Controller
        control={control}
        name={nom}
        render={({ field: { onChange, value } }) => (
          <FormControl
            fullWidth
            size='small'
            error={!!errors[nom]}
          >
            <InputLabel id={`select-${nom}`}>
              {opcions ? label : 'Loading...'}
            </InputLabel>
            <Select
              labelId={`select-${nom}`}
              onChange={onChange}
              value={opcions ? value : ''}
              label={label}
              {...altres}
            >
              {obteOpcions()}
            </Select>
            <FormHelperText>{errors[nom]?.message}</FormHelperText>
          </FormControl>
        )}
      />
    </>
  )
}
