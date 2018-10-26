import React from 'react';
import './carousel.css';
import img3 from './wei-cheng-wu-416066-unsplash.jpg';
import img2 from './ishan-seefromthesky-162040-unsplash.jpg';
import img1 from './oldskool-photography-181528-unsplash.jpg';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={img1} alt="First slide"/>
          <div className="carousel-caption d-none d-md-block">
            <a className="imgTags" href="https://unsplash.com/@oldskoolphotography?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge">
              <span style={{display:'inline-block', padding:'2px 3px'}}>Photo by oldskool photography on Unsplash</span>
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img2} alt="Second slide"/>
          <div className="carousel-caption d-none d-md-block">
            <a className="imgTags" href="">
              <span style={{display:'inline-block', padding:'2px 3px'}}>Photo by Ishan @seefromthesky on Unsplash</span>
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img3} alt="Third slide"/>
          <div className="carousel-caption d-none d-md-block">
            <a className="imgTags" href="">
              <span style={{display:'inline-block', padding:'2px 3px'}}>Photo by Wei-Cheng Wu on Unsplash</span>
            </a>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
