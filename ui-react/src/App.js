import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import GroceryListDialog from './grocery-list-dialog';
import { Switch, Route, Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">SOBA 2021</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#groceries">Grocery List</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/about">
            <p>THIS IS THE ABOUT PATH</p>
          </Route>
          <Route path="/groceries">
            <p>THIS IS THE GROCERIES PATH</p>
          </Route>
          <Route path="/">
            <p>THIS IS THE HOME PATH</p>
          </Route>
        </Switch>
        {/* <GroceryListDialog /> */}
      </div>
    </Router>
  );
}

export default App;
