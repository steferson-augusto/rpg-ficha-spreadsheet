import { useCallback, useEffect, useRef, useState } from 'react'
import axios from 'axios'

import { Dado, Tooltiped } from '../index'
import { Container, Note } from './styles'
import { PericiaInterface } from '../../../pages/api/pericias'
import useDebounce from '../../../hooks/useDebounce'

const Pericia: React.FC<PericiaInterface> = ({ data, rowIndex, note }) => {
  const [values, setValues] = useState(data)
  const debounced = useRef({ value: false })
  const valueRef = useRef({ value: '', label: '' })
  const debounce = useDebounce(values)

  const handleChange = useCallback(
    index => e => {
      debounced.current.value = true
      const updated = [...values]
      updated[index].value = e.target.value
      valueRef.current = { value: e.target.value, label: values[index].label }
      setValues(updated)
    },
    [values]
  )

  useEffect(() => {
    if (debounced.current.value) {
      const value = { rowIndex, ...valueRef.current }
      axios.put('/api/pericias', value)
    }
  }, [debounce])

  return (
    <>
      <Container>
        {values.map((dado, index) => (
          <Tooltiped key={index} data-tooltip={dado.label}>
            <Dado
              value={dado.value}
              length={dado.value.length}
              onChange={handleChange(index)}
            />
          </Tooltiped>
        ))}
      </Container>

      {note?.length > 0 && <Note>{note}</Note>}
    </>
  )
}

export default Pericia
