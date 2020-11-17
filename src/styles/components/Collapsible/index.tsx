import { Tooltiped } from '../index'
import { Item } from './styles'

interface CollapsibleProps {
  id: string
  label: string
  note?: string | null
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
        {note?.length && (
          <Tooltiped data-tooltip={note} className="icon" background="#333">
            <i className="fas fa-info-circle" />
          </Tooltiped>
        )}
      </label>
      <div className="item-body">{children}</div>
    </Item>
  )
}

export default Collapsible
