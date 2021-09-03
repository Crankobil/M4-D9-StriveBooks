import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"

const AppNavigation = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/">
        <div className="nav-link">BookList</div>
      </Link>

      <Link to="/registration">
        <div className="nav-link">Registration</div>
      </Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
)

export default AppNavigation