import React from "react";
import Carousel from "nuka-carousel"


const HomeCarousel = ({ slides }) => {
	return (
		<div className="home-carousel" style={{height: '200px'}}>
			<Carousel style={{border: '1px solid #e3e3e3', borderRadius: '10px', height:"300px"}} dots={true} arrows={true} autoplay={true} autoplayInterval={5000} wrapAround={true}>
				{slides.map((slide, index) => (
					<img height={300} alt={slide.title} src={slide.imageSrc} />
				))}
			</Carousel>
		</div>
	);
};

export default HomeCarousel;
