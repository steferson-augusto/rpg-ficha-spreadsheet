import { forwardRef, InputHTMLAttributes } from 'react'
import { InputField, Message } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  error?: boolean
  message?: string
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { name, label, error = false, width, message = '', ...rest },
  ref
) => {
  return (
    <InputField error={error} width={width as string}>
      <input id={name} {...rest} ref={ref} />
      <label htmlFor={name}>{label}</label>

      {message.length > 0 && <Message error={error}>{message}</Message>}
    </InputField>
  )
}

export default forwardRef(Input)
