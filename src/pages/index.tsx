import Head from 'next/head'

import { Text } from '../styles/pages/home'
import { Body } from '../styles/components'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Parabéns!</title>
      </Head>

      <main>
        <Body>
          <Text>Home</Text>
        </Body>
      </main>
    </div>
  )
}

export default Home
