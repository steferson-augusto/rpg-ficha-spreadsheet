import Image from 'next/image'

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
            <i className="fas fa-bars" id="sidebar_btn"></i>
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
        <a href="/atributos">
          <i className="fas fa-user-cog"></i>
          <span>Atributos</span>
        </a>
        <a href="/pericias">
          <i className="fas fa-user-ninja"></i>
          <span>Perícias</span>
        </a>
        <a href="#">
          <i className="fas fa-table"></i>
          <span>Tables</span>
        </a>
        <a href="#">
          <i className="fas fa-th"></i>
          <span>Forms</span>
        </a>
        <a href="#">
          <i className="fas fa-info-circle"></i>
          <span>About</span>
        </a>
        <a href="#">
          <i className="fas fa-sliders-h"></i>
          <span>Settings</span>
        </a>
      </Sidebar>
      <div className="content">{children}</div>
    </>
  )
}

export default Structure
