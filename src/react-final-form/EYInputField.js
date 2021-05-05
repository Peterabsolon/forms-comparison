import { EYInput } from '../components/EYInput'

export const EYInputField = ({ input, meta, ...rest }) => {
  return (
    <div>
      <EYInput {...rest} {...input} />
      {meta.touched && meta.error && meta.error}
    </div>
  )
}
