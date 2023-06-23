import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Logo from '../İmage/logo.png'
import Instagram from '../İmage/instagram.png'
import Linledın from '../İmage/linkedin.png'
import Gmail from '../İmage/gmail.png'

function Header() {

  return (
    <Navbar bg="light" expand="lg" className='navbar'>
      <Container>
        <Link className='logo' to="/Anasayfa"> <img src={Logo} /> </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="./Anasayfa" className='hover-underline-animation'>Anasayfa</Link>
            <Link to="./Cevaplar" className='hover-underline-animation'>Cevaplar</Link>
            <Link to="./Alışveriş" className='hover-underline-animation'>Alışveriş</Link>
          </Nav>
          <div className='social-media'>
          <a href=""> <img src={Linledın} /> </a>
          <a href=""> <img src={Instagram}  /> </a>
          <a href=""> <img src={Gmail} /> </a>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;