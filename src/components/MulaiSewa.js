import React from 'react'
import { Container,Button} from 'react-bootstrap'

export default function MulaiSewa() {
    return (
        <div className='my-4' data-aos="fade-down-left" data-aos-duration="2000" data-aos-delay='90' >
            <Container className='text-center text-white py-5' style={{background:'#0d28a6',borderRadius:'20px',marginLeft:'auto',marginRight:'auto',maxWidth:'90%'}}>
                <h3 className='mb-4'>Sewa Mobil di (Lokasimu) Sekarang</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum temporibus quas vero, aut vitae debitis, iure sequi aliquam modi nam, eveniet repellat similique quam cupiditate neque quae consectetur eos est.</p>
                    <Button  style={{background:'#5cb85f'}} className='py-2 rounded-3 px-3 mt-3'>Mulai Sewa Mobil</Button>{' '}
            </Container>
        </div>
    )
}
