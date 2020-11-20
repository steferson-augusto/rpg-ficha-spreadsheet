import { Container, ButtonProps } from './styles'

const Button: React.FC<ButtonProps> = ({
  children,
  primary = true,
  icon = '',
  ...rest
}) => {
  return (
    <Container primary={primary} {...rest}>
      {icon.length > 0 && <i className={`fa fa-${icon}`} />}
      {children}
    </Container>
  )
}

export default Button
