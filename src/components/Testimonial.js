import React from 'react'
import { Container,Carousel } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import {FaStar,FaStarHalf} from 'react-icons/fa'
import gambar1 from "../images/1.svg"
import gambar2 from "../images/2.svg"

export default function Testimonial() {
    return (
        <div className='py-4'>
            <Container>
                <div className='row text-center'>
                    <h4 style={{fontWeight:"670"}}>Testimonials</h4>
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>
                <div className='col-lg-8 offset-lg-2'>
                    <Carousel style={{background:'#f1f3ff'}} data-aos="flip-left" data-aos-duration="2000">
                        <Carousel.Item>
                        <div className='row'>
                                    <div className='col-lg-6 text-center'>
                                        <Card.Img style={{width:"270px"}} className='py-3' variant="top" src={gambar1} />
                                    </div>
                                    <div className='col-lg-6 align-self-center'>
                                        <Card.Body>
                                            <Card.Title>Sukijan</Card.Title>
                                            <Card.Text>
                                            <div>
                                                <FaStar style={{color:'#f9cc00'}} className='mx-1'/><FaStar style={{color:'#f9cc00'}} className='mx-1'/><FaStar style={{color:'#f9cc00'}} className='mx-1'/><FaStar style={{color:'#f9cc00'}} className='mx-1'/><FaStarHalf FaStar style={{color:'#f9cc00'}} className='mx-1'/>
                                            </div>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla unde earum, minima harum perferendis est necessitatibus eaque id explicabo dolore in ullam, maiores nesciunt eveniet adipisci! At quo nesciunt atque?.
                                            </Card.Text>
                                            {/* <Button variant="primary">Go somewhere</Button> */}
                                        </Card.Body>
                                    </div>
                                </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card style={{background:'#f1f3ff'}}>
                                <div className='row'>
                                    <div className='col-lg-6 text-center'>
                                        <Card.Img className='py-3' style={{width:"270px"}} variant="top" src={gambar2} />
                                    </div>
                                    <div className='col-lg-6 align-self-center'>
                                        <Card.Body>
                                            <Card.Title>Suminem</Card.Title>
                                            <Card.Text>
                                            <div>
                                                <FaStar style={{color:'#f9cc00'}} className='mx-1'/><FaStar style={{color:'#f9cc00'}} className='mx-1'/><FaStar style={{color:'#f9cc00'}} className='mx-1'/><FaStar style={{color:'#f9cc00'}} className='mx-1'/><FaStarHalf FaStar style={{color:'#f9cc00'}} className='mx-1'/>
                                            </div>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla unde earum, minima harum perferendis est necessitatibus eaque id explicabo dolore in ullam, maiores nesciunt eveniet adipisci! At quo nesciunt atque?.
                                            </Card.Text>
                                            {/* <Button variant="primary">Go somewhere</Button> */}
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card style={{background:'#f1f3ff'}}>
                            <div className='row'>
                                    <div className='col-lg-6 text-center'>
                                        <Card.Img className='py-3' style={{width:"270px"}} variant="top" src={gambar2} />
                                    </div>
                                    <div className='col-lg-6 align-self-center'>
                                        <Card.Body>
                                            <Card.Title>Sukirman</Card.Title>
                                            <Card.Text>
                                            <div>
                                                <FaStar style={{color:'#f9cc00'}} className='mx-1'/><FaStar style={{color:'#f9cc00'}} className='mx-1'/><FaStar style={{color:'#f9cc00'}} className='mx-1'/><FaStar style={{color:'#f9cc00'}} className='mx-1'/><FaStarHalf FaStar style={{color:'#f9cc00'}} className='mx-1'/>
                                            </div>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla unde earum, minima harum perferendis est necessitatibus eaque id explicabo dolore in ullam, maiores nesciunt eveniet adipisci! At quo nesciunt atque?.
                                            </Card.Text>
                                            {/* <Button variant="primary">Go somewhere</Button> */}
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Container>
        </div>
    )
}
