import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { useDrop } from 'react-dnd'

import { StorageInterface } from '../../../../pages/api/itens'
import Card from '../Card'
import { Container } from './styles'
import { DropInterface } from '../Card'
import BoardContext from '../Board/context'

interface ListProps {
  data: StorageInterface
  index: number
}

const List: React.FC<ListProps> = ({ data, index: listIndex }) => {
  const { create } = useContext(BoardContext)

  const [, dropRef] = useDrop<DropInterface, null, null>({
    accept: 'CARD'
  })

  const sum = useMemo(() => {
    return data.itens.reduce((total, { weight }) => total + weight, 0)
  }, [data.itens])

  const handleAdd = useCallback(() => {
    create(listIndex)
  }, [])

  return (
    <Container>
      <header>
        <h2>
          {data.label}
          {sum > 0 && <label>{sum} kg</label>}
        </h2>
        <button type="button" onClick={handleAdd}>
          <i className="fas fa-plus" />
        </button>
      </header>

      <ul ref={dropRef}>
        {data.itens.map((item, index) => (
          <Card
            key={item.id}
            listIndex={listIndex}
            index={index}
            label={item.label}
            weight={item.weight}
            note={item.note}
            row={item.row}
          />
        ))}
      </ul>
    </Container>
  )
}

export default List
