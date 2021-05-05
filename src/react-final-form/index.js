import React from 'react'
import { Field, Form } from 'react-final-form'

import { sleep } from '../utils'
import { minLength, required, validator, composeRules } from '../validation'

import { EYInputField } from './EYInputField'

const onSubmit = async (values) => {
  console.log('submitted values', values)
  await sleep(2000)
}

export const ReactFinalForm = () => {
  return (
    <div>
      <h1>React final form - field level validation</h1>
      <Form
        onSubmit={onSubmit}
        subscription={{ submitting: true, pristine: true }}
        render={({ handleSubmit, submitting }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Field
                name="firstName"
                validate={composeRules(required, minLength(6))}
                label="First name"
                component={EYInputField}
              />

              <Field
                name="lastName"
                validate={composeRules(required, minLength(12))}
                label="Last name"
                component={EYInputField}
              />

              <button type="submit">
                {submitting ? 'Submitting' : 'Submit'}
              </button>
            </form>
          )
        }}
      />

      <h1>React final form - form level validation</h1>
      <Form
        onSubmit={onSubmit}
        subscription={{ submitting: true, pristine: true }}
        validate={validator({
          firstName: [required, minLength(6)],
          lastName: required,
        })}
        render={({ handleSubmit, submitting }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Field
                name="firstName"
                label="First name"
                component={EYInputField}
              />

              <Field
                name="lastName"
                label="Last name"
                component={EYInputField}
              />

              <button type="submit">
                {submitting ? 'Submitting' : 'Submit'}
              </button>
            </form>
          )
        }}
      />
    </div>
  )
}
