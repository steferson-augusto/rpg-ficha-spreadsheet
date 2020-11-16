import { GetStaticProps } from 'next'
import Head from 'next/head'

import api from '../services/api'
import Structure from '../styles/components/Structure'
import Atributo from '../styles/components/Atributo'

const Atributos = ({ atributos }) => {
  return (
    <div>
      <Head>
        <title>Atributos</title>
      </Head>

      <main>
        <Structure title="Atributos">
          {atributos.map((atributo, index) => (
            <Atributo
              key={index}
              data={atributo.data}
              label={atributo.label}
              rowIndex={atributo.rowIndex}
            />
          ))}
        </Structure>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/api/atributos/')

  return {
    props: { ...data }
  }
}

export default Atributos
