import { Tooltiped } from '../index'
import { Item } from './styles'

interface CollapsibleProps {
  id: string
  label: string
  note?: boolean
}

const Collapsible: React.FC<CollapsibleProps> = ({
  children,
  id,
  label,
  note
}) => {
  return (
    <Item>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>
        {label}
        {note && <i className="fas fa-info-circle" />}
      </label>
      <div className="item-body">{children}</div>
    </Item>
  )
}

export default Collapsible
