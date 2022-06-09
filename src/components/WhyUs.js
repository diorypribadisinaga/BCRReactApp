import React from 'react'
import { Container,Card } from 'react-bootstrap'
import {BiTimeFive} from "react-icons/bi"
import {FaTrophy,FaRegThumbsUp,FaTag} from "react-icons/fa"

export default function WhyUs() {
    return (
        <div className='py-3 why' data-aos="zoom-in">
            <Container>
                <div className='row text-center mb-3' data-aos="zoom-in-up"  data-aos-delay="150" data-aos-duration="2000">
                    <h4>Why Us?</h4>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div className='row' data-aos="fade-up-right" data-aos-delay="170" data-aos-duration="2000">
                    <div className='col-lg-3 mb-2'>
                        <Card>
                            <div className='judul rounded-circle p-2 m-2 mx-3 pt-1 rounded-circle' style={{background:'#f9cc00',width:"max-content"}}>
                                <FaRegThumbsUp style={{fontSize:'20px'}} />
                            </div>
                            <Card.Body>
                                <Card.Title>Mobil Lengkap</Card.Title>
                                <Card.Text>
                                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-3 mb-2'>
                        <Card>
                            <div className='judul rounded-circle p-2 m-2 mx-3 pt-1 rounded-circle' style={{background:'#fa2c5a',width:"max-content"}}>
                                <FaTag className='text-white' style={{fontSize:'20px'}} />
                            </div>
                            <Card.Body>
                                <Card.Title>Harga Murah</Card.Title>
                                <Card.Text>
                                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-3 mb-2'>
                        <Card>
                            <div className='judul rounded-circle p-2 pt-1 m-2 mx-3' style={{background:'#08449d',width:"max-content"}}>
                                <BiTimeFive className='text-white' style={{fontSize:'20px'}} />
                            </div>
                            <Card.Body>
                                <Card.Title>Layanan 24 Jam</Card.Title>
                                <Card.Text>
                                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-3 mb-2'>
                        <Card>
                            <div className='judul rounded-circle p-2 m-2 mx-3' style={{background:'#07c06a',width:"max-content"}}>
                                <FaTrophy className='text-white' style={{fontSize:'20px'}} />
                            </div>
                            <Card.Body>
                                <Card.Title>Supir profesional</Card.Title>
                                <Card.Text>
                                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    )
}
