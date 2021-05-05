import _ from 'lodash'

// ====================================================
// Rules
// ====================================================
// These can also come from a validation lib like Yup/Joi

export const required = (value) => {
  return value ? undefined : 'This field is required'
}

export const minLength = (min) => (value) => {
  if (!value || value.length < min) {
    return `Min ${min} chars`
  }

  return undefined
}

// ====================================================
// Helpers
// ====================================================
export const composeRules = (...rules) => (value) =>
  rules.reduce((error, rule) => error || rule(value), undefined)

export const validator = (rules) => (data = {}) => {
  let errors = {}

  Object.keys(rules).forEach((key) => {
    const rule = composeRules(...[].concat(rules[key])) // concat enables both functions and arrays of functions
    const value = _.get(data, key)

    const error = rule(value, data)
    if (error) {
      errors = _.set(errors, key, error)
    }
  })

  return errors
}
