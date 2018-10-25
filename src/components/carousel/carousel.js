import React from 'react';
import './carousel.css'
import img3 from './wei-cheng-wu-416066-unsplash.jpg'

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
          <img className="d-block w-100" src="https://images.unsplash.com/photo-1540263579433-e0ef3a3f6de9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6f38484ebe8c653b03681d06315a246&auto=format&fit=crop&w=1936&q=80" alt="First slide"/>
          <div className="carousel-caption d-none d-md-block">
            <a className="imgTags"
              href="https://unsplash.com/@sgoodgame?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
              target="_blank"
              rel="noopener noreferrer"
              title="Download free do whatever you want high-resolution photos from Sam Goodgame">
              <span style={{display:'inline-block', padding:'2px 3px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="imgicon" viewBox="0 0 32 32">
                  <title>unsplash-logo</title>
                  <path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path>
                </svg>
              </span>
              <span style={{display:'inline-block', padding:'2px 3px'}}>Sam Goodgame</span>
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100"
            src="https://images.unsplash.com/photo-1513109627293-2883c154c9ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c3ae351c0e8f09a4b410dc27b931b125&auto=format&fit=crop&w=1900&q=80"
            alt="Second slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <a className="imgTags"
            href="https://unsplash.com/@andrew_haimerl?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
            target="_blank"
            rel="noopener noreferrer"
            title="Download free do whatever you want high-resolution photos from Andrew Haimerl">
              <span style={{display:'inline-block', padding:'2px 3px'}}>
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="imgicon"
                  viewBox="0 0 32 32">
                  <title>unsplash-logo</title>
                  <path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path>
                </svg>
              </span>
              <span style={{display:'inline-block', padding:'2px 3px'}}>Andrew Haimerl</span>
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <a className="imgTags"
            href="https://unsplash.com/@spencerwuwu?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
            target="_blank"
            rel="noopener noreferrer"
            title="Download free do whatever you want high-resolution photos from Andrew Haimerl">
              <span style={{display:'inline-block', padding:'2px 3px'}}>
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="imgicon"
                  viewBox="0 0 32 32">
                  <title>unsplash-logo</title>
                  <path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path>
                </svg>
              </span>
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
