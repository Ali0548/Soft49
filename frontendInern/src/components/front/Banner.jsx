import React from 'react'

const Banner = () => {
  return (
    <div className="container-fluid p-0">
    <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
            <li data-target="#header-carousel" data-slide-to="1"></li>
            <li data-target="#header-carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="img-fluid" src="banner.png" style={{width:'100%'}} alt="Image"/>
                <div className="carousel-caption d-flex align-items-center justify-content-center">
                    <div className="p-5" style={{width: '100%', maxWidth: '900px'}}>
                        <h5 className="text-primary text-uppercase mb-md-3">Construction Services</h5>
                        <h1 className="display-3 text-white mb-md-4">Best Quality Solution In Construction Services</h1>
                        <a href="" className="btn btn-primary">Get A Quote</a>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img className="img-fluid" src="banner2.jpg" style={{width:'100%'}} alt="Image"/>
                <div className="carousel-caption d-flex align-items-center justify-content-center">
                    <div className="p-5" style={{width: '100%', maxWidth: '900px'}}>
                        <h5 className="text-primary text-uppercase mb-md-3">Maintainanace Services</h5>
                        <h1 className="display-3 text-white mb-md-4">Highly Professional Maintainanace Services</h1>
                        <a href="" className="btn btn-primary">Get A Quote</a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default Banner