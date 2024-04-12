import * as React from 'react'
import { Controller } from 'react-hook-form'
import { FormHelperText, FormControlLabel, FormControl, Checkbox } from '@mui/material'

export default function CampCheckbox (props) {
  const { label, nom, control, errors, customOnChange, ...altres } = props

  return (
    <FormControl error={!!errors[nom]}>
      <Controller
        name={nom}
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControlLabel
            label={label ?? ''}
            control={
              <Checkbox
                checked={value ?? false}
                onChange={(event, value) => {
                  onChange(event, value)
                  if (customOnChange) { customOnChange(value) }
                }}
                defaultValue={false}
                inputProps={{ 'aria-label': 'controlled' }}
                {...altres}
              />
                        }
          />
        )}
      />
      <FormHelperText>{errors[nom]?.message}</FormHelperText>
    </FormControl>
  )
}
