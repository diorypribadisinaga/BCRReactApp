import React from 'react'
import { Container,Carousel } from 'react-bootstrap'
import mobil from '../images/car01.min.jpg'
import { Card } from 'react-bootstrap'

export default function Testimonial() {
    return (
        <div className='py-4'>
            <Container>
                <div className='row text-center'>
                    <h4 style={{fontWeight:"670"}}>Testimonials</h4>
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>
                <div className='col-lg-8 offset-lg-2'>
                    <Carousel>
                        <Carousel.Item>
                            {/* <div >
                                <div className='col-lg-6'>
                                    <img src={mobil} alt='mobil'/>
                                </div>
                                <div className='col-lg-6'>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </div>
                            </div> */}
                        </Carousel.Item>
                        <Carousel.Item className='row'>
                            <Card>
                                <div className='col-lg-6'>
                                    <Card.Img variant="top" src={mobil} />
                                </div>
                                <div className='col-lg-6'>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card content.
                                        </Card.Text>
                                        {/* <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </div>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className='row'>
                                <div className='col-lg-6'>
                                    <Card.Img variant="top" src={mobil} />
                                </div>
                                <div className='col-lg-6'>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card content.
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                                </div>
                            </Card>
                        </Carousel.Item>
                        </Carousel>
                </div>
            </Container>
        </div>
    )
}
