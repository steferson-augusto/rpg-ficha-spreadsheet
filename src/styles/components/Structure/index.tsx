import { Container, Left, LogoutButton, Sidebar, Center, Mark } from './styles'

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
        <LogoutButton href="#">Logout</LogoutButton>
      </Container>

      <Sidebar className="sidebar">
        <Center>
          <img src="/images/1.png" className="profile_image" alt="" />
          <h4>Jessica</h4>
        </Center>
        <a href="#">
          <i className="fas fa-desktop"></i>
          <span>Dashboard</span>
        </a>
        <a href="#">
          <i className="fas fa-cogs"></i>
          <span>Components</span>
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
