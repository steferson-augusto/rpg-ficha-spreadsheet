import { GetStaticProps } from 'next'
import Head from 'next/head'

import { getAllPericias, PericiaInterface } from './api/pericias'
import Structure from '../styles/components/Structure'
import Pericia from '../styles/components/Pericia'
import Collapsible from '../styles/components/Collapsible'
import { Container, List } from '../styles/components/Collapsible/styles'

interface PericiaProps {
  pericias: PericiaInterface[]
}

const Pericias: React.FC<PericiaProps> = ({ pericias }) => {
  return (
    <div>
      <Head>
        <title>Perícias</title>
      </Head>

      <main>
        <Structure title="Perícias">
          <Container>
            <List>
              {pericias.map(pericia => (
                <Collapsible
                  key={pericia.rowIndex}
                  id={`pericia-${pericia.rowIndex}`}
                  label={pericia.label}
                >
                  <Pericia {...pericia} />
                </Collapsible>
              ))}
            </List>
          </Container>
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
