import React from "react";
// import Carousel from "nuka-carousel"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeCarousel = ({ slides }) => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
		// responsive: [
		// 	{
		// 		breakpoint: 1400,
		// 		settings: {
		// 			slidesToShow: 3,
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 700,
		// 		settings: {
		// 			slidesToShow: 2.25,
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 550,
		// 		settings: {
		// 			slidesToShow: 1.5,
		// 		}
		// 	},
		// ]
	};

	return (
		<div className="home-carousel" style={{height: '200px'}}>
			<Slider {...settings}>
				{slides.map((slide, index) => (
					<div style={{border: '1px solid red', height:'200px', width:'800px'}}>
						<img alt={slide.title} src={slide.imageSrc} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default HomeCarousel;
