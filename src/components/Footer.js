import React from 'react'
import { Container } from 'react-bootstrap'
import {SiFacebook,SiInstagram} from "react-icons/si"
import {BsTwitter,BsWhatsapp} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
export default function Footer() {
    return (
        <div className='footer py-5' style={{background:'#212529'}}>
            <Container className='text-white'>
                <div className='row'>
                    <div className='col-lg-3 mb-3'>
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className='col-lg-3 mb-3 align-self-center'>
                        <div className='my-2' style={{fontSize:'17px'}}>Our Service</div>
                        <div className='my-2' style={{fontSize:'17px'}}>Why Us</div>
                        <div className='my-2' style={{fontSize:'17px'}}>Testimonials</div>
                        <div className='my-2' style={{fontSize:'17px'}}>FAQ</div>
                    </div>
                    <div className='col-lg-3 mb-3 text-white'>
                        <p>Connect With Us</p>
                        <a style={{fontSize:"24px"}} className='mx-2' href='https://www.facebook.com/diory.sinaga/' target={'blank'}><SiFacebook/></a>
                        <a style={{fontSize:"24px"}} className='mx-2' href='https://www.instagram.com/diorypribadi_sinaga/' target={'blank'}><SiInstagram/></a>
                        <a style={{fontSize:"24px"}} className='mx-2' href='https://twitter.com/DiorySinaga' target={'blank'}><BsTwitter/></a>
                        <a style={{fontSize:"24px"}} className='mx-2' href='https://gmail.com' target={'blank'}><AiOutlineMail/></a>
                        <a style={{fontSize:"24px"}} className='mx-2' href='https://wa.me/6281276815688' target={'blank'}><BsWhatsapp/></a>
                    </div>
                    <div className='col-lg-3 mb-3'>
                        <p>Copyright Binar 2022</p>
                        <div className='' style={{background:'#0d28a6',width:'140px',height:'40px',color:'#0d28a6'}}>
                            gfdgfg
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
