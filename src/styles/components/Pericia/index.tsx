import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

import { Container, Dado, Tooltiped } from './styles'
import { PericiaInterface } from '../../../pages/api/pericias'
import useDebounce from '../../../hooks/useDebounce'

const Pericia: React.FC<PericiaInterface> = ({ data, label, rowIndex }) => {
  const [values, setValues] = useState(data)
  const debounced = useRef({ value: false })
  const valueRef = useRef({ value: '', label: '' })
  const debounce = useDebounce(values)

  const change = index => e => {
    debounced.current.value = true
    const updated = [...values]
    updated[index].value = e.target.value
    valueRef.current = { value: e.target.value, label: values[index].label }
    setValues(updated)
  }

  useEffect(() => {
    if (debounced.current.value) {
      console.log(`deu debounce ${label}`)
      const value = { rowIndex, ...valueRef.current }
      axios.put('/api/pericias', value)
      console.log(value)
    }
  }, [debounce])

  return (
    <Container>
      {values.map((dado, index) => (
        <Tooltiped key={index} data-tooltip={dado.label}>
          <Dado
            value={dado.value}
            length={dado.value.length}
            onChange={change(index)}
          />
        </Tooltiped>
      ))}
    </Container>
  )
}

export default Pericia
