import { useCallback, useEffect, useRef, useState } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { getAllPericias, PericiaInterface } from './api/pericias'
import Structure from '../styles/components/Structure'
import Pericia from '../styles/components/Pericia'
import Collapsible from '../styles/components/Collapsible'
import { Container, List } from '../styles/components/Collapsible/styles'
import useDebounce from '../hooks/useDebounce'
import { Body, SearchBox } from '../styles/pages/pericias'

interface PericiaProps {
  pericias: PericiaInterface[]
}

const Pericias: React.FC<PericiaProps> = ({ pericias }) => {
  const [data, setData] = useState(pericias)
  const [query, setQuery] = useState('')
  const debounce = useDebounce(query)
  const debounced = useRef({ value: false })

  useEffect(() => {
    if (debounced.current.value) {
      const values = pericias.filter(pericia =>
        pericia.label.toLowerCase().includes(query.toLowerCase())
      )
      setData(values)
    }
  }, [debounce])

  const handleQueryChange = useCallback(e => {
    debounced.current.value = true
    setQuery(e.target.value)
  }, [])

  return (
    <div>
      <Head>
        <title>Perícias</title>
      </Head>

      <main>
        <Structure title="Perícias">
          <Body>
            <SearchBox>
              <input value={query} onChange={handleQueryChange} />
              <i className="fas fa-search" />
            </SearchBox>
            <Container>
              <List>
                {data.map(pericia => (
                  <Collapsible
                    key={pericia.rowIndex}
                    id={`pericia-${pericia.rowIndex}`}
                    label={pericia.label}
                    info={pericia?.note?.length > 0}
                  >
                    <Pericia {...pericia} />
                  </Collapsible>
                ))}
              </List>
            </Container>
          </Body>
        </Structure>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllPericias()

  return {
    props: { pericias: data }
  }
}

export default Pericias
