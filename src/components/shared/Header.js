import { Box, Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import image from '@/assets/The Dragon News.png';

const Header = () => {
    return (
        <div>
            <Box>
                <Container>
                    <Image height={500} width={500} src={image} alt='header'></Image>
                </Container>
            </Box>
        </div>
    );
};

export default Header;