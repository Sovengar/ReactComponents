import React from 'react'
import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

export default function CampText (props) {
  const { nom, label, control, errors, ...altres } = props

  return (
    <Controller
      name={nom}
      control={control}
      render={({ field: { onChange, value } }) =>
        <TextField
          value={value || ''}
          onChange={onChange}
          size='small'
          fullWidth
          label={label}
          type='text'
          variant='outlined'
          error={!!errors[nom]}
          helperText={errors[nom]?.message}
          {...altres}
        />}
    />
  )
}
