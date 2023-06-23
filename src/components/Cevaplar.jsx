import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Cevaplar() {
  return (
    <Container>
      <div className="box-wrap text-center">
        <Link to="/Ünite1" className='box'>Ünite-1</Link>
        <Link to="/Ünite2" className='box'>Ünite-2</Link>
        <Link to="/Ünite3" className='box'>Ünite-3</Link>
        <Link to="/Ünite4" className='box'>Ünite-4</Link>
        <Link to="/Ünite5" className='box'>Ünite-5</Link>
        <Link to="/Ünite6" className='box'>Ünite-6</Link>
        <Link to="/Ünite7" className='box'>Ünite-7</Link>
        <Link to="/Ünite8" className='box'>Ünite-8</Link>
      </div>
    </Container>
  )
}

export default Cevaplar
