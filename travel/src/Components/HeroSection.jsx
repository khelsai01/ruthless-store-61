import React, { useState, useEffect } from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import dubai from "../Images/dubai.jpg"
import dubai1 from "../Images/dubai1.jpg"
import heroSection1 from "../Images/heroSection1.jpeg"
import heroSection2 from "../Images/heroSection2.jpeg"
import heroSection3 from "../Images/heroSection3.jpeg"
import heroSection4 from "../Images/heroSection4.jpeg"
import heroSection5 from "../Images/heroSection5.jpeg"
import heroSection6 from "../Images/heroSection6.jpeg"
import heroSection7 from "../Images/heroSection7.jpeg"
import Shimla from "../Images/Shimla.jpg"



/*
ArrowForwardIcon
*/

const images = [
    dubai,
    heroSection1,
    heroSection2,
    heroSection3,
    heroSection4,
    heroSection5,
    heroSection6,
    heroSection7,
    Shimla,
    dubai1,
];

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(goToNextImage, 3000); // Slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <Box position="relative" width="100%" height="500px" my={"10px"}>
            <Flex
                align="center"
                justify="space-between"
                width="100%"
                height="100%"
                position="absolute"
            >
                <IconButton
                    aria-label="Previous"
                    size={"lg"}
                    icon={<ArrowBackIcon />}
                    onClick={goToPreviousImage}
                />
                <IconButton
                    aria-label="Next"
                    size={"lg"}
                    icon={<ArrowForwardIcon />}
                    onClick={goToNextImage}
                />
            </Flex>
            <Box
                width="100%"
                height="100%"
                backgroundImage={`url(${images[currentImageIndex]})`}
                backgroundSize="cover"
                backgroundPosition="center"
            />
        </Box>
    );
};

export default HeroSection;
