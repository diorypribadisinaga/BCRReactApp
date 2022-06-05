import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Button } from 'react-bootstrap';
import mobil from '../images/img_car.png'


export default function Jumbotron() {
    return (    
        <div className='Jumbotron pt-5' style={{background:'#f1f3ff'}}>
            <Container>
                <div className='row'>
                    <div className='col-lg-6 align-self-center'>
                        <h3 className='mb-3' style={{fontWeight:"700"}}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h3>
                        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        <Button  style={{background:'#5cb85f'}} className='py-2 rounded-3 px-3 mt-3'>Mulai Sewa Mobil</Button>{' '}
                    </div>
                    <div className='col-lg-6'>
                        <img width={'617px'} height={'330px'} src={mobil} alt='mobil'/>
                    </div>
                </div>
            </Container>
        </div>
    )
}
