import React, { useRef, useContext, useState, useCallback } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import { Container } from './styles'
import BoardContext from '../Board/context'
import { Tooltiped } from '../../../components/index'

export interface CardProps {
  label: string
  note?: string
  weight: number
  index: number
  listIndex: number
  row: number
}

export interface DropInterface {
  type: 'CARD'
  index: number
  listIndex: number
}

const Card: React.FC<CardProps> = props => {
  const { label, weight, index, listIndex, note } = props
  const [dragged, setDragged] = useState(false)
  const ref = useRef()

  const { move, edit, oldIndex, setOldIndex, updateStorage } = useContext(
    BoardContext
  )

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
    end: () => {
      setDragged(false)
    }
  })

  const [, dropRef] = useDrop<DropInterface, null, null>({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex
      const targetListIndex = listIndex

      const draggedIndex = item.index
      const targetIndex = index

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        setDragged(true)
        return
      }

      setDragged(false)
      if (ref.current) {
        const targetSize = ref.current.getBoundingClientRect()
        const targetCenter = (targetSize.bottom - targetSize.top) / 2

        const draggedOffset = monitor?.getClientOffset()
        const draggedTop = draggedOffset.y - targetSize.top

        if (draggedIndex < targetIndex && draggedTop < targetCenter) {
          return
        }

        if (draggedIndex > targetIndex && draggedTop > targetCenter) {
          return
        }

        if (oldIndex.current.value === -1) {
          setOldIndex(draggedListIndex)
        }

        move(draggedListIndex, targetListIndex, draggedIndex, targetIndex)
        item.index = targetIndex
        item.listIndex = targetListIndex
      }
    },
    drop() {
      setDragged(false)
      updateStorage(oldIndex.current.value, listIndex)
      setOldIndex(-1)

      return null
    }
  })

  const handleClick = useCallback(() => {
    edit(props)
  }, [])

  dragRef(dropRef(ref))

  return (
    <Container ref={ref} isDragging={isDragging || dragged}>
      <main>
        <p>
          {label}
          <label>{weight} kg</label>
        </p>

        {note?.length > 0 && (
          <Tooltiped data-tooltip={note} background="#333">
            <i className="fas fa-info" />
          </Tooltiped>
        )}
      </main>

      <i className="fas fa-pen" onClick={handleClick} />
    </Container>
  )
}

export default Card
