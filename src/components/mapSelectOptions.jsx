import React from 'react'
import { trModel } from 'redux-form-auto'

export const mapSelectOptions = (model, field, options, props) => {
  const dynOptions = typeof options == 'function' ?
    options(props) : options

  return dynOptions.map(op =>
    <option
      key={op.value || op}
      value={op.value || op}
    >
      {op.label || trModel(model, field, op)}
    </option>
  )
}
