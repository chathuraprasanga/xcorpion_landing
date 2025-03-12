import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
// @ts-ignore
import image01 from '../assets/01.jpg'
// @ts-ignore
import image02 from '../assets/02.jpg'
// @ts-ignore
import image03 from '../assets/03.jpg'

const SampleCarousel = () => {
    return (
        <Carousel withIndicators height={450} loop>
            <Carousel.Slide>
                <Image
                    src={image01}
                    alt="Nature"
                    height={450}
                />
            </Carousel.Slide>
            <Carousel.Slide>
                <Image
                    src={image02}
                    alt="Water"
                    height={450}
                />
            </Carousel.Slide>
            <Carousel.Slide>
                <Image
                    src={image03}
                    alt="City"
                    height={450}
                />
            </Carousel.Slide>
        </Carousel>
    );
};

export default SampleCarousel;
