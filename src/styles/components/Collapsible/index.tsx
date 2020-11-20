import { Item } from './styles'

interface CollapsibleProps {
  id: string
  label: string
  info?: boolean
  note?: string
}

const Collapsible: React.FC<CollapsibleProps> = ({
  children,
  id,
  label,
  info,
  note
}) => {
  return (
    <Item>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>
        {label}
        {info && <i className="fas fa-info-circle" />}
        {note?.length > 0 && <span>{note}</span>}
      </label>
      <div className="item-body">{children}</div>
    </Item>
  )
}

export default Collapsible
