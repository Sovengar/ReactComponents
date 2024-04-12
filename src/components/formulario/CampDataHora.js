import TextField from '@mui/material/TextField'
import { Controller } from 'react-hook-form'
import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers'
import { ca } from 'date-fns/locale'

import customDateAdapter from '../../utils/customDateAdapter'

export default function CampDataHora (props) {
  const { nom, control, errors, label, disableFuture = false, ...altres } = props

  return (
    <Controller
      name={nom}
      control={control}
      render={({ field: { onChange, value } }) => (
        <LocalizationProvider adapterLocale={ca} dateAdapter={customDateAdapter}>
          <DateTimePicker
            disableFuture={disableFuture}
            label={label}
            value={value || ''}
            onChange={onChange}
            renderInput={(params) =>
              <TextField
                {...params}
                size='small'
                sx={{ width: '100%' }}
                error={!!errors[nom]}
                helperText={errors[nom]?.message}
              />}
            {...altres}
          />
        </LocalizationProvider>
      )}
    />
  )
}
