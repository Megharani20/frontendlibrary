import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="https://i.pinimg.com/474x/fe/bf/2d/febf2d8478350bf7e4472b6e2327c381.jpg" alt=''/>
                <img src="https://i.pinimg.com/474x/e1/75/4f/e1754f94c2674c925da99d4395369b42.jpg" alt=''/>
                <img src="https://i.pinimg.com/474x/a9/15/ae/a915ae931ca90434bb73395066f90b7b.jpg" alt=''/>
                <img src="https://i.pinimg.com/474x/7f/91/ee/7f91ee877695ae5dc4dfdaba8b7c0c36.jpg" alt=''/>
                <img src="https://i.pinimg.com/474x/91/98/b1/9198b1e49ab7dc816c94c1a7d32c6794.jpg" alt=''/>
                <img src="https://i.pinimg.com/474x/1d/e4/9c/1de49c4ffd46f9113185854feff05cbb.jpg" alt=''/>
               
        
            </div>
            
        </div>
    )
}

export default PhotoGallery