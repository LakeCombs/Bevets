
export const useHome = () => {

    const slides = [
        {
            imageSrc: "/assets/MacBook Pro 14_ - 1bg2.png",
            title: "Slide 1",
            subtitle: "Subtitle 2",
            buttonText: "View Details",
            route: "/slide1-details",
        },
        {
            imageSrc: "/assets/MacBook Pro 14_ - 1bg.png",
            title: "Slide 2",
            subtitle: "Subtitle 2",
            buttonText: "Learn More",
            route: "/slide2-details",
        },
        {
            imageSrc: "/assets/MacBook Pro 14_ - 1bg4 (1).png",
            title: "Slide 3",
            subtitle: "Subtitle 2",
            buttonText: "Shop Now",
            route: "/slide3-shop",
        },
    ];

    const categoryList = [
        {
            _id: '646d44ab11a7bd6f9ca790d3',
            name: 'Alcoholic Drinks',
            desc: 'All Achoholics',
            createdAt: '2023-05-23T22:56:43.835Z',
            updatedAt: '2023-05-23T22:56:43.835Z',
            __v: 0,
            image: 'https://res.cloudinary.com/fitrip/image/upload/v1687344966/bevets/drinks_image_holder_hh9daw.png'
        }
    ]


    return {
        state:{
            slides,
            categoryList,
        },
        actions:{

        }
    }
}