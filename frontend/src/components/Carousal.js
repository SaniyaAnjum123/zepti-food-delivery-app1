import React from "react";

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <ol className="carousel-indicators">
        <div class="carousel-caption d-none d-md-block" >
       
      </div>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src="ui.jpg" className="d-block w-100" alt="First slide" style={{ height: "600px", objectFit: "cover" }} />
          </div>
          <div className="carousel-item">
          <img src="uh.jpg" className="d-block w-100" alt="Third slide" style={{ height: "600px", objectFit: "cover" }} />
          </div>
          <div className="carousel-item">
          <img src="bn.jpg" className="d-block w-100" alt="Second slide" style={{ height: "600px", objectFit: "cover" }} />
          </div>
        </div>
        {/* Previous Button */}
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        {/* Next Button */}
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
}        