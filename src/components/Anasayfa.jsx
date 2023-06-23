import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from '../İmage/download.png'

function Anasayfa() {
  return (
    <Container>
      <div className='container-2'>
        <div className="container_content">
          <div className="container_content_inner">
            <div className="title">
              <h1>OVERDOSE</h1>
            </div>
            <div className="par">
              <p>
                Cupiditate alias odio omnis minima veritatis saepe porro, repellendus natus vitae, sequi exercitationem ipsam, qui possimus sit eveniet laborum sapiente quisquam quae neque velit?
              </p>
            </div>
            <div className="btns">
             <a href="#contents"><button className='btns_more'> Detaylar </button></a>
            </div>
          </div>
        </div>
        <div className="container_outer_img">
          <div className="img-inner">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
      <div id='contents' className='contents text-center mt-5'>
        <h3>Kitap'ın İçindekiler</h3>
        <div>
        <span>A Konusu</span>
        <span>B Konusu</span>
        <span>C Konusu</span>
        <span>D Konusu</span>
        <span>E Konusu</span>
        <span>F Konusu</span>
        <span>G Konusu</span>
        <span>H Konusu</span>
        </div>
      </div>
      <div className="overlay"></div>
    </Container>

  )
}

export default Anasayfa
