import Image from 'next/image'
import Link from 'next/link'

import { Container, Left, Sidebar, Center, Mark } from './styles'

interface StructureProps {
  title: string
}

const Structure: React.FC<StructureProps> = ({ children, title }) => {
  return (
    <>
      <input type="checkbox" id="check" />
      <Container>
        <Mark>
          <label htmlFor="check">
            <i className="fas fa-bars" id="sidebar_btn" />
          </label>
          <Left>
            <h3>
              Minha <span>Ficha</span> &#62; {title}
            </h3>
          </Left>
        </Mark>
      </Container>

      <Sidebar className="sidebar">
        <Center>
          <Image src="/images/avatar.png" width="100" height="100" />
          <h4>Haragin</h4>
        </Center>
        <Link href="/atributos">
          <a>
            <i className="fas fa-user-cog" />
            <span>Atributos</span>
          </a>
        </Link>
        <Link href="/pericias">
          <a>
            <i className="fas fa-user-ninja" />
            <span>Perícias</span>
          </a>
        </Link>
        <Link href="/itens">
          <a>
            <i className="fas fa-boxes" />
            <span>Itens</span>
          </a>
        </Link>
        <Link href="/carteira">
          <a>
            <i className="fas fa-wallet" />
            <span>Carteira</span>
          </a>
        </Link>
      </Sidebar>
      <div className="content">{children}</div>
    </>
  )
}

export default Structure
