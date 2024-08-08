import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1616070152767-3eb99cf10509?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Cinderella Carousel </h3>
                        <p>Cinderella, the most popular of all fairy tales, is a time-less story of virtue rewarde</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 amz"
                        src="https://www.pluggedin.com/wp-content/uploads/2019/12/harry-potter-and-the-sorcerers-stone.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Harry Potter and the Sorcerer's Stone</h3>
                        <p>Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 amz "
                        src="https://wallpapercave.com/wp/wp2252135.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>The Little Prince</h3>
                        <p>The Little Prince is a novella written and illustrated by French writer and military pilot Antoine de Saint-Exupéry.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
