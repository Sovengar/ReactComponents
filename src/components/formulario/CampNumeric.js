import * as React from 'react'
import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import './styles.css'

export default function CampNumeric (props) {
  const { label, nom, control, errors, disableIncrement = false, ...altres } = props

  const classnameText = disableIncrement ? 'disableIncrement' : ''

  return (
    <Controller
      name={nom}
      control={control}
      render={({ field: { onChange, value } }) =>
        <TextField
          className={classnameText}
          size='small'
          onChange={onChange}
          onWheel={(e) => e.target.blur()} // evita que el scroll modifique el valor del campo
          value={value || ''}
          type='number'
          label={label}
          fullWidth
          variant='outlined'
          error={!!errors[nom]}
          helperText={errors[nom]?.message}
          {...altres}
        />}
    />
  )
}
