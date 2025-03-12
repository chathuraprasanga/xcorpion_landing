import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
// @ts-ignore
import image01 from '../assets/01.jpg';
// @ts-ignore
import image02 from '../assets/02.jpg';
// @ts-ignore
import image03 from '../assets/03.jpg';

const SampleCarousel = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const carouselHeight = isMobile ? 200 : 400;

    return (
        <Carousel withIndicators height={carouselHeight} loop>
            <Carousel.Slide>
                <Image
                    src={image01}
                    alt="Nature"
                    height={carouselHeight}
                    fit="cover"
                />
            </Carousel.Slide>
            <Carousel.Slide>
                <Image
                    src={image02}
                    alt="Water"
                    height={carouselHeight}
                    fit="cover"
                />
            </Carousel.Slide>
            <Carousel.Slide>
                <Image
                    src={image03}
                    alt="City"
                    height={carouselHeight}
                    fit="cover"
                />
            </Carousel.Slide>
        </Carousel>
    );
};

export default SampleCarousel;
