import { Item } from './styles'

interface CollapsibleProps {
  id: string
  label: string
}

const Collapsible: React.FC<CollapsibleProps> = ({ children, id, label }) => {
  return (
    <Item>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{label}</label>
      <div className="item-body">{children}</div>
    </Item>
  )
}

export default Collapsible
