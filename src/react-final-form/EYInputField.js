/**
 * Wrapepr that connects our custom EYInput with React-final-form
 */

import { EYInput } from '../components/EYInput'

export const EYInputField = ({ input, meta, ...rest }) => {
  return (
    <div>
      <EYInput {...rest} {...input} />
      {meta.touched && meta.error && meta.error}
    </div>
  )
}
