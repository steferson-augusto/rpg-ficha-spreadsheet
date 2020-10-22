import Link from 'next/link'

import { Button, ButtonProps } from './styles'

const ButtonEspecial: React.FC<ButtonProps> = props => {
  return (
    <Link href={props.destiny}>
      <Button
        bgColor={props.bgColor}
        colorText={props.colorText}
        hoverColorText={props.hoverColorText}
        lineColor={props.lineColor}
      >
        <span />
        <span />
        <span />
        <span />
        {props.text}
      </Button>
    </Link>
  )
}

export default ButtonEspecial
