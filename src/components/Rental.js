import React from 'react'
import { Container } from 'react-bootstrap'
import gambar from '../images/img_service.png'
import cek from '../images/fi_check.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Rental() {
    return (
        <div className='rental py-5' data-aos="fade-up" data-aos-delay='70'
        data-aos-duration="3000">
            <Container>
                <div className='row'>
                    <div className='col-lg-6 align-self-center mb-4'>
                        <img src={gambar} alt='wanita'/>
                    </div>
                    <div className='col-lg-6 align-self-center'>
                        <h4 style={{fontWeight:"670"}}>Best Car Rental for any kind of trip in (Lokasimu)!</h4>
                        <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <p><img src={cek} style={{marginRight:'10px',background:'#cfd4ed'}} className='p-1 rounded-circle' alt='cek'/> Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                        <p><img src={cek} style={{marginRight:'10px',background:'#cfd4ed'}} className='p-1 rounded-circle' alt='cek'/>  Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                        <p><img src={cek} style={{marginRight:'10px',background:'#cfd4ed'}} className='p-1 rounded-circle' alt='cek'/> Sewa Mobil Jangka Panjang Bulanan</p>
                        <p><img src={cek} style={{marginRight:'10px',background:'#cfd4ed'}} className='p-1 rounded-circle' alt='cek'/> Gratis Antar - Jemput Mobil di Bandara</p>
                        <p><img src={cek} style={{marginRight:'10px',background:'#cfd4ed'}} className='p-1 rounded-circle' alt='cek'/>  Layanan Airport Transfer / Drop In Ou</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
AOS.init();
