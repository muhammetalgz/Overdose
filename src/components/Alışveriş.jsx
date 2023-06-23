import React from 'react'
import '../components/Alışveriş.css';
import Image from '../İmage/download.png'

function Alışveriş() {
	return (
		<section>
			<div class="container2">
				<div class="card">
					<div class="content">
						<div class="imgBx">
							<img src={Image} />
						</div>
						<div class="contentBx">
							<h3>OVERDOSE<br /><span>OVERDOSE</span></h3>
						</div>
					</div>
					<div className='sci'>
						<li>
							<a href="#"  >Satın Al</a>
						</li>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Alışveriş